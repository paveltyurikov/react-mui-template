import { factory, primaryKey } from "@mswjs/data";


export class Storage {
  constructor(key = "msw-db") {
    this.key = key;
  }

  load = () =>
    Object.assign(JSON.parse(window.localStorage.getItem(this.key) || "{}"));
  save = (data) => window.localStorage.setItem(this.key, JSON.stringify(data));
}

export const db = factory({
  posts: {
    id: primaryKey(String),
    title: String,
    content: String,
    published: String,
    created: String,
    updated: String,
  },
});

export const dbInit = () => {
  const database = new Storage().load();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry) => {
        model.create(entry);
      });
    }
  });
}
