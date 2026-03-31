"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "../context/AppContext";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const Productscart: React.FC = () => {
  const { products } = useStore();

  const [showMore, setShowMore] = useState(false);

  // ✅ Properly type likedProducts
  const [likedProducts, setLikedProducts] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleProducts = (showMore ? products : products.slice(0, 10)).filter(
    (item) => item?.imgSrc,
  );

  return (
    <div className="px-6 md:px-16 lg:px-32 mt-8">
      <h1 className="text-2xl font-medium mb-6">Popular Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {visibleProducts.map((item) => (
          <div key={item.id} className="flex flex-col group relative">
            {/* Clickable Image */}
            <Link href={`/Product/${item.id}`}>
              <div className="relative bg-gray-100 rounded-lg shadow p-4 flex justify-center items-center cursor-pointer">
                {/* Heart Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation when clicking heart
                    toggleLike(item.id);
                  }}
                  className="absolute top-3 right-3 text-gray-700 bg-white p-2 rounded-full shadow hover:scale-110 transition-transform"
                >
                  {likedProducts[item.id] ? (
                    <AiFillHeart className="text-red-500 w-5 h-5" />
                  ) : (
                    <CiHeart className="w-5 h-5" />
                  )}
                </button>

                {/* Product Image */}
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

      {/* Show More */}
      {products.length > 10 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-gray-200 px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Productscart;
