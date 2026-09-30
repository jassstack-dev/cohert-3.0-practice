import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";

const ProductDetail = () => {
  const { category, id } = useParams();

  const { products, addToCart, cart,quantity} =
    useContext(MyStore);
  // console.log(products)
  console.log(cart);

  let singleProduct = products.find((val) => {
    return val.id === Number(id);
  });

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  let  isInCart = cart.some((val)=>{
    return val.id === singleProduct.id
  })

  console.log(isInCart)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-black">Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-black">Products</span>
          <span>/</span>
          <span className="text-gray-900">Product Detail</span>
        </div>

        {/* Main Product Section */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
          {/* Product Image */}
          <div className="flex min-h-[500px] items-center justify-center bg-gray-100 p-8">
            <div className="relative w-full max-w-lg">
              {/* Wishlist */}
              <button className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm transition hover:scale-105">
                ♡
              </button>

              <img
                src={singleProduct.image}
                alt="Product"
                className="mx-auto h-[420px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            {/* Category */}
            <span className="mb-4 w-fit rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {singleProduct.category}
            </span>

            {/* Title */}
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex text-yellow-400">★★★★★</div>

              <span className="text-sm text-gray-500">
                4.8 ({singleProduct.rating.count} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ₹{singleProduct.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹
                {(
                  singleProduct.price +
                  (singleProduct.price / 100) * 50
                ).toFixed(2)}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                50% OFF
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-xl leading-7 text-gray-600">
              {singleProduct.description}
            </p>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200" />

            {/* Quantity */}
            
            {/* Buttons */}
            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              {
                isInCart ? <button
    disabled
    className="flex-1 rounded-xl bg-gray-300 px-6 py-4 font-semibold text-gray-500 cursor-not-allowed"
  >
    Added to Cart ✓
  </button> : <button
                onClick={() => {
                  console.log("QUANTITY BEFORE ADD:", quantity);
                  addToCart({ ...singleProduct, quantity: quantity });
                }}
                
                className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
              >
                Add to Cart
              </button>
              }

              <button className="flex-1 rounded-xl border border-gray-900 px-6 py-4 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-200 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-lg">🚚</p>
                <p className="mt-2 text-sm font-semibold">Free Delivery</p>
                <p className="text-xs text-gray-500">On orders above ₹999</p>
              </div>

              <div>
                <p className="text-lg">↩️</p>
                <p className="mt-2 text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-gray-500">7 days return policy</p>
              </div>

              <div>
                <p className="text-lg">🔒</p>
                <p className="mt-2 text-sm font-semibold">Secure Payment</p>
                <p className="text-xs text-gray-500">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>

          <p className="mt-5 max-w-4xl leading-7 text-gray-600">
            {singleProduct.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Brand</p>
              <p className="mt-1 font-semibold">JassStore</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-1 font-semibold">{singleProduct.category}</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Availability</p>
              <p className="mt-1 font-semibold text-green-600">In Stock</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Shipping</p>
              <p className="mt-1 font-semibold">2–5 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
