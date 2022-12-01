// import express
const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

//setting routes
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
//router.put("/:id", controller.update);
//router.delete("/:id", controller.deleteById);

//exporting
module.exports = router;
