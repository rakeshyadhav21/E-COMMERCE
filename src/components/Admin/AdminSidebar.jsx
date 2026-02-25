import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBoxOpen,
  FaClipboardList,
  FaStore,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="p-6 flex flex-col min-h-screen">
      <div>
        <Link to="/admin" className="text-2xl font-semibold text-white">
          Prestige Avenue
        </Link>

        <h2 className="text-gray-300 mt-6 mb-6">Admin Dashboard</h2>

        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded flex items-center gap-2"
            }
          >
            <FaUser />
            Users
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded flex items-center gap-2"
            }
          >
            <FaBoxOpen />
            Products
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded flex items-center gap-2"
            }
          >
            <FaClipboardList />
            Orders
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded flex items-center gap-2"
          >
            <FaStore />
            Shop
          </NavLink>
        </nav>
      </div>

      {/* Logout at bottom */}
      <div className="mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded flex items-center justify-center gap-2"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;