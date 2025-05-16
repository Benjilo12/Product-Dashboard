import { TextField, Select, MenuItem } from "@mui/material";
import { useProductContext } from "../Context/ProductContext";

const SearchFilter = ({ categories }) => {
  const { search, setSearch, categoryFilter, setCategoryFilter } =
    useProductContext();
  return (
    <div className="flex gap-4 pl-2 mb-1 flex-wrap md:mb-8">
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="md:w-150 w-90 py-3"
      />
      <Select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        sx={{ width: 250 }}
      >
        <MenuItem value="all">All Categories</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchFilter;
