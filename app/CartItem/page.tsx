"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "../context/AppContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useStore();
  const router = useRouter();

  const parsePrice = (price: string) => parseFloat(price.replace("$", ""));

  const total = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );

  const formatPrice = (value: number) => `$${value.toFixed(2)}`;

  const handleToCheckout = () => {
    router.push("/Checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow flex items-center justify-between gap-4"
              >
                {/* IMAGE + INFO */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500 text-sm">{item.price}</p>
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-3"
                  >
                    Remove
                  </button>
                </div>

                {/* SUBTOTAL */}
                <div className="font-semibold">
                  {formatPrice(parsePrice(item.price) * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              onClick={handleToCheckout}
              className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
