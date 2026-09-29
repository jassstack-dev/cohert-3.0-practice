import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ShopByCategory = () => {
  const { productData } = useContext(MyStore);

  let productCategory = productData.reduce((acc, val) => {
    if (!acc.includes(val.category)) {
      acc.push(val.category);
    }
    return acc;
  }, []);

//   console.log(productCategory);

const categoryCount = productCategory.map((category) => {

  const count = productData.filter(
    (product) => product.category === category
  ).length;

  return {
    category: category,
    count: count
  };

});

// console.log(categoryCount.count);



  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-2 text-gray-500">
            Find the products you need from our popular categories.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {/* Beauty */}
          {categoryCount.map((val) => {
            return (
              <div key={val.category} className="group cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                  💻
                </div>

                <h3 className="mt-4 text-sm font-semibold text-gray-900">
                  {val.category}
                </h3>

                <p className="mt-1 text-xs text-gray-400">{val.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
