import api from "../util/instance";

// Login example
export const loginAdmin = async (username, password) => {
  const response = await api.post("/admin/login", { username, password });
  return response.data;
};

export const postProducts = async (data) => {
  const response = await api.post("/admin/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getProducts = async (page = 1, limit = 10) => {
  const response = await api.get(`/admin/productsList?page=${page}&limit=${limit}`);
  return response.data;
};

export const deleteProductById = async (id) => {
  const response = await api.delete(`/admin/delete/product/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category, page = 1, limit = 12) => {
  const response = await api.get(`/productsByCategory?category=${category}&page=${page}&limit=${limit}`);
  return response.data;
};

export const sendMail = async (data) => {
  const response = await api.post("/send", data);
  return response.data;
}

export const getProductDetails = async (id) => {
  const response = await api.get(`/product?id=${id}`);
  return response.data;
}