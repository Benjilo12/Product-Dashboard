import { useCategories, useProducts } from "../services/useProducts";

import useFavorites from "../customhooks/useFavourites";

import Topbar from "../components/Topbar";
import SearchFilter from "../components/SearchFilter";
import ProductTable from "../components/ProductsTable";
import ProductModal from "../components/ProductModal";
import DeleteDialog from "../components/DeleteDialog";
import { useProductContext } from "../Context/ProductContext";
import EditProductModal from "../components/EditProductModal";
import CreateProductModal from "../components/CreateProductModal";

function Dashboard() {
  const {
    search,
    categoryFilter,
    openDeleteDialog,
    setOpenDeleteDialog,
    deleteId,
  } = useProductContext();

  const { data: products = [], isLoading, error } = useProducts();
  const { data: categories = [] } = useCategories();
  const { favorites, toggleFavorite } = useFavorites();

  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product?.name?.toLowerCase().includes(search.toLowerCase()) &&
          (categoryFilter === "all" || product?.category === categoryFilter)
      )
    : [];

  return (
    <div className="bg-gray-100 flex-1 overflow-hidden">
      <Topbar />
      <div className="py-3 ml-4 max-w-9xl mx-auto">
        <SearchFilter categories={categories} />

        <ProductTable
          products={filteredProducts}
          loading={isLoading}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setOpenDeleteDialog={setOpenDeleteDialog}
          error={error}
          hasOriginalData={products.length > 0}
        />

        <ProductModal />
        <EditProductModal />
        <CreateProductModal />

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
