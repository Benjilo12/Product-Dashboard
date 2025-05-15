// hooks/useProductMutations.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query"; // ✅ Correct

import { toast } from "react-toastify";

const API_URL = "https://mock-data-josw.onrender.com";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product deleted successfully");
    },
    onError: () => toast.error("Error deleting product"),
  });
};
