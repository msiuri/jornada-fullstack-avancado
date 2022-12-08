// import express
const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

//setting routes
router.get("/", controller.findAll);
router.post("/", controller.create);

//exporting
module.exports = router;
