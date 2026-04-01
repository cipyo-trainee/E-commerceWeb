"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useStore } from "../context/AppContext";

const Navbar = () => {
  const { cart } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact", path: "/Contact" },
  ];

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-3">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={110}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="hover:text-black transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/Admin/deshboard"
              className="border px-3 py-1 rounded-lg hover:bg-gray-100 transition"
            >
              Seller Dashboard
            </Link>
          </li>

          {/* Cart */}
          <li className="relative">
            <Link href="/CartItem">
              <FaShoppingCart size={22} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          <li>
            <Link href="/login" className="hover:text-black">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <Image src={logo} alt="Logo" width={100} height={30} />
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-4 gap-4 text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="mt-auto p-4 border-t flex flex-col gap-4">

          <Link
            href="/Admin/deshboard"
            onClick={() => setMenuOpen(false)}
            className="border rounded-lg py-2 text-center hover:bg-gray-100"
          >
            Seller Dashboard
          </Link>

          <Link
            href="/CartItem"
            onClick={() => setMenuOpen(false)}
            className="relative text-center"
          >
            Cart ({cart.length})
          </Link>

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;