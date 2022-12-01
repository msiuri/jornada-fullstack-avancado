const { isObjectIdValid } = require("../db/database.helper");

//
const findAll = (req, res) => {
  const id = req.params.id;
  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "id invalido" });
  }

  const category = {};

  if (!category) {
    return res.status(404).send({ message: "item invalido" });
  }

  res.send(category);
};

const findById = (req, res) => {
  const id = req.params.id;
  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "id invalido" });
  }

  const category = {};

  if (!category) {
    return res.status(404).send({ message: "item invalido" });
  }
  res.send(category);
};

const create = (req, res) => {
  const category = req.body;
  if (!category || !category.name) {
    return res.status(400).send({ message: "dados invalidos" });
  }

  const newCategory = {};

  res.status(201).send(newCategory);
};

module.exports = {
  findAll,
  findById,
  create,
};
