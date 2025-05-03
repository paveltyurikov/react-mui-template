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
  notes: {
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
    const dataEntries = database[key];
    if (dataEntries) {
      dataEntries?.forEach((entry) => {
        model.create(entry);
      });
    }
  });
};
