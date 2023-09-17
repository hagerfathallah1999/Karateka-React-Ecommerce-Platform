import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import AddToCart from "../components/AddToCart";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

export default function Menu({
  items,
  categories,
  currentPage,
  currentCategory,
  pageSize,
  noOfPages,
  handleAddToCart,
  changeCurrentCategory,
  changeCurrentPage,
}) {
  // Filter
  let itemsToRender = useMemo(() => {
    console.log("Memo run!!!");
    return currentCategory === 0
      ? items
      : items.filter((item) => item.category === currentCategory);
  }, [items, currentCategory]);

  // Pagination
  noOfPages = Math.ceil(itemsToRender.length / pageSize);

  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;

  itemsToRender = itemsToRender.slice(start, end);

  return (
    <>
      <div className="w-screen max-w-screen min-h-screen bg-gradient-to-b from-gray-500 to-gray-100 py-24">
        <div className="flex flex-row items-start justify-between w-10/12 m-auto">
          {/* Filter */}
          <div className="mt-6">
            <div className="btn-group btn-group-vertical">
              {categories.map((category) => (
                <button
                  onClick={() => changeCurrentCategory(category.id)}
                  key={category.id}
                  className={`btn ${
                    category.id === currentCategory ? "btn-active" : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          {/* menu */}
          <div className="flex flex-col items-center gap-6 mt-6 w-11/12">
            {/* TODO: fix the loader */}
            {items.length === 0 && (
              <div className="flex justify-center">
                <Loader />
              </div>
            )}
            {items.length !== 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemsToRender.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {pages.length > 1 && (
              <div>
                <div className="btn-group">
                  {pages.map((page) => (
                    <button
                      onClick={() => changeCurrentPage(page)}
                      key={page}
                      className={`btn ${
                        currentPage === page ? "btn-active" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
