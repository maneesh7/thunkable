import axios from "axios";

const services = {
  getAllProducts: async () => {
    const res = await axios.get("http://localhost:5000/api/v1/products");
    return res;
  },

  addProduct: async () => {
    const url = `http://localhost:5000/api/v1/products/newproduct`;
    const res = await axios.post(url);
    return res;
  },

  getProduct: async (id) => {
    const url = `http://localhost:5000/api/v1/products/${id}`;
    const res = await axios.get(url);
    return res;
  },

  renameProductName: async (value, index) => {
    const url = `http://localhost:5000/api/v1/products/renameProductName/${value}/${index}`;
    const response = await axios.post(url);
    return response;
  },

  deleteProduct: async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/products/deleteProduct/${id}`
    );
    return response;
  }
};

export default services;
