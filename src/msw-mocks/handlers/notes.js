import { http, HttpResponse } from "msw";
import { v4 as uuid } from "uuid";
import { API_BASE } from "~/config";
import createUrl from "~/lib/createUrl";
import { Storage, db } from "~/msw-mocks/db";
import { INCORRECT_DATA, NON_EXISTING_POST_ID } from "~/tests/notes/note";

const STORAGE = new Storage();

const storeAllRecords = () => {
  const data = STORAGE.load();
  data["notes"] = db.notes.getAll();
  STORAGE.save(data);
};

const LIST_URL = createUrl([...API_BASE, "notes"]);
const DETAILS_URL = createUrl([...API_BASE, "notes", ":id"]);

const NOTES_HANDLERS = [
  http.get(LIST_URL, () => {
    const records = db.notes.getAll();
    return HttpResponse.json(records);
  }),
  http.get(DETAILS_URL, ({ params }) => {
    const record = db.notes.findFirst({
      where: {
        id: {
          equals: params.id,
        },
      },
    });
    return HttpResponse.json(record);
  }),
  http.post(LIST_URL, async ({ request }) => {
    const data = await request.json();
    console.log({ data });
    if (data.title === INCORRECT_DATA.title) {
      return HttpResponse.json(
        {
          code: "validation_error",
          errors: {
            title: ["This title has already been taken"],
            content: "Content field has validation problems",
          },
        },
        { status: 400 },
      );
    }
    const now = new Date();
    const record = db.notes.create({
      ...data,
      id: uuid(),
      published: now,
      created: now,
      updated: now,
    });

    console.log({ record });
    storeAllRecords();
    return HttpResponse.json(record, { status: 201 });
  }),
  http.patch(DETAILS_URL, async ({ request, params }) => {
    const data = await request.json();
    if (data.title === INCORRECT_DATA.title) {
      return HttpResponse.json(
        {
          code: "validation_error",
          errors: {
            title: ["This title has already been taken"],
            content: "Content field has validation problems",
          },
        },
        { status: 400 },
      );
    }
    if (params.id === "test_id") {
      return HttpResponse.json(data, { status: 200 });
    }
    const record = db.notes.update({
      where: {
        id: {
          equals: params.id,
        },
      },
      data: { ...data, updated: new Date() },
    });
    storeAllRecords();
    return HttpResponse.json(record, { status: 200 });
  }),
  http.delete(DETAILS_URL, ({ params }) => {
    if (params.id === NON_EXISTING_POST_ID) {
      return HttpResponse.json(
        {
          code: "validation_error",
          errors: {
            title: ["This title has already been taken"],
            content: "Content field has validation problems",
          },
        },
        { status: 404 },
      );
    }
    db.notes.delete({
      where: {
        id: {
          equals: params.id,
        },
      },
    });
    storeAllRecords();
    return HttpResponse.text(null, { status: 200 });
  }),
];

export default NOTES_HANDLERS;
