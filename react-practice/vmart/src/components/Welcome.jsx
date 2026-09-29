
import React from "react";

const Welcome = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-3xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Welcome Back
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome, Vimal 👋
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
          Discover products you’ll love and find everything you need
          in one place.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="rounded-xl bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Shop Now
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
            View All Products
          </button>
        </div>

      </div>
    </div>
  );
};

export default Welcome;

