const mongoose = require("mongoose");
const Category = require("./category");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be defined!"],
    trim: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Product price must be defined!"],
  },
  imageCover: {
    type: String,
    required: [true, "Product image cover must be defined!"],
  },
  images: {
    type: [String]
  },
  ratingsAverage: {
    type: Number
  },
  sku: String,
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: [true, "Category id must be defined!"]
  }],

  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  variants: [{
    variantId: { type: mongoose.Schema.Types.ObjectId, ref: "variant" },
    values: [String]
  }]

},
  { timestamps: true, toJSON: { virtuals: true } });

productSchema.virtual("reviews", {
  ref: "review",
  foreignField: "product",
  localField: "_id",
});


const increaseCountOfProducts = async (id) => {
  await Category.findByIdAndUpdate(id, {
    $inc: { "countOfProducts": 1 }
  });
}

productSchema.statics.calcCountOfProductsByCategory = async function (categoryIds) {
  categoryIds.map(el => increaseCountOfProducts(el));
};

productSchema.post("save", function (doc) {
  doc.constructor.calcCountOfProductsByCategory(this.category);
});


productSchema.post(/^findOneAnd/, async function (doc) {
  doc.constructor.calcCountOfProductsByCategory(this.category);
});


const Product = mongoose.model("product", productSchema);

module.exports = Product;