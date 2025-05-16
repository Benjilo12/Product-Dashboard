import { DataGrid } from "@mui/x-data-grid";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, IconButton } from "@mui/material";
import { useProductContext } from "../Context/ProductContext";

const ProductTable = ({
  products,
  loading,
  error,
  favorites,
  toggleFavorite,
  setOpenDeleteDialog,
  hasOriginalData,
}) => {
  const {
    paginationModel,
    setPaginationModel,
    setDeleteId,
    setSelectedProduct,
  } = useProductContext();
  const CustomNoRowsOverlay = () => (
    <Box
      height="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="gray"
    >
      {error ? (
        <Box color="red">Error loading products: {error.message}</Box>
      ) : hasOriginalData ? (
        "No products match your search/filters"
      ) : (
        "No products found in the database"
      )}
    </Box>
  );

  const columns = [
    {
      field: "favorite",
      headerName: "Favourite",
      width: 90,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const isFav = favorites.includes(params.row.id);
        return (
          <IconButton onClick={() => toggleFavorite(params.row.id)}>
            {isFav ? (
              <FaStar className="text-yellow-500 text-lg" />
            ) : (
              <FaRegStar className="text-lg" />
            )}
          </IconButton>
        );
      },
    },
    {
      field: "id",
      headerName: "ID",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "$ Price",
      type: "number",
      flex: 1,
      minWidth: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 200,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box display="flex" gap={1} justifyContent="center" width="100%">
          <IconButton
            onClick={() => setSelectedProduct(params.row)}
            title="View Details"
          >
            <VisibilityOutlinedIcon className="" />
          </IconButton>
          <IconButton title="Edit">
            <FiEdit />
          </IconButton>
          <IconButton
            onClick={() => {
              setDeleteId(params.id);
              setOpenDeleteDialog(true);
            }}
            title="Delete"
          >
            <FiTrash2 className="text-red-500" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: 1500,
        height: "80%",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 2,
        p: 1,

        // Add media query for responsiveness
        "@media (max-width: 768px)": {
          width: "90%", // Full width on tablets and mobile
          height: "80%",
          overflowX: "auto", // Enable horizontal scroll
        },

        "@media (max-width: 480px)": {
          width: "90%", // Full width on tablets and mobile
        },
      }}
    >
      <DataGrid
        rows={products}
        columns={columns}
        loading={loading}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#0784d1 !important",
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
          },
          "& .MuiDataGrid-cell": {
            py: 1.5,
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "1rem", // You can change this (e.g., "1.2rem", "18px", etc.)
            fontFamily: "Poppins, sans-serif", // Replace with any font you want
            fontWeight: 600, // e.g., 400, 500, 600, 700
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#0784d1",
            color: "white",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiTablePagination-selectIcon": {
            color: "white",
          },
        }}
      />
    </Box>
  );
};

export default ProductTable;
