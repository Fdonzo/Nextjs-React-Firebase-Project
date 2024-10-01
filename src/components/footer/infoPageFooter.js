import { Box, Stack, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import CopyrightIcon from "@mui/icons-material/Copyright";

function InfoPageFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: lightBlue["A200"],
        height: "100px",
        position: "sticky",
        mb: 1,
      }}
    >
      <Stack
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {" "}
        <Typography variant={"body1"} sx={{ color: "white" }}>
          All contents Copyright
        </Typography>
        <CopyrightIcon sx={{ color: "white" }} />{" "}
        <Typography sx={{ ml: 1, mb: 2, color: "white" }} variant={"body1"}>
          my company. All rights reserved.
        </Typography>{" "}
      </Stack>
    </Box>
  );
}

export default InfoPageFooter;
