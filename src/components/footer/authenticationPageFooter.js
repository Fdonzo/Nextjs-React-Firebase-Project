import { Box, Stack, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import CopyrightIcon from "@mui/icons-material/Copyright";
import { useRouter } from "next/router";

function AuthenticationFooter() {
  const year = new Date();
  const yearNow = year.getFullYear();
  const { pathname } = useRouter();

  let selectedPath = false;
  if (pathname === "/authentication/passwordrecreation") {
    selectedPath = true;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: lightBlue["A200"],
        height: "100px",
        width: { sm: "98%", md: "98%", lg: "98%" },
        position: selectedPath ? "fixed" : "sticky",
        mt: 1,
        mx: { sm: 1, md: 1.5 },
        mb: 1,
        borderRadius: 2,
        bottom: selectedPath ? 0 : null,
        left: selectedPath ? 0 : null,

        //p: 2,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography
          variant={"body1"}
          sx={{
            fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
            fontWeight: { xs: 300, sm: 300, lg: 350 },
            lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            color: "black",
          }}
        >
          Copyright{" "}
          <CopyrightIcon
            sx={{
              mt: 0.5,
              pt: 0.8,
              fontSize: { xs: 12, sm: 12, md: 14, lg: 20 },
              color: "black",
            }}
          />
          {yearNow} My company. All rights reserved.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            //fontWeight: "bold",
            color: "black",
            ml: 1,
            mt: 0.7,
            fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
            fontWeight: { xs: 300, sm: 300, lg: 350 },
            lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            ":hover": {
              borderBottom: "1.5px solid white",
            },
          }}
        >
          {" "}
          Privacy Policy
        </Typography>
        {/*
        <CopyrightIcon sx={{ color: "white" }} />{" "}
        <Typography sx={{ ml: 1, mb: 2, color: "white" }} variant={"body1"}>
          my company. All rights reserved.
        </Typography>{" "}
    */}
      </Stack>
    </Box>
  );
}

export default AuthenticationFooter;
