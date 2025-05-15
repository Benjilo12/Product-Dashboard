import { TextField, Select, MenuItem } from "@mui/material";

const SearchFilter = ({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  categories,
}) => {
  return (
    <div className="flex gap-4 mb-4">
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1"
      />
      <Select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="w-48"
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
