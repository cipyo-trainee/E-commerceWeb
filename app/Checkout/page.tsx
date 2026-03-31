"use client";

import { useState } from "react";
import { useStore } from "../context/AppContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, setCart, total } = useStore();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
    city: "",
    zip: "",
    payment: "card",
  });

  const parsePrice = (price: string) => parseFloat(price.replace("$", ""));

  const formatPrice = (value: number) => `$${value.toFixed(2)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled
    const isFormValid = Object.values(form).every((value) => value !== "");
    if (!isFormValid) {
      alert("Please fill all the fields before placing the order!");
      return;
    }

    // You can also call API here to save the order
    console.log("Order placed:", form, cart);
    
    // Navigate to OrderSuccess page
    router.push("/OrderSuccess");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT: FORM */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-1/2 border p-3 rounded-lg"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleChange}
                className="w-1/2 border p-3 rounded-lg"
                required
              />
            </div>

            <h3 className="text-lg font-semibold mt-6">Payment Method</h3>

            <div className="border rounded-lg p-4 space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  {formatPrice(parsePrice(item.price) * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
