"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    // simulate API call
    setTimeout(() => {
      setMessage("🎉 You’re subscribed!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 rounded-2xl mt-10 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-3">
        Join Our Newsletter
      </h2>

      <p className="text-gray-600 mb-6">
        Get exclusive deals, new arrivals & special offers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
}