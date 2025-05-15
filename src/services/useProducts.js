// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://mock-data-josw.onrender.com";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/products`);
      return data;
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/categories`);
      return data;
    },
  });
};
