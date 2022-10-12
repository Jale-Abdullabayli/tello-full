const express = require("express");
const router = express.Router();
const productController = require("../controller/productController"); 
const { privateRoute, access } = require("../middleware/privateRoute");
const reviewRouter = require("./reviewRouter");
const upload = require("../utils/multer");

router.use("/:productId/reviews", reviewRouter);


router.get("/", productController.getAllProducts);
router.get("/search/:text", productController.searchProducts);
router.post("/",upload.any(), productController.createProduct);
router.get("/:id", productController.getOneProduct);

module.exports = router;