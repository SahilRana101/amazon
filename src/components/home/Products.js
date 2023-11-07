import React from "react";
import { logo } from "../../assets/index";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="w-full bg-gray-100 p-6 grid grid-cols-4 gap-10">
      <img className="w-24 mt-3" src={logo} alt="logo" />
    </div>
  );
};

export default Products;
