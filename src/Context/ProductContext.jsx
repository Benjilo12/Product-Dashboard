import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        search,
        setSearch,
        categoryFilter,
        setCategoryFilter,
        openDeleteDialog,
        setOpenDeleteDialog,
        deleteId,
        setDeleteId,
        paginationModel,
        setPaginationModel,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
