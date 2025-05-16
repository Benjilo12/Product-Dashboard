// components/ProductModal.jsx
import { Modal } from "@mui/material";
import { useProductContext } from "../Context/ProductContext";

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct } = useProductContext();
  return (
    <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">{selectedProduct?.name}</h2>
        <p>Price: ${selectedProduct?.price}</p>
        <p>Category: {selectedProduct?.category}</p>
        <p>Description: {selectedProduct?.description}</p>
        <p>Rating: {selectedProduct?.rating}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
