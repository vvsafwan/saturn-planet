import React from "react";
import { Navigate } from "react-router-dom";

const AdminLoginGuard = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token exists, redirect to dashboard
  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // If not logged in, allow access to login page
  return children;
};

export default AdminLoginGuard;
