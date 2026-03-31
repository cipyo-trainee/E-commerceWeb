"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../assets/productData";
import StarRating from "../../Components/StarRating";
import { useStore } from "../../context/AppContext";
const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(product?.imgSrc);
  const { setCart } = useStore();

  if (!product) {
    return <p className="p-8 text-center text-gray-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    router.push("/CartItem"); // redirect to cart page
  };

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Images */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full flex justify-center items-center bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
            <Image
              src={selectedImage}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Gallery */}
          <div className="flex gap-2 sm:gap-4 mt-4 overflow-x-auto">
            {product.gallery?.filter(Boolean).map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 border rounded-lg p-1 cursor-pointer bg-gray-100 ${
                  selectedImage === img ? "border-gray-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          {/* Brand & Category */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <span className="text-gray-500">
              Category: <strong>{product.category.name}</strong>
            </span>
            <span
              className="px-2 py-1 rounded text-white text-sm font-semibold"
              style={{ backgroundColor: product.brand.color }}
            >
              {product.brand.name}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating />
            <span className="text-gray-500">{product.rating.toFixed(1)}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {product.price}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-6 py-2 border border-gray-300 hover:bg-gray-100 rounded-full transition"
            >
              Add to Cart
            </button>

            <button className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
