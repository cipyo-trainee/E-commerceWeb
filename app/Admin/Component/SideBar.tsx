"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/Admin/deshboard" },
    { name: "Upload Item", path: "/Admin/Uploaditem" },
    { name: "List Item", path: "/Admin/Listitem" },
    { name: "Order Item", path: "/Admin/Order" },
    { name: "Settings", path: "/Admin/Settings" },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      </div>

      {/* Menu */}
      <ul className="flex-1 px-5 space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded-xl border border-gray-700 transition ${
                pathname.startsWith(item.path)
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 text-gray-100"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="p-5 border-t border-gray-700 text-gray-400 text-sm">
        <p>© 2026 My E-Commerce Admin</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}