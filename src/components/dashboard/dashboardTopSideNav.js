/* eslint-disable react/jsx-key */
import { Avatar, Box } from "@mui/material";

import WarehouseSharpIcon from "@mui/icons-material/WarehouseSharp";
import MemorySharpIcon from "@mui/icons-material/MemorySharp";
import DisplaySettingsSharpIcon from "@mui/icons-material/DisplaySettingsSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
//import DashboardIcon from "@mui/icons-material/Dashboard";
//import { useState } from "react";
import DriveFolderUploadSharp from "@mui/icons-material/DriveFolderUploadSharp";
import { grey, lightBlue } from "@mui/material/colors";
//import { useTheme } from "@mui/material/styles";
//import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//import { element } from "prop-types";
//import { useTheme } from "@emotion/react";

function DashboardTopSideNav() {
  /*
  const theme = useTheme();
  const [expand, setExpand] = useState(true);
  const [open, setOpen] = useState(true);
  //const matches = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClickExpand = () => {
    setExpand(!expand);
  };
  */
  const iconStyle = { color: lightBlue["A200"], ":hover": { color: "white" } };
  const navDashboardListElements = [
    "Repository",
    "Deciminate",
    "Display Setting",
    "Add Feature",
    "Upload New",
  ];
  const navDashboardIcon = [
    <WarehouseSharpIcon fontSize="large" sx={{ ...iconStyle }} />,
    <MemorySharpIcon fontSize="large" sx={{ ...iconStyle }} />,
    <DisplaySettingsSharpIcon fontSize="large" sx={{ ...iconStyle }} />,
    <DriveFolderUploadSharp fontSize="large" sx={{ ...iconStyle }} />,
    <AddCircleOutlineSharpIcon fontSize="large" sx={{ ...iconStyle }} />,
    <DriveFolderUploadSharp fontSize="large" sx={{ ...iconStyle }} />,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        py: 2,
        justifyContent: "space-around",
      }}
    >
      {navDashboardListElements.map((element, index) => {
        return (
          <Avatar
            sx={{
              bgcolor: "white",
              ":hover": { bgcolor: grey["800"] },
            }}
            key={index}
          >
            {navDashboardIcon[index]}
          </Avatar>
        );
      })}
    </Box>
  );
}

export default DashboardTopSideNav;
