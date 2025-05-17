import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { useProductContext } from "../Context/ProductContext";

const SearchFilter = ({ categories }) => {
  const {
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    setOpenCreateModal,
  } = useProductContext();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      mb={{ xs: 1, md: 3 }}
      px={1}
      flexWrap="wrap"
    >
      {/* 1️⃣  Search – size="small" makes it 32 px tall instead of 40 px */}
      <TextField
        size="small"
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: { xs: 180, sm: 280, md: 550 } }}
      />

      {/* 2️⃣  Category select – same trick */}
      <Select
        size="small"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        sx={{ width: { xs: 170, sm: 220, md: 250 } }}
      >
        <MenuItem value="all">All Categories</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>

      <Box flexGrow={1} />

      <Button
        variant="contained"
        sx={{
          whiteSpace: "nowrap",
          mt: { xs: 1, md: 0 },
          mr: { xs: 0, md: 10 },
        }}
        onClick={() => setOpenCreateModal(true)}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default SearchFilter;
