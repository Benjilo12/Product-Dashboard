import { useProducts } from "../services/getProducts";
import TopBar from "../components/TopBar";

import SearchFilter from "../components/SearchFilter";
import ProductTable from "../components/ProductsTable";
import ProductModal from "../components/ProductModal";
import DeleteDialog from "../components/DeleteDialog";
import { useProductContext } from "../Context/ProductContext";
import EditProductModal from "../components/EditProductModal";
import CreateProductModal from "../components/CreateProductModal";

function Dashboard() {
  const { search, categoryFilter } = useProductContext();

  const { data: products = [], isLoading, error } = useProducts();

  //filter product
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product?.name?.toLowerCase().includes(search.toLowerCase()) &&
          (categoryFilter === "all" || product?.category === categoryFilter)
      )
    : [];

  return (
    <div className="bg-gray-100 flex-1 overflow-hidden">
      <TopBar />
      <div className="py-3 ml-4 max-w-9xl mx-auto">
        {/* filter component */}
        <SearchFilter />

        {/* product table component */}
        <ProductTable
          products={filteredProducts}
          loading={isLoading}
          error={error}
          hasOriginalData={products.length > 0}
        />
        {/* product detail modal */}
        <ProductModal />
        {/* edit product modal */}
        <EditProductModal />
        {/* create product modal */}
        <CreateProductModal />
        {/* delete product dialog */}
        <DeleteDialog />
      </div>
    </div>
  );
}

export default Dashboard;
