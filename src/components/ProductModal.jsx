// components/ProductModal.jsx
import { Modal } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useProductContext } from "../Context/ProductContext";

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct, openEditModal } =
    useProductContext();

  const open = !!selectedProduct && !openEditModal;

  return (
    <Modal open={open} onClose={() => setSelectedProduct(null)}>
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-96">
        {/* MUI Close Button */}
        <IconButton
          aria-label="close"
          onClick={() => setSelectedProduct(null)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon className="text-[15px]" />
        </IconButton>

        <h2 className="text-xl font-bold mb-4 text-blue-500">
          {selectedProduct?.name}
        </h2>

        <p className="mb-2">
          <span className="font-bold">Price:</span> ${selectedProduct?.price}
        </p>

        <p className="mb-2">
          <span className="font-bold">Category:</span>{" "}
          {selectedProduct?.category}
        </p>

        <p className="mb-2">
          <span className="font-bold">Description:</span>{" "}
          {selectedProduct?.description}
        </p>

        <p>
          <span className="font-bold">Rating:</span> {selectedProduct?.rating}
        </p>
      </div>
    </Modal>
  );
};

export default ProductModal;
