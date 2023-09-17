import React from "react";
import AddToCart from "./AddToCart";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between items-center lg:w-80 lg:h-96">
      <div className="mb-2 h-3/4 w-full items-center">
        <img
          src={`src/assets/Imgs/${product.image}`}
          alt={product.name}
          className="w-full h-full"
        />
      </div>
      <div>
        <h3 className="text-md font-semibold">{product.name}</h3>
      </div>

      <div className="flex items-center w-full justify-evenly">
        <div>
          <p className="text-gray-600">${product.price}</p>
        </div>
        <div className="mt-2">
          <AddToCart
            id={product.id}
            inCart={product.inCart}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
