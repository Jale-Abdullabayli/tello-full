const Product = require("../model/product");
const GlobalFilter = require("../utils/GlobalFilter");
const { asyncCatch } = require("../utils/asyncCatch");
const GlobalError= require('../error/GlobalError');


exports.getAllProducts = asyncCatch(async (req, res) => {
  let allProducts = new GlobalFilter(Product.find(), req.query);
  allProducts
    .filter().sort().paginate()

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

  const oneProduct = await Product.findById(id).populate("reviews");

  if (!oneProduct) return next(new GlobalError("Invalid Id: FINDONE", 404));


  res.status(200).json({
    success: true,
    data: {
      product: oneProduct,
    },
  });

})



exports.createProduct = asyncCatch(async (req, res) => {
  let newProduct = await Product.create(req.body);

  res.json({
      success: true,
      data: {
          newProduct
      },
  });

})
