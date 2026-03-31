"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useStore } from "../context/AppContext";
const Navbar = () => {
  const { cart } = useStore();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact", path: "/Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/Admin/deshboard"
              className="border rounded-xl px-2 border-gray-200"
            >
              <button className="text-sm">Seller Dashboard</button>
            </Link>
          </li>
          <li className="relative">
            <Link href="/CartItem">
              <FaShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 rounded-full">
                <p>{cart.length}</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(true)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Image src={logo} alt="Logo" width={100} height={30} />
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="block text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
              <hr className="border-gray-200 my-2" />
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-300 flex flex-col gap-4">
          <Link
            href="/"
            className="border rounded-xl px-2 border-gray-200 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Seller Dashboard
          </Link>

          <Link
            href="/CartItem"
            className="relative text-center"
            onClick={() => setMenuOpen(false)}
          >
            CartItem
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 rounded-full"></span>
          </Link>

          <Link
            href="/login"
            className="text-center"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
