// pages/Dashboard.js

import { useState } from "react";
import Topbar from "../components/Topbar";
import { useCategories, useProducts } from "../services/useProducts";
import SearchFilter from "../components/SearchFilter";
import useFavorites from "../customhooks/useFavourites";
import DeleteDialog from "../components/DeleteDialog";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductsTable";

function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  // Data hooks
  const { data: products = [], isLoading, error } = useProducts();
  const { data: categories = [] } = useCategories();

  // Favorites hook
  const { favorites, toggleFavorite } = useFavorites();

  // Filtered products
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product?.name?.toLowerCase().includes(search.toLowerCase()) &&
          (categoryFilter === "all" || product?.category === categoryFilter)
      )
    : [];

  return (
    <div className="bg-gray-100 min-h-screen flex-1">
      <Topbar />
      <div className="p-8 max-w-7xl mx-auto">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
        />

        <ProductTable
          products={filteredProducts}
          loading={isLoading}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setSelectedProduct={setSelectedProduct}
          setDeleteId={setDeleteId}
          setOpenDeleteDialog={setOpenDeleteDialog}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          error={error}
          hasOriginalData={products.length > 0}
        />

        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />

        <DeleteDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          deleteId={deleteId}
        />
      </div>
    </div>
  );
}

export default Dashboard;
