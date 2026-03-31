"use client";

import Image from "next/image";
import { useStore } from "../context/AppContext";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

const Productscart = () => {
  const { products } = useStore();

  return (
    <div className="px-6 md:px-16 lg:px-32 mt-8">
      <h1 className="text-2xl font-medium mb-6">All Popular Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col group">
            {/* Clickable Image */}
            <Link href={`/Product/${item.id}`}>
              <div className="relative bg-gray-100 rounded-lg shadow p-4 flex justify-center items-center cursor-pointer">
                <CiHeart
                  size={24}
                  className="absolute top-3 right-3 text-gray-700 bg-white p-2 rounded-xl hover:text-red-500 transition"
                />
                {/* ✅ FIXED IMAGE */}
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src={item.imgSrc || "/fallback.png"}
                    alt={item.name || "product"}
                    fill
                    className="object-contain hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </Link>
            {/* Info */}
            <div className="mt-3 flex flex-col">
              <h2 className="text-sm font-semibold line-clamp-1">
                {item.name}
              </h2>

              <p className="text-gray-400 text-sm line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-semibold text-gray-700">
                  {item.price}
                </p>
                <button className="px-4 py-1 text-gray-600 font-semibold rounded-2xl text-sm border border-gray-200 hover:bg-gray-100 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productscart;
