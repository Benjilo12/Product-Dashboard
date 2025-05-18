import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function Loader() {
  return (
    <div>
      <Box>
        <Skeleton
          animation="wave"
          variant="rectangular"
          m="30px 0 0 0"
          height="65vh"
        />
      </Box>
    </div>
  );
}

export default Loader;
