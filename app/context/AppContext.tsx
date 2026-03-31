"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { products as productData } from "./../assets/productData";

export interface Brand {
  id: number;
  name: string;
  color: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  brand: Brand;
  rating: number;
  price: string;
  imgSrc: string;
  gallery: string[];
}

export type CartItem = Product & { quantity: number };

export type StoreContextValue = {
  products: Product[];
  cart: CartItem[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  total: number;
};

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined,
);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productData);
  const [cart, setCart] = useState<CartItem[]>([]);

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const parsePrice = (price: string) => parseFloat(price.replace("$", ""));

  // calculate total
  const total = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        setProducts,
        setCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        total,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextValue => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};
