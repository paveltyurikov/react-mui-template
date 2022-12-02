import { factory, primaryKey } from "@mswjs/data";
import { v4 as uuid } from "uuid";


const db = factory({
  posts: {
    id: primaryKey(String),
    title: String,
    content: String,
    created: String,
    updated: String,
  },
});

export const createPost = (data) => {
  return db.posts.create({
    ...data,
    id: uuid(),
    created: new Date(),
    updated: new Date(),
  });
};

export const updatePost = (id, data) => {
  return db.posts.update({
    where: {
      id: {
        equals: id,
      },

    },
    data,
  });
};

export const getPostsList = () => {
  return db.posts.getAll();
};

export const getPost = (id) => {
  return db.posts.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });
};

export const deletePost = (id) => {
  return db.posts.delete({
    where: {
      id: {
        equals: id,
      },
    },
  });
};
