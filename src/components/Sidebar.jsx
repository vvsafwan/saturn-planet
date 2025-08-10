import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for all screen sizes */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-[#0b9ba6] p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0b9ba6] text-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-2xl font-bold border-b border-[#025876]">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 rounded hover:bg-[#025876] transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="block py-2 px-4 rounded hover:bg-[#025876] transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsOpen(false);
              window.location.href = "/admin/login";
            }}
            className="block w-full text-left py-2 px-4 rounded hover:bg-[#025876] transition"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
