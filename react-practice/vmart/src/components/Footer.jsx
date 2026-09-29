
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Shoply</h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Your everyday shopping destination for quality products,
              better prices, and a simple shopping experience.
            </p>

            <div className="mt-5 flex gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold transition hover:bg-white hover:text-black">
                f
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold transition hover:bg-white hover:text-black">
                ig
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold transition hover:bg-white hover:text-black">
                X
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="transition hover:text-white">
                  Shop
                </a>
              </li>

              <li>
                <a href="/about" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="/cart" className="transition hover:text-white">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Customer Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Subscribe to get updates about new products and special offers.
            </p>

            <div className="mt-4 flex overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button className="bg-white px-4 text-sm font-semibold text-black transition hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Shoply. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
