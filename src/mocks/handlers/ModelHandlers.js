import { rest } from "msw";
import { v4 as uuid } from "uuid";
import { db } from "../db";


class ModelHandlers {
  constructor({ db, modelName, apiUrl, storage }) {
    this.modelName = modelName;
    this.model = db[modelName];
    this.apiUrl = apiUrl;
    this.detailUrl = `${this.apiUrl}/:id`;
    this.storage = storage;
  }

  getList = () => {
    return rest.get(this.apiUrl, (req, res, ctx) => {
      const records = this.model.getAll();
      return res(ctx.json(records));
    });
  };
  getById = () => {
    return rest.get(this.detailUrl, (req, res, ctx) => {
      const record = this.model.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      return res(ctx.json(record));
    });
  };
  create = () => {
    return rest.post(this.apiUrl, (req, res, ctx) => {
      const { data } = req.body;
      if (data.title === "test_bad_request") {
        return res(
          ctx.status(400),
          ctx.json({
            code: "validation_error",
            errors: {
              title: ["This title has already been taken"],
              content: "Content field has validation problems",
            },
          })
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
      return res(ctx.status(201), ctx.json(record));
    });
  };
  update = () => {
    return rest.patch(this.detailUrl, (req, res, ctx) => {
      if (req.body.title === "test_bad_request") {
        return res(
          ctx.status(400),
          ctx.json({
            code: "validation_error",
            errors: {
              title: ["This title has already been taken"],
              content: "Content field has validation problems",
            },
          })
        );
      }
      if (req.params.id === "test_id") {
        return res(ctx.status(200), ctx.json(req.body));
      }
      const record = db.posts.update({
        where: {
          id: {
            equals: req.params.id,
          },
        },
        data: { ...req.body, updated: new Date() },
      });
      this.storeAllRecords();
      return res(ctx.status(200), ctx.json(record));
    });
  };
  delete = () => {
    return rest.delete(this.detailUrl, (req, res, ctx) => {
      if (req.params.id === "non_existing") {
        return res(
          ctx.status(404),
          ctx.json({
            code: "validation_error",
            errors: {
              title: ["This title has already been taken"],
              content: "Content field has validation problems",
            },
          })
        );
      }
      db.posts.delete({
        where: {
          id: {
            // @ts-ignore
            equals: req.params.id,
          },
        },
      });
      this.storeAllRecords();
      return res(ctx.status(204));
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

export default ModelHandlers;