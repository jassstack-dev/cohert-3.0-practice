
import React from "react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely right to your doorstep.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Your payments are protected with safe and secure payment methods.",
    },
    {
      icon: "💰",
      title: "Better Prices",
      description:
        "Enjoy great products at competitive prices without compromising on quality.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Why Shop With Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            We make your shopping experience simple, secure, and convenient.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {benefit.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
