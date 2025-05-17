import { createContext, useContext, useState } from "react";

const ProductContext = createContext({
  selectedProduct: null,
  setSelectedProduct: () => {},
  search: "",
  setSearch: () => {},
  categoryFilter: "all",
  setCategoryFilter: () => {},
  openDeleteDialog: false,
  setOpenDeleteDialog: () => {},
  deleteId: null,
  setDeleteId: () => {},
  paginationModel: { page: 0, pageSize: 10 },
  setPaginationModel: () => {},
  openEditModal: false,
  setOpenEditModal: () => {},
});

export function ProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);

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
        openEditModal,
        setOpenEditModal,
        openCreateModal,
        setOpenCreateModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
