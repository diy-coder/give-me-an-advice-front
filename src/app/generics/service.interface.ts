export interface ServiceInterface {
  getAll();

  getById(id);

  save(anterior, atual);

  delete(id);
}
