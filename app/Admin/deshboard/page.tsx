"use client";

import React from "react";
import {
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiBox,
} from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

// ---------------- Chart.js Registration ----------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // ✅ Required for Pie/Doughnut
);

// ---------------- Type Definitions ----------------
interface Stat {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// ---------------- Dashboard Component ----------------
const Dashboard: React.FC = () => {
  // ---------------- Stats Cards ----------------
  const stats: Stat[] = [
    { title: "Total Orders", value: 1245, icon: <FiShoppingCart size={24} />, color: "bg-blue-500" },
    { title: "Revenue", value: "₹1,24,500", icon: <FiBarChart2 size={24} />, color: "bg-green-500" },
    { title: "Users", value: 532, icon: <FiUsers size={24} />, color: "bg-yellow-500" },
    { title: "Products", value: 128, icon: <FiBox size={24} />, color: "bg-purple-500" },
  ];

  // ---------------- Latest Products ----------------
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 75000, stock: 20 },
    { id: 2, name: "Smartphone", price: 35000, stock: 50 },
    { id: 3, name: "Headphones", price: 2000, stock: 150 },
    { id: 4, name: "Smartwatch", price: 7000, stock: 30 },
  ];

  // ---------------- Sales Line Chart ----------------
  const salesData: ChartData<"line"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sales (₹)",
        data: [12000, 15000, 10000, 20000, 18000, 22000, 24000, 20000, 23000, 25000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const salesOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales Overview", font: { size: 18 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawTicks: false,
          border: { color: "transparent" },
          color: "rgba(200,200,200,0.2)",
        },
      },
      x: {
        grid: {
          drawTicks: false,
          border: { color: "transparent" },
          color: "rgba(200,200,200,0.2)",
        },
      },
    },
  };

  // ---------------- Category Pie Chart ----------------
  const categoryData: ChartData<"pie", number[], string> = {
    labels: ["Electronics", "Fashion", "Home", "Beauty", "Other"],
    datasets: [
      {
        data: [40, 25, 15, 10, 10],
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981", "#8B5CF6", "#EF4444"],
        borderWidth: 0,
      },
    ],
  };

  // ---------------- JSX ----------------
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-4 transition transform hover:scale-105"
            >
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Sales Line Chart */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <Line data={salesData} options={salesOptions} />
          </div>

          {/* Category Pie Chart */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
            <Pie data={categoryData} />
          </div>
        </div>

        {/* Latest Products Table */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h3 className="text-lg font-semibold mb-4">Latest Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="py-3 px-2">ID</th>
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">Price</th>
                  <th className="py-3 px-2">Stock</th>
                  <th className="py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-2">{p.id}</td>
                    <td className="py-2 px-2">{p.name}</td>
                    <td className="py-2 px-2">₹{p.price}</td>
                    <td className="py-2 px-2">{p.stock}</td>
                    <td className="py-2 px-2 flex gap-2">
                      <button className="text-blue-500 hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;