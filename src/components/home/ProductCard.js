import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-[450px] bg-white text-black z-20 flex flex-col items-center p-6">
      <div>
        <img
          className="w-48 h-60 object-fill"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full">
        <h1 className="text-base">{product.title.substring(0, 30)}...</h1>
      </div>
    </div>
  );
};

export default ProductCard;
