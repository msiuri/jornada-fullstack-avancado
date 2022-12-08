const Category = require("./category.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
  return Category.find().select({
    _id: true,
    name: true,
  });
};

const create = (category) => {
  return Category.create(category);
};

module.exports = {
  findAll,
  create,
};
