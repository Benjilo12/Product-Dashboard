// hooks/useProducts.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

//product URL
const API_URL = "https://mock-data-josw.onrender.com";

//read product data
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/products`);
      return data;
    },
  });
};

//product categories
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/categories`);
      return data;
    },
  });
};

//create product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct) => axios.post(`${API_URL}/products`, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};

//Edit product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedProduct) =>
      axios.put(`${API_URL}/products/${updatedProduct.id}`, updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};
