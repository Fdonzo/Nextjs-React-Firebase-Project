import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function AlreadyAuthenticated() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
      <Typography>Already authenticated...</Typography>
    </Box>
  );
}
