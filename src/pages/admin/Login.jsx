import React, { useState } from "react";
import AdminBtn from "../../components/buttons/AdminBtn";
import { loginAdmin } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);

    setLoadingBtn(true);
    try {
        const response = await loginAdmin(formData.username, formData.password);
        localStorage.setItem("token", response.token);
        toast.success("Login successful!");
        setTimeout(() => {
            navigate('/admin/dashboard');
        }, 1000);
        console.log(response);
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed!");
    } finally {
      setLoadingBtn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#025876]"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#025876]"
              placeholder="Enter password"
              required
            />
          </div>
          <AdminBtn text="Login" loading={loadingBtn} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
