
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const StateCard = () => {

    const {productData,addcart,sum} = useContext(MyStore)

    let productCategory = productData.reduce((acc, val)=>{
    if(!acc.includes(val.category)){
        acc.push(val.category)
    }

    return acc
},[])

let topProduct =  productData.length > 0?
productData.reduce((top, val) =>{
   return val.rating > top.rating ? val : top
}

):[];

console.log(topProduct.title)









  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Cart Items */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">
          Cart Items
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          {addcart.length}
        </h2>

        <p className="mt-2 text-xs text-gray-400">
          Items currently in your cart
        </p>
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">
          Categories
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          {productCategory.length}
        </h2>

        <p className="mt-2 text-xs text-gray-400">
          Different categories explored
        </p>
      </div>

      {/* Top Product */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">
          Top Product
        </p>

        <h2 className="mt-2 line-clamp-1 text-xl font-bold text-gray-900">
          {topProduct.title}
        </h2>

        <p className="mt-2 text-xs text-gray-400">
          Your most viewed product
        </p>
      </div>

      {/* Cart Value */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">
          Cart Value
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          ${sum}
        </h2>

        <p className="mt-2 text-xs text-gray-400">
          Total value of your cart
        </p>
      </div>

    </div>
  );
};

export default StateCard;

