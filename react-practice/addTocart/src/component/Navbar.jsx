import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MyStore } from "../context/MyContext";

const Navbar = () => {

   const {cart} = useContext(MyStore)


  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
            J
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              JassStore
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Everything you need
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1.5 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white shadow"
                  : "text-gray-600 hover:bg-white hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white shadow"
                  : "text-gray-600 hover:bg-white hover:text-black"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white shadow"
                  : "text-gray-600 hover:bg-white hover:text-black"
              }`
            }
          >
            Products
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Username */}
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
              V
            </div>

            <div>
              <p className="text-[10px] text-gray-400">Welcome</p>
              <p className="text-sm font-semibold text-gray-900">
                Vimal
              </p>
            </div>
          </div>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:bg-black hover:text-white"
          >
            🛒

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
              {cart.length}
            </span>
          </NavLink>

          {/* Login */}
          <NavLink
            to="/login"
            className="hidden rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:block"
          >
            Login
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;