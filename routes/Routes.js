const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controllers");

router.get("/", Controller.helloWorld);

router.post("/products", Controller.createProducts);

router.get("/products", Controller.searchProducts);

router.get("/multi-products", Controller.searchMultipleProducts);

router.get("/all-products", Controller.getAllProducts);

module.exports = router;
