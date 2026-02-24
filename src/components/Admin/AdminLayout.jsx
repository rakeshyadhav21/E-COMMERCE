import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 text-white min-h-screen fixed md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-20`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;