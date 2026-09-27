import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {setToggle} = useContext(MyStore)

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
            E
          </div>

          <span className="text-lg font-bold tracking-tight text-gray-900">
            Employee<span className="text-gray-500">Hub</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button 
          onClick={()=> setToggle('dashboard')}
          className="text-sm font-medium text-gray-900">
            Dashboard
          </button>

          <button
          onClick={()=> setToggle('employees')}
           className="text-sm font-medium text-gray-500 transition hover:text-gray-900">
            Employees
          </button>

          <button 
          onClick={()=> setToggle('addEmployee')}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            + Add Employee
          </button>
        </div>

        {/* Desktop Profile + Login */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Profile */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
              J
            </div>

            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-gray-900">
                Jass
              </p>
              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>
          </div>

          {/* Login */}
          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 md:hidden"
        >
          {isOpen ? (
            <span className="text-xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">

            <button className="rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-100">
              Dashboard
            </button>

            <button className="rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100">
              Employees
            </button>

            <button className="rounded-lg bg-black px-4 py-3 text-left text-sm font-medium text-white">
              + Add Employee
            </button>

            {/* Mobile Profile */}
            <div className="my-2 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3 px-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700">
                  J
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Jass
                  </p>
                  <p className="text-xs text-gray-500">
                    Admin
                  </p>
                </div>
              </div>
            </div>

            <button className="rounded-lg border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50">
              Login
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;