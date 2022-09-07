import React from "react";
import { Routes, Route } from "react-router-dom";

// Connections
import {
  Home,
  ProductsPage,
  ProductContent,
  AsketQuestions,
  Basket,
  Login,
} from "../../pages";
import Register from "../Register/Register";
const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="" element={<Home />} exact></Route>
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="productContent/:id" element={<ProductContent />}></Route>
        <Route path="asketQuestions" element={<AsketQuestions />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="basket" element={<Basket />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
