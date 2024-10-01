import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CustomLoading() {
  return (
    <Box sx={{ display: "flex", my: 8, p: 2 }}>
      <CircularProgress />
    </Box>
  );
}
