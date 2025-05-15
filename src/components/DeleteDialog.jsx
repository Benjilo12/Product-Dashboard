// components/DeleteDialog.jsx
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useDeleteProduct } from "../customhooks/useDeleteProductMutations";

const DeleteDialog = ({ open, setOpen, deleteId }) => {
  const deleteProduct = useDeleteProduct();

  const handleDelete = () => {
    deleteProduct.mutate(deleteId);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Delete this product?</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
