import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                About JassStore
              </p>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                We make shopping
                <span className="text-gray-400"> simple.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                JassStore is built around one simple idea — finding quality
                products should be easy, enjoyable, and hassle-free.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800">
                  Explore Products
                </button>

                <button className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-black">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                  alt="Shopping"
                  className="h-[450px] w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="mt-1 text-sm text-gray-400">
                  Happy Customers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">10K+</h2>
            <p className="mt-2 text-sm text-gray-400">Customers</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">500+</h2>
            <p className="mt-2 text-sm text-gray-400">Products</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">25+</h2>
            <p className="mt-2 text-sm text-gray-400">Categories</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">4.9/5</h2>
            <p className="mt-2 text-sm text-gray-400">Customer Rating</p>
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Our store"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Our Story
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-gray-950">
                Built with people in mind.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                We started JassStore with a simple goal: create an online
                shopping experience that feels clean, transparent, and easy
                to use.
              </p>

              <p className="mt-4 leading-8 text-gray-500">
                From the products we select to the experience you get while
                shopping, every detail is designed to make your journey
                better.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                    ✓
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    Quality First
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Products selected with quality in mind.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                    ♡
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    Customer Focus
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Your experience always comes first.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why JassStore
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Shopping without the unnecessary complexity.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-6 text-3xl">01</div>

              <h3 className="text-xl font-semibold">
                Curated Products
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                We focus on products that bring real value to your everyday
                life.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-6 text-3xl">02</div>

              <h3 className="text-xl font-semibold">
                Simple Experience
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Browse, discover, and shop without unnecessary steps.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-6 text-3xl">03</div>

              <h3 className="text-xl font-semibold">
                Customer First
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Every part of our experience is designed around our
                customers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-200 md:p-16">

          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Ready to discover something new?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Explore our latest collection and find something made for you.
          </p>

          <button className="mt-8 rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800">
            Shop Now →
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;