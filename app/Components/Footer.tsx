"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.svg"; // your logo
import paypal from "../../public/paypal.png";
import paymentvisa from "../../public/paymentvisa.png";
import mastercard from "../../public/mastercard.png";
import amex from "../../public/amex.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-gray-300 px-6 md:px-16 lg:px-32 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </Link>
          <p className="mt-4 text-sm">
            We provide the best quality products at the best prices. Shop with
            confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Customer Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest news and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none flex-1"
            />
            <button className="px-4 py-2 bg-orange-600 text-white rounded-r hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>
          © {new Date().getFullYear()} Your E-Commerce Store. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Image src={paymentvisa} alt="Visa" width={40} height={25} />
          <Image src={mastercard} alt="Mastercard" width={40} height={25} />
          <Image src={paypal} alt="PayPal" width={40} height={25} />
          <Image src={amex} alt="Amex" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
