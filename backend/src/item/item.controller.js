const service = require("./item.service");
const { isObjectIdValid } = require("../db/database.helper");

const findAll = async (req, res) => {
  const items = await service.findAll();

  res.send(items);
};

const findById = (req, res) => {
  const id = req.params.id;
  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "Id Inválido" });
  }

  const item = {};

  if (!item) {
    return res.status(404).send({ message: "item invalido" });
  }

  res.send(item);
};

const create = async (req, res) => {
  const item = req.body;
  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "dados inválidos" });
  }

  const newItem = await service.create(item);

  res.status(201).send(newItem);
};
const update = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "id invalido" });
  }

  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "dados inválidos" });
  }

  const updatedItem = {};

  if (!updatedItem) {
    return res.send(404).send({ message: "item nao encontrado" });
  }

  res.send({ message: "success" });
};
const deleteById = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "id invalid" });
  }

  const deletedItem = {};

  if (!deletedItem) {
    return res.status(400).send({ message: "item nao encontrado" });
  }

  res.send({ message: "deleted" });
};

//EXERCICIO: criar router de category, com os endpoints ReadAll e Create

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
