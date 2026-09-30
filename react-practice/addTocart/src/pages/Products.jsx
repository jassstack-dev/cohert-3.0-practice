import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import { NavLink, useParams } from "react-router";

const Products = () => {

    const { category:selectedcategory } = useParams();
    
   

   const {products, setProducts} = useContext(MyStore)

    let category = products.reduce((acc, val)=>{
        if(!acc.includes(val.category)){
            acc.push(val.category)
        }
        return acc
    },[])
    
    const categoryCount = category.map((val)=>{
        const count = products.filter((product)=>{
          return  product.category === val
        }).length

        return {
            category:val,
            count :count
        }
    })

    // console.log(categoryCount)

    const filteredProducts = selectedcategory ? products.filter((product)=>{
        return product.category === selectedcategory;
    }) : products






  return (
    <div className="min-h-screen bg-[#f7f7f5] px-5 py-10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Discover
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                All Products
              </h1>

              <p className="mt-3 max-w-lg text-gray-500">
                Explore our collection of products designed for everyday life.
              </p>
            </div>

            {/* Search */}
            <div className="flex w-full items-center rounded-2xl border border-gray-200 bg-white px-4 py-3 md:w-80">
              <svg
                className="mr-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Sidebar */}
          <aside className="h-fit w-full rounded-2xl border border-gray-200 bg-white p-6 lg:w-60">

            <div className="mb-7">
              <h3 className="mb-4 font-semibold text-gray-900">
                Categories
              </h3>

              <div className="space-y-2">
                <button className="flex w-full items-center justify-between rounded-xl bg-black px-4 py-3 text-sm font-medium text-white">
                  All Products
                  <span>{products.length}</span>
                </button>

               {categoryCount.map((elem,id)=>{
                return  <NavLink to={`/products/${elem.category}`} key={elem.category} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-black">
                  {elem.category}
                  <span>{elem.count}</span>
                </NavLink>

               })}
                

               

                
              </div>
            </div>

            {/* <div className="border-t border-gray-100 pt-6">
              <h3 className="mb-4 font-semibold text-gray-900">
                Price Range
              </h3>

              <input
                type="range"
                className="w-full accent-black"
              />

              <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>₹0</span>
                <span>₹10,000+</span>
              </div>
            </div> */}
          </aside>

          {/* Products Section */}
          <section className="flex-1">

            {/* Toolbar */}
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-900">{products.length}</span>{" "}
                products
              </p>

              <select className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* Product 1 */}
             {
                filteredProducts.map((val)=>{
                    return  <NavLink to={`/products/${val.category}/${val.id}`} key={val.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white">

                <div className="relative h-72 overflow-hidden bg-gray-100">

                  <img
                    src={val.image}
                    alt="Headphones"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold">
                    {val.category}
                  </span>

                  <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-black hover:text-white">
                    ♡
                  </button>
                </div>

                <div className="p-5">

                  <div className="mb-2 flex items-center gap-1 text-xs text-yellow-500">
                    ★★★★★
                    <span className="ml-1 text-gray-400">({val.count})</span>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900">
                    {val.title.slice(0,20)}...
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {val.description.slice(0,50)}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        ₹{val.price}
                      </span>

                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ₹{(val.price + (val.price/50)*100).toFixed(2)}
                      </span>
                    </div>

                    <button className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
                      View
                    </button>

                  </div>
                </div>
              </NavLink>
                })
             }

             
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;