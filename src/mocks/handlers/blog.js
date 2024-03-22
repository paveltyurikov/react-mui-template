import { http, HttpResponse } from "msw";
import { v4 as uuid } from "uuid";
import { Storage } from "~/mocks/db";
import { INCORRECT_DATA, NON_EXISTING_POST_ID } from "~/tests/blog/post";
import { db } from "../db";


class PostModelHandlers {
  constructor({ db, modelName, apiUrl, storage }) {
    this.modelName = modelName;
    this.model = db[this.modelName];
    this.apiUrl = apiUrl;
    this.detailUrl = `${this.apiUrl}/:id`;
    this.storage = storage;
  }

  getList = () => {
    return http.get(this.apiUrl, (req, res, ctx) => {
      const records = this.model.getAll();
      return  HttpResponse.json(records)
    });
  };
  getById = () => {
    return http.get(this.detailUrl, ({ request, params }) => {
      const record = this.model.findFirst({
        where: {
          id: {
            equals: params.id,
          },
        },
      });
      return HttpResponse.json(record);
    });
  };
  create = () => {
    return http.post(this.apiUrl, async ({ request }) => {
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
      const now = new Date();
      const record = this.model.create({
        //@ts-ignore
        ...data,
        id: uuid(),
        published: now,
        created: now,
        updated: now,
      });
      this.storeAllRecords();
      return HttpResponse.json(record, { status: 201 });
    });
  };
  update = () => {
    return http.patch(this.detailUrl, async ({ request, params }) => {
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
      const record = db.posts.update({
        where: {
          id: {
            equals: params.id,
          },
        },
        data: { ...data, updated: new Date() },
      });
      this.storeAllRecords();
      return HttpResponse.json(record, { status: 200 });
    });
  };
  delete = () => {
    return http.delete(this.detailUrl, ({ params }) => {
      if (params.id === NON_EXISTING_POST_ID) {
        return HttpResponse.json({
            code: "validation_error",
            errors: {
              title: ["This title has already been taken"],
              content: "Content field has validation problems",
            },
          }, { status: 404 })
      }
      db.posts.delete({
        where: {
          id: {
            equals: params.id,
          },
        },
      });
      this.storeAllRecords();
      return HttpResponse.text(null, { status: 200 });
    });
  };

  getHandlers = () => {
    return [
      this.getList(),
      this.getById(),
      this.create(),
      this.update(),
      this.delete(),
    ];
  };
  storeAllRecords = () => {
    const data = this.storage.load();
    data[this.modelName] = this.model.getAll();
    this.storage.save(data);
  };
}

const postModelHandlers = new PostModelHandlers({
  db,
  modelName: "posts",
  apiUrl: "/api/post",
  storage: new Storage(),
}).getHandlers();

export default postModelHandlers;
