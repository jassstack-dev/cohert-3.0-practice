
import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MyStore } from "../context/MyContext";

const Navbar = () => {

   const {addcart} =  useContext(MyStore)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-gray-400">ly</span>
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to={'/'} className="text-sm font-medium text-gray-900 transition hover:text-gray-500">
            Home
          </NavLink>
          <NavLink to={'/about'} className="text-sm font-medium text-gray-900 transition hover:text-gray-500">
            About
          </NavLink>
          <NavLink to={'/products'} className="text-sm font-medium text-gray-900 transition hover:text-gray-500">
            Shop
          </NavLink>
          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* User */}
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
              V
            </div>

            <span className="text-sm font-medium text-gray-800">
              Vimal
            </span>
          </div>

          {/* Cart */}
          <NavLink to={`/cart`} className="relative text-gray-800 transition hover:text-gray-500">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.61 6.75m0 0h13.77l1.35-3.375A1.125 1.125 0 0 1 21.77 3H22.5M5.61 6.75l1.04 10.398A2.25 2.25 0 0 0 8.89 19.125h7.72a2.25 2.25 0 0 0 2.24-1.977L19.38 6.75M9 21h.008v.008H9V21Zm6 0h.008v.008H15V21Z"
              />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
             {addcart.length}
            </span>
          </NavLink>

          {/* Login */}
          <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
            Login
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

