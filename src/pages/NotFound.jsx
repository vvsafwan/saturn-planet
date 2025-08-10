import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffffff] text-white px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-yellow-400" />
        </div>
        <h1 className="text-6xl text-black font-bold mb-2">404</h1>
        <p className="text-6xl mb-4 text-[#0b9ba6] forum-font">Page Not Found</p>
        <p className="text-gray-400 mb-6 raleway-font">
          The page you are looking for might have been removed or doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#025876] text-white font-semibold rounded hover:bg-[#0b9ba6] transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
