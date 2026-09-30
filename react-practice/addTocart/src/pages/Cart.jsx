import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, deleteCart } =
    useContext(MyStore);

  let sum = cart.reduce((acc, val) => {
    return acc + val.price * val.quantity;
  }, 0);

  const shippingCharge = sum <= 200 ? ((sum / 100) * 10).toFixed(2) : 0;

  let discount = ((sum / 100) * 20).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Your Shopping Cart
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-gray-500">
            Review your items before placing your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          {cart.map((val) => {
            return (
              <div key={val.id} className="space-y-4 lg:col-span-2">
                {/* Cart Item */}
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* Image */}
                    <div className="flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 sm:w-36">
                      <img
                        src={val.image}
                        alt="Smart Watch"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {val.category}
                          </p>

                          <h2 className="mt-1 text-lg font-bold text-gray-900">
                            {val.title}
                          </h2>

                          <p className="mt-2 text-sm text-gray-500">
                            {val.description}
                          </p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => deleteCart(val.id)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          ×
                        </button>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity */}
                        <div className="flex items-center overflow-hidden rounded-xl border border-gray-200">
                          <button
                            onClick={() => decreaseQuantity(val.id)}
                            className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-gray-100"
                          >
                            −
                          </button>

                          <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                            {val.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(val.id)}
                            className="flex h-9 w-9 items-center justify-center text-lg transition hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-lg font-bold text-gray-900">
                          ₹{(val.quantity * val.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Continue Shopping */}
          <div className="pt-2">
            <button className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-500">
              ← Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="mt-7 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-medium text-gray-900">₹{sum}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>

                  <span className="font-medium text-green-600">
                    {shippingCharge}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Discount</span>

                  <span className="font-medium text-green-600">
                    −₹{discount}
                  </span>
                </div>
              </div>

              <div className="my-6 h-px bg-gray-200" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ₹{(sum + Number(shippingCharge) - Number(discount)).toFixed(2)}
                </span>
              </div>

              {/* Coupon */}
              <div className="mt-7 flex overflow-hidden rounded-xl border border-gray-200">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                />

                <button className="bg-gray-100 px-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                  Apply
                </button>
              </div>

              {/* Checkout */}
              <button className="mt-5 w-full rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800">
                Proceed to Checkout →
              </button>

              {/* Secure Checkout */}
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
                <span>🔒</span>
                Secure & encrypted checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
