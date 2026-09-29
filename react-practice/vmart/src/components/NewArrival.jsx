import React from "react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      category: "Beauty",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },
    {
      id: 2,
      title: "Apple AirPods Max Silver",
      price: 549.99,
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    },
    {
      id: 3,
      title: "Annibale Colombo Sofa",
      price: 2499.99,
      category: "Furniture",
      image:
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
    },
    {
      id: 4,
      title: "Knives",
      price: 14.99,
      category: "Kitchen",
      image:
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/knives/1.webp",
    },
    {
      id: 5,
      title: "Calvin Klein CK One",
      price: 49.99,
      category: "Fragrances",
      image:
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Just Arrived
            </p>

            <h2 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
              New Arrivals
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Discover the latest products added to our collection.
            </p>
          </div>

          <button className="w-fit rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
            View All New Arrivals
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
                <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  New
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {product.category}
                </p>

                <h3 className="mt-1 line-clamp-2 min-h-[48px] text-sm font-semibold text-gray-900">
                  {product.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    New
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;