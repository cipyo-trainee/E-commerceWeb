"use client";

import { ReactNode } from "react";
import SideBar from "./Component/SideBar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6">
          <h1 className="text-lg md:text-xl font-semibold">
            Admin Dashboard
          </h1>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Profile */}
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}