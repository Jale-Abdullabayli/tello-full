const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be defined!"],
    trim:true
  },
  price: {
    type: Number,
    required: [true, "Product price must be defined!"],
  },
  size: {
    type: String,
    required: [true, "Product size must be defined!"],
  },
  colors: {
    type: [String],
    required: [true, "Product colors must be defined!"],
  },
  imageCover: {
    type: String,
    required: [true, "Product image cover must be defined!"],
  },
  images: {
    type: [String]
  }
  

});

const Product = mongoose.model("product", productSchema);

module.exports = Product;