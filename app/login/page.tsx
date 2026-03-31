"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Page = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-87.5">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Signup" : "Login"}
        </h2>

        <form className="flex flex-col gap-4">
          {isSignup && (
            <>
              <div className="flex items-center border rounded px-3">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 outline-none"
                  required
                />
              </div>
              <div className="flex items-center border rounded px-3">
                <FaPhone className="text-gray-500" />
                <input
                  type="number"
                  placeholder="Enter your number"
                  className="w-full p-2 outline-none"
                  required
                />
              </div>
            </>
          )}
          <div className="flex items-center border rounded px-3">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 outline-none"
              required
            />
          </div>
          {/* Animated Password Field */}
          <div className="flex items-center border rounded px-3">
            <FaLock className="text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-2 outline-none"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`cursor-pointer text-gray-500 transform transition-all duration-300 ${
                showPassword
                  ? "rotate-180 scale-110 text-blue-500"
                  : "rotate-0 scale-100"
              }`}
              
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 cursor-pointer ml-1"
          >
            {isSignup ? "Login" : "Signup"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
