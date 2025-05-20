// components/CreateProductModal.jsx
import React from "react";
import { toast } from "react-toastify";
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
import { useProductContext } from "../Context/ProductContext";
import { useCategories, useCreateProduct } from "../services/getProducts";

const CreateProductModal = () => {
  const { openCreateModal, setOpenCreateModal } = useProductContext();
  const { data: categories = [] } = useCategories();
  const createProduct = useCreateProduct();

  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    rating: 0,
  });

  //function to handle create product submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct.mutate(formData, {
      onSuccess: () => {
        toast.success("Product created successfully!");
        handleClose();
      },
      onError: (error) => {
        toast.error(`Failed to create product: ${error.message}`);
      },
    });
  };

  //handle modal close
  const handleClose = () => {
    setOpenCreateModal(false);
    setFormData({
      name: "",
      description: "",
      price: 0,
      category: "",
      rating: 0,
    });
  };

  return (
    //create product form
    <Dialog
      open={openCreateModal}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Create New Product</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
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
            inputProps={{
              step: "0.01",
              min: "0",
            }}
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
            inputProps={{
              min: 0,
              max: 5,
              step: "0.1",
            }}
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
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Create Product
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateProductModal;
