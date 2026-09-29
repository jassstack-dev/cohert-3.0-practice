
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const Products = () => {
 
  const {productData} = useContext(MyStore)
const navigate = useNavigate()

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Explore Our Collection
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              All Products
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Discover quality products at great prices.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {productData.length}
            </span>{" "}
            products
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productData.map((product) => (
            <div
            onClick={()=> navigate(`/details/${product.id}`)}
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
                {/* Category */}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-semibold capitalize text-white">
                  {product.category}
                </span>

                {/* Discount */}
                <span className="absolute right-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                  {product.discountPercentage}% OFF
                </span>

                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Brand */}
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {product.brand}
                </p>

                {/* Title */}
                <h2 className="mt-1 min-h-[48px] text-base font-semibold leading-6 text-gray-900">
                  {product.title}
                </h2>

                {/* Rating + Availability */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    ★ {product.rating}
                  </span>

                  <span className="text-xs font-medium text-green-600">
                    {product.availabilityStatus}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-xs text-gray-400">
                    {product.stock} left
                  </span>
                </div>

                {/* Shipping */}
                <p className="mt-3 truncate text-xs text-gray-400">
                  🚚 {product.shippingInformation}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Button - UI Only */}
                <button className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
