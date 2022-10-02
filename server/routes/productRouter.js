const express = require("express");
const router = express.Router();
const productController = require("../controller/productController"); 
const { privateRoute, access } = require("../middleware/privateRoute");
const reviewRouter = require("./reviewRouter");


router.use("/:productId/reviews", reviewRouter);

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);

module.exports = router;