"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="max-w-xl mx-auto opacity-90">
          Have questions or need help? Our team is here to assist you anytime.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT - CONTACT INFO */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">
                123 E-Commerce Street, Mumbai, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-green-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-red-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">support@yourstore.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-purple-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-gray-600">
                Mon - Sat: 9:00 AM - 8:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT - CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP (OPTIONAL) */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-75 border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
