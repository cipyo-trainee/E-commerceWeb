"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiHome,
  FiUpload,
  FiList,
  FiShoppingCart,
  FiSettings,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function SideBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/Admin/deshboard", icon: <FiHome /> },
    { name: "Upload Item", path: "/Admin/Uploaditem", icon: <FiUpload /> },
    { name: "List Item", path: "/Admin/Listitem", icon: <FiList /> },
    { name: "Order Item", path: "/Admin/Order", icon: <FiShoppingCart /> },
    { name: "Settings", path: "/Admin/Setting", icon: <FiSettings /> },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-start justify-between p-4 bg-gray-900 text-white">
        <button onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}

      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col z-50 transform transition duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button onClick={() => setOpen(false)} className="md:hidden">
            <FiX size={22} />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex-1 px-4 space-y-2">
          {menu.map((item) => {
            const active = pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                      : "hover:bg-gray-800 text-gray-300"
                  }`}
                  onClick={() => setOpen(false)} // close on mobile click
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="p-5 border-t border-gray-700 text-gray-400 text-xs text-center">
          <p>© 2026 E-Commerce Admin</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
