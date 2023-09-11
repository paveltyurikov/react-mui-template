import { factory, primaryKey } from "@mswjs/data";

import { v4 as uuid } from "uuid";


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
  users: {
    id: primaryKey(String),
    email: String,
    password: String,
    is_active: Boolean,
    created: String,
    updated: String,
  },
});

const ADMIN = {
  email: "admin@email.com",
  password: "admin",
  is_active: true,
};

const checkAdminCreated = (db) => {
  return db.users.findFirst({ email: ADMIN.email }) !== null;
};


const initAdminUser=(db)=>{
  if(checkAdminCreated(db)){
    return
  }
  db.users.create({ id:uuid(),...ADMIN });
}
export const dbInit = () => {
  const database = new Storage().load();
  initAdminUser(db);
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry) => {
        model.create(entry);
      });
    }
  });
};
