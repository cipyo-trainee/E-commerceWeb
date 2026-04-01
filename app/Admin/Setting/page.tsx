"use client";

import React, { useState } from "react";

interface SettingsForm {
  storeName: string;
  email: string;
  phone: string;
  currency: string;
  logo: string;
  shippingFee: string;
  freeShippingThreshold: string;
  paymentCard: boolean;
  paymentCOD: boolean;
  taxPercent: number;
  taxType: "inclusive" | "exclusive";
  facebook: string;
  instagram: string;
  twitter: string;
  metaTitle: string;
  metaDescription: string;
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}

const initialSettings: SettingsForm = {
  storeName: "My E-Commerce Store",
  email: "admin@example.com",
  phone: "+91 1234567890",
  currency: "₹",
  logo: "",
  shippingFee: "Free",
  freeShippingThreshold: "500",
  paymentCard: true,
  paymentCOD: true,
  taxPercent: 18,
  taxType: "inclusive",
  facebook: "",
  instagram: "",
  twitter: "",
  metaTitle: "",
  metaDescription: "",
  darkMode: false,
  primaryColor: "#3B82F6",
  secondaryColor: "#F59E0B",
};

export default function EcomSettings() {
  const [form, setForm] = useState<SettingsForm>(initialSettings);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Settings saved:", form);
    alert("Settings updated successfully!");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 transition-colors">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          E-Commerce Settings
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Store Info */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Store Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                name="storeName"
                value={form.storeName}
                onChange={handleChange}
                placeholder="Store Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="input"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="input"
              >
                <option value="₹">₹ INR</option>
                <option value="$">$ USD</option>
                <option value="€">€ EUR</option>
              </select>

              <input
                type="color"
                name="primaryColor"
                value={form.primaryColor}
                onChange={handleChange}
                className="w-full h-12 border rounded-lg p-2"
              />

              <input
                type="color"
                name="secondaryColor"
                value={form.secondaryColor}
                onChange={handleChange}
                className="w-full h-12 border rounded-lg p-2"
              />
            </div>
          </section>

          {/* Shipping & Payment */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Shipping & Payment
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                name="shippingFee"
                value={form.shippingFee}
                onChange={handleChange}
                placeholder="Shipping Fee"
                className="input"
              />

              <input
                type="text"
                name="freeShippingThreshold"
                value={form.freeShippingThreshold}
                onChange={handleChange}
                placeholder="Free Shipping Threshold"
                className="input"
              />

              <div className="flex flex-col gap-2 p-4 border rounded-lg dark:bg-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="paymentCard"
                    checked={form.paymentCard}
                    onChange={handleChange}
                  />
                  Card Payment
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="paymentCOD"
                    checked={form.paymentCOD}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Social Media & SEO
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                name="facebook"
                value={form.facebook}
                onChange={handleChange}
                placeholder="Facebook URL"
                className="input"
              />
              <input
                type="text"
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
                className="input"
              />
              <input
                type="text"
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
                placeholder="Twitter URL"
                className="input"
              />
            </div>

            <input
              type="text"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
              placeholder="Meta Title"
              className="input"
            />

            <textarea
              name="metaDescription"
              value={form.metaDescription}
              onChange={(e) =>
                setForm({ ...form, metaDescription: e.target.value })
              }
              placeholder="Meta Description"
              className="input min-h-[100px]"
            />
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}