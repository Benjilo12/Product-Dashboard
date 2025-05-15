// components/ProductTable.jsx
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ProductTable = ({
  products,
  loading,
  error,
  favorites,
  toggleFavorite,
  setSelectedProduct,
  setDeleteId,
  setOpenDeleteDialog,
  paginationModel,
  setPaginationModel,
  hasOriginalData,
}) => {
  const CustomNoRowsOverlay = () => (
    <div className="flex h-full items-center justify-center text-gray-500">
      {error ? (
        <div className="text-red-500 text-center">
          Error loading products: {error.message}
        </div>
      ) : hasOriginalData ? (
        "No products match your search/filters"
      ) : (
        "No products found in the database"
      )}
    </div>
  );

  const columns = [
    { field: "id", headerName: "ID", type: "number", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "price", headerName: "Price", type: "number", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "rating", headerName: "Rating", type: "number", flex: 1 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      getActions: (params) => [
        <GridActionsCellItem
          icon={
            favorites.includes(params.id) ? (
              <FaStar className="text-yellow-500 text-lg" />
            ) : (
              <FaRegStar className="text-lg" />
            )
          }
          onClick={() => toggleFavorite(params.id)}
          label="Toggle Favorite"
        />,
        <GridActionsCellItem
          icon={<FiEdit className="text-lg" />}
          onClick={() => setSelectedProduct(params.row)}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<FiTrash2 className="text-red-500 text-lg" />}
          onClick={() => {
            setDeleteId(params.id);
            setOpenDeleteDialog(true);
          }}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <div className="h-[600px] bg-white rounded-lg shadow">
      <DataGrid
        rows={products}
        columns={columns}
        loading={loading}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        onRowClick={(params) => setSelectedProduct(params.row)}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
      />
    </div>
  );
};

export default ProductTable;
