const express = require("express");
const ListCoinController = require("./Controllers/ListCoinController");

const routes = express.Router();

routes.get('/coins', ListCoinController.index);

module.exports = routes;
