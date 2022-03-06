
const express = require("express");
// const path = require("path")
const productsController = require("../controllers/products")

const router = express.Router();

router.get("/", productsController.fetchAll)
router.get("/form",productsController.getproduct) 
router.post("/form", productsController.postproduct)

module.exports = router;