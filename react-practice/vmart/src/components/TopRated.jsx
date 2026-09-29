
import React from "react";

const TopRated = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Customer Favorites
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Top Rated Products
            </h2>

            <p className="mt-2 text-gray-500">
              Products loved and highly rated by our customers.
            </p>
          </div>

          <button className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:block">
            View All Top Rated
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {/* Product 1 */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-56 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
                alt="Essence Mascara Lash Princess"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Beauty
              </p>

              <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                Essence Mascara Lash Princess
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">$9.99</span>

                <span className="text-sm font-medium text-gray-600">
                  ★ 4.8
                </span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-56 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
                alt="Powder Canister"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Beauty
              </p>

              <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                Powder Canister
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">$14.99</span>

                <span className="text-sm font-medium text-gray-600">
                  ★ 4.7
                </span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-56 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
                alt="Red Nail Polish"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Beauty
              </p>

              <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                Red Nail Polish
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">$8.99</span>

                <span className="text-sm font-medium text-gray-600">
                  ★ 4.9
                </span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-56 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
                alt="Calvin Klein CK One"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Fragrances
              </p>

              <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                Calvin Klein CK One
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">$49.99</span>

                <span className="text-sm font-medium text-gray-600">
                  ★ 4.8
                </span>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-56 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"
                alt="Annibale Colombo Bed"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-xs font-medium uppercase text-gray-400">
                Furniture
              </p>

              <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                Annibale Colombo Bed
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">$1899.99</span>

                <span className="text-sm font-medium text-gray-600">
                  ★ 4.9
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile View All */}
        <div className="mt-6 sm:hidden">
          <button className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
            View All Top Rated
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopRated;

