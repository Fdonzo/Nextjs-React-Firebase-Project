import { Box } from "@mui/material";

function navigationItem({ name }) {
  return (
    <Box aria-label={`${name - "button"}`} component={"button"}>
      {name}
    </Box>
  );
}

export default navigationItem;
