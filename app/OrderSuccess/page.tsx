"use client";

import React from "react";
import { FiCheckCircle, FiHome, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useStore } from "../context/AppContext";

const OrderSuccess = () => {
  const { total, cart } = useStore();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FiCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-500 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6 text-left">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Total Items:</span> {cart.length}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Total Amount:</span> ${total}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/Admin/deshboard"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            <FiHome /> Go to Dashboard
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl transition"
          >
            <FiShoppingCart /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
