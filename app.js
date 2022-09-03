const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const errorHandler = require("./error/errorHandler");
const GlobalError = require("./error/GlobalError");
const productsRouter = require("./routes/productRouter");

const app = express();

app.use("/api/v1/products", productsRouter);

app.use((req, res, next) => {
  const message = new GlobalError(`The ${req.originalUrl} does not exist`);
  next(message);
});

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);
mongoose.connect(DB, (err) => {
  if (err) return console.log(err);

  console.log("MongoDb connected");

  app.listen(PORT, () => console.log(`Server running in PORT: ${PORT}`));
});
