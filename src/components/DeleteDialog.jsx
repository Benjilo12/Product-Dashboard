import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { useProductContext } from "../Context/ProductContext";
import { useDeleteProduct } from "../services/useProducts";

const DeleteDialog = () => {
  const { openDeleteDialog, setOpenDeleteDialog, deleteId, setDeleteId } =
    useProductContext();
  const deleteProduct = useDeleteProduct();

  // will stay the same value through the lifetime of this component
  const hasRun = useRef(false);

  useEffect(() => {
    if (!openDeleteDialog || !deleteId) return;
    if (hasRun.current) return; // <-- guard
    hasRun.current = true;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: () => deleteProduct.mutateAsync(deleteId),
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
      // cleanup
      setOpenDeleteDialog(false);
      setDeleteId(null);
      hasRun.current = false; // reset for next time
    });
  }, [
    openDeleteDialog,
    deleteId,
    deleteProduct,
    setOpenDeleteDialog,
    setDeleteId,
  ]);

  return null;
};

export default DeleteDialog;
