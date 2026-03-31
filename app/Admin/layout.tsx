"use client";

import { ReactNode } from "react";
import SideBar from "./Component/SideBar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Body */}
      <div className="flex flex-1 ">
        <SideBar />
        {/* Main Content */}
        <main className="flex-1  bg-gray-50 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
