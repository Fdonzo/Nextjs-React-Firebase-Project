import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { lightBlue } from "@mui/material/colors";

export const DashboardAddIcon = () => {
  return (
    <Fab
      sx={{
        color: "white",
        bgcolor: "black",
        position: "fixed",
        bottom: (theme) => theme.spacing(20),
        right: (theme) => theme.spacing(10),
        "&:hover": { bgcolor: lightBlue["A700"] },
      }}
    >
      <AddIcon />
    </Fab>
  );
};
