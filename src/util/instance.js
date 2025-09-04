import axios from "axios";

// Create an Axios instance with base URL and config
export const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://saturnplanetfurniture.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (optional: e.g. attach token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 globally (e.g., redirect to login)
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized, redirect to login");
    }
    return Promise.reject(error);
  }
);

export default api;
