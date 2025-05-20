import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://mock-data-josw.onrender.com";

//  Read --------------------------------------------------------------------
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/products`);
      return data;
    },
    staleTime: 60_000,
  });
};

//  Categories --------------------------------------------------------------
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/categories`);
      return data;
    },
    staleTime: Infinity,
  });
};

//  Create ------------------------------------------------------------------
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct) => axios.post(`${API_URL}/products`, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product created");
    },
    onError: () => toast.error("Could not create product"),
  });
};

//  Update ----------------------------------------------
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (prod) =>
      axios.put(`${API_URL}/products/${prod.id}`, prod).then((r) => r.data),

    onMutate: async (updatedProduct) => {
      await queryClient.cancelQueries(["products"]);

      // snapshot
      const previousProducts = queryClient.getQueryData(["products"]);

      // optimistic cache overwrite
      queryClient.setQueryData(["products"], (old = []) =>
        old.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );

      return { previousProducts };
    },

    // ---- rollback on error -------------------------------------------------
    onError: (_err, _prod, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(["products"], context.previousProducts);
      }
      toast.error("Failed to update product");
    },

    // ---- re‑sync with server ----------------------------------------------
    onSettled: () => {
      queryClient.invalidateQueries(["products"]);
    },

    onSuccess: () => {
      toast.success("Product updated");
    },
  });
};

//  Delete ------------------------------------------------------------------
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product deleted");
    },
    onError: () => toast.error("Error deleting product"),
  });
};
