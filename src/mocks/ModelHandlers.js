class ModelHandlers {
  constructor({ db, modelName, apiUrl, storage }) {
    this.modelName = modelName;
    this.model = db[modelName];
    this.apiUrl = apiUrl;
    this.detailUrl = `${this.apiUrl}/:id`;
    this.storage = storage;
  }

  getList = () => {
    throw Error("ModelHandlers.getList not implemented");
  };
  getById = () => {
    throw Error("ModelHandlers.getById not implemented");
  };
  create = () => {
    throw Error("ModelHandlers.create not implemented");
  };
  update = () => {
    throw Error("ModelHandlers.update not implemented");
  };
  delete = () => {
    throw Error("ModelHandlers.delete not implemented");
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
