const { Router } = require("express");
const bodyParser = require("body-parser");

const productController = require("..product.controller");

exports.RestRouter = () => {
  const router = Router();

  router.use(bodyParser.urlencoded({ extended: true }));

  router.get("/", productController.fetch);
  router.post("/store", productController.insert);
  router.put("/update/:id", productController.update);
  router.delete("/delete/:id", productController.delete);
};
