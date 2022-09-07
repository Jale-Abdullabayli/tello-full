const Product = require("../model/product");
const GlobalFilter = require("../utils/GlobalFilter");
const { asyncCatch } = require("../utils/asyncCatch");


exports.getAllProducts = asyncCatch(async (req, res) => {
  let allProducts = new GlobalFilter(Product.find(), req.query);
  allProducts
    .filter()

  const products = await allProducts.query;

  res.json({
    success: true,
    quantity: products.length,
    data: {
      products
    },
  });

})

exports.getOneProduct = asyncCatch(async (req, res) => {

  const id = req.params.id;

  const oneProduct = await Product.findById(id);

  if (!oneProduct) return next(new GlobalError("Invalid Id: FINDONE", 404));


  res.status(200).json({
    success: true,
    data: {
      product: oneProduct,
    },
  });

})

