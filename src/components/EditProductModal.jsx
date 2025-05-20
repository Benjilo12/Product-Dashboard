import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useCategories, useUpdateProduct } from "../services/getProducts";
import { useProductContext } from "../Context/ProductContext";

const EditProductModal = () => {
  const { openEditModal, setOpenEditModal, selectedProduct } =
    useProductContext();

  const { data: categories = [] } = useCategories();
  const { mutate: updateProduct, isPending: isUpdating } = useUpdateProduct();

  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    rating: 0,
  });

  // preload data when a product was clicked
  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name ?? "",
        description: selectedProduct.description ?? "",
        price: selectedProduct.price ?? 0,
        category: selectedProduct.category ?? "",
        rating: selectedProduct.rating ?? 0,
      });
    }
  }, [selectedProduct]);

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(
      { ...formData, id: selectedProduct.id },
      {
        onSuccess: () => {
          setOpenEditModal(false); // close only when backend confirms
        },
      }
    );
  };

  const handleClose = () => {
    if (isUpdating) return; // prevent closing while saving
    setOpenEditModal(false);
  };

  return (
    <Dialog open={openEditModal} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Product</DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />

          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: parseFloat(e.target.value) })
            }
            required
          />

          <TextField
            margin="dense"
            label="Rating"
            type="number"
            inputProps={{ min: 0, max: 5, step: "0.1" }}
            fullWidth
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: parseFloat(e.target.value) })
            }
            required
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              label="Category"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} disabled={isUpdating}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isUpdating}
          >
            {isUpdating ? "Saving…" : "Save Changes"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditProductModal;
