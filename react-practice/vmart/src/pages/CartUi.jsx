
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartUi = () => {

    const {toggle, setToggle,addcart,sum,discount} = useContext(MyStore)
    
    


    

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {addcart.length} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          {
            addcart.map((val)=>{
                return <div className="space-y-4 lg:col-span-2">

            {/* Cart Item */}
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row">

                {/* Image */}
                <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-100 sm:w-32">
                  <img
                    src={val.images?.[0]}
                    alt="Product"
                    className="h-full w-full object-contain p-3"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          {val.category}
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-gray-900">
                          {val.title}
                        </h2>
                      </div>

                      {/* Remove */}
                      <button className="text-sm font-medium text-red-500 hover:text-red-700">
                        Remove
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {val.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                    {/* Quantity */}
                    <div className="flex items-center rounded-lg border border-gray-300">
                      <button className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100">
                        −
                      </button>

                      <span className="border-x border-gray-300 px-5 py-2 text-sm font-medium">
                        1
                      </span>

                      <button className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-bold text-gray-900">
                      ${val.price}
                    </p>

                  </div>
                </div>
              </div>
            </div>

          

          </div>
            })
          }

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium text-gray-900">
                  ${sum.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Discount
                </span>

                <span className="font-medium text-red-500">
                  -${discount.toFixed(2)}
                </span>
              </div>

            </div>

            <div className="my-6 border-t border-gray-200" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900">
                ${(sum - discount).toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button className="mt-6 w-full rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800">
              Proceed to Checkout
            </button>

            <button className="mt-3 w-full rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              Continue Shopping
            </button>

            {/* Secure Payment */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
              <span>🔒</span>
              <span>Secure checkout</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CartUi;

