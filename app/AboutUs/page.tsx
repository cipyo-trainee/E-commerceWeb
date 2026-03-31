"use client";

import React from "react";
import { FaShippingFast, FaLock, FaHeadset, FaTags } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-linear-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Redefining Online Shopping
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We bring you a seamless, fast, and secure shopping experience with the
          best products at unbeatable prices.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            What started as a small idea has grown into a trusted eCommerce
            platform. Our goal is simple — make shopping effortless, enjoyable,
            and accessible to everyone. We focus on quality, innovation, and
            customer satisfaction in everything we do.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-gray-600">
            We continuously improve our platform by listening to our customers
            and adapting to the latest trends. Your trust drives us forward.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Deliver high-quality products with fast shipping and excellent
              customer service while keeping prices affordable.
            </p>
          </div>
          <div className="p-8 rounded-2xl border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              Become a globally trusted eCommerce brand known for innovation,
              reliability, and customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Customers Love Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <FaShippingFast className="text-blue-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold">Fast Delivery</h4>
            <p className="text-sm text-gray-500 mt-2">
              Lightning-fast shipping you can rely on.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <FaLock className="text-green-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold">Secure Payments</h4>
            <p className="text-sm text-gray-500 mt-2">
              Safe and encrypted transactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <FaHeadset className="text-purple-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold">24/7 Support</h4>
            <p className="text-sm text-gray-500 mt-2">
              Always here to help you anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <FaTags className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold">Best Deals</h4>
            <p className="text-sm text-gray-500 mt-2">
              Amazing prices and exclusive offers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-indigo-600 to-blue-500 text-white text-center py-12 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Explore?
          </h2>
          <p className="mb-6 opacity-90">
            Discover products you’ll love at prices you can’t resist.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
