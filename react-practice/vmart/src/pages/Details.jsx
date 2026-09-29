
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";

const Details = () => {


    const {id} = useParams()
    const {singleProduct, setSingleProduct,addcart, setAddcart} = useContext(MyStore)
    console.log(addcart)
    // console.log(singleProduct.images[0])


    // single product api
    async function singleProductDetails(){
        try{
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleProduct(res.data)
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        
        singleProductDetails()
    },[])

    // cart
    function cart(prev){
        setAddcart((prev)=> [...prev, singleProduct])
        // console.log(singleProduct)
    }

    const isAdded = addcart.some((product)=>{
       
       return product.id === singleProduct.id
    })
;
console.log(isAdded)
   

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Product Image */}
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-8">
            <img
              src={singleProduct.images?.[0]}
              alt="Product"
              className="h-[400px] w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
              {singleProduct.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-sm font-semibold text-white">
                ★ {singleProduct.rating}
              </div>

              <span className="text-sm text-gray-500">
                120 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ${singleProduct.price}
              </span>

             

              <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-semibold text-red-600">
                {singleProduct.discountPercentage}% OFF
              </span>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="leading-7 text-gray-600">
                {singleProduct.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-2 text-sm font-medium text-gray-700">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-lg border border-gray-300">
                <button className="px-4 py-2 text-lg text-gray-600">
                  −
                </button>

                <span className="border-x border-gray-300 px-5 py-2">
                  1
                </span>

                <button className="px-4 py-2 text-lg text-gray-600">
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart */}
            
                {
                    isAdded ?  <button
        disabled
        className="mt-8 w-full rounded-xl bg-gray-500 px-6 py-4 text-base font-semibold text-white"
    >
        Cart Added
    </button> :
     <button
        onClick={() => cart()}
        className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800"
    >
        Add to Cart
    </button>
                }

          </div>
        </div>

        {/* Extra Product Information */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-xl font-bold text-gray-900">
            Product Information
          </h2>

          <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 md:grid-cols-4">

            <div>
              <p className="text-gray-500">Brand</p>
              <p className="mt-1 font-medium text-gray-900">
                {singleProduct.brand}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Category</p>
              <p className="mt-1 font-medium text-gray-900">
                {singleProduct.category}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Stock</p>
              <p className="mt-1 font-medium text-green-600">
               <span className="text-blue-900">{singleProduct.stock}</span> In Stock
              </p>
            </div>

            <div>
              <p className="text-gray-500">SKU</p>
              <p className="mt-1 font-medium text-gray-900">
                {singleProduct.sku}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;

