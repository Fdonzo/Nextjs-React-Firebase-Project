/* eslint-disable react/jsx-key */
import {
  Box,
  Typography,
  Avatar,
  Toolbar,
  Divider,
  useMediaQuery,
} from "@mui/material";
//import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import WarehouseSharpIcon from "@mui/icons-material/WarehouseSharp";
import MemorySharpIcon from "@mui/icons-material/MemorySharp";
import DisplaySettingsSharpIcon from "@mui/icons-material/DisplaySettingsSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";
import DriveFolderUploadSharp from "@mui/icons-material/DriveFolderUploadSharp";
import { grey, lightBlue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//import { element } from "prop-types";
//import { useTheme } from "@emotion/react";

function DashboardNav() {
  const theme = useTheme();
  const [expand, setExpand] = useState(true);
  const [open, setOpen] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClickExpand = () => {
    setExpand(!expand);
  };
  const iconStyle = { color: lightBlue["A200"], ":hover": { color: "white" } };
  const navDashboardListElements = [
    "Repository",
    "Deciminate",
    "Display Setting",
    "Add Feature",
    "Upload New",
  ];

  const navDashboardIcon = [
    <WarehouseSharpIcon sx={{ ...iconStyle }} />,
    <MemorySharpIcon sx={{ ...iconStyle }} />,
    <DisplaySettingsSharpIcon sx={{ ...iconStyle }} />,
    <DriveFolderUploadSharp sx={{ ...iconStyle }} />,
    <AddCircleOutlineSharpIcon sx={{ ...iconStyle }} />,
    // eslint-disable-next-line react/jsx-key
    <DriveFolderUploadSharp sx={{ ...iconStyle }} />,
  ];
  return (
    <Box sx={{ overflowY: "scroll", width: open ? "20%" : "auto" }}>
      <Toolbar sx={{ gap: 2 }}>
        <Avatar
          onClick={handleClickOpen}
          aria-aria-label="dashboard bar"
          sx={{
            bgcolor: lightBlue["A200"],
            alignSelf: "center",
            ":hover": { bgColor: lightBlue["800"] },
          }}
        >
          <DashboardIcon
            sx={{ color: "whitesmoke", ":hover": { Bgcolor: grey["800"] } }}
            fontSize="large"
          />
        </Avatar>
        {open && (
          <Typography
            variant={!matches ? "h6" : "body1"}
            sx={{
              fontWeight: "bold",
              display: matches ? "none" : "flex",
              alignItems: "center",
            }}
          >
            Dashboard
          </Typography>
        )}
        {open ? (
          <ChevronLeftIcon
            onClick={handleClickOpen}
            sx={{ ml: 3, ":hover": { bgColor: grey["800"], opacity: "0.9" } }}
          />
        ) : (
          <ChevronRightIcon
            onClick={handleClickOpen}
            sx={{ ":hover": { bgColor: grey["800"], opacity: "0.9" } }}
          />
        )}
      </Toolbar>
      <Divider />
      <List
        sx={{
          pl: 2,
          width: { ...(open ? "auto" : "100%") },

          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="dasbboard-nav"
      >
        {navDashboardListElements.map((element, index) => {
          if (element === "Display Setting") {
            return (
              <>
                <ListItemButton
                  sx={{ ":hover": { bgcolor: grey["800"], color: "white" } }}
                  onClick={handleClickExpand}
                >
                  <ListItemIcon key={index}>
                    {navDashboardIcon[index]}
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      sx={{ ...(matches && { display: "none" }) }}
                      primary={element}
                    />
                  )}
                  {expand ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      {open && (
                        <ListItemText
                          sx={{ ...(matches && { display: "none" }) }}
                          primary="Color"
                        />
                      )}
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            );
          }

          return (
            <ListItemButton
              sx={{ ":hover": { bgcolor: grey["800"], color: "white" } }}
              key={index}
            >
              <ListItemIcon>{navDashboardIcon[index]}</ListItemIcon>
              {open && (
                <ListItemText
                  sx={{ ...(matches && { display: "none" }) }}
                  primary={element}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}

export default DashboardNav;

/*
      <ListItemButton>
        <ListItemIcon>
          <WarehouseSharpIcon/>
        </ListItemIcon>
        {(open||matches)&&<ListItemText primary="Repository" />}
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MemorySharpIcon sx={{color:lightBlue["A700"]}}/>
        </ListItemIcon>
        {open&&<ListItemText sx={{...(matches&&{display:"none"}), }} primary="Deciminate" />}
      </ListItemButton>
      <ListItemButton onClick={handleClickExpand}>
        <ListItemIcon>
          <DisplaySettingsSharpIcon/>
        </ListItemIcon>
        {open&&<ListItemText primary="Display Setting" />}
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            {open &&<ListItemText primary="Starred" />}
          </ListItemButton>
        </List>
      </Collapse>
      
      <ListItemButton>
      <ListItemIcon>
          <AddCircleOutlineSharpIcon/>
        </ListItemIcon>
       { open && <ListItemText primary="Add Feature" />}
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DriveFolderUploadSharp/>
        </ListItemIcon>
        {open&&<ListItemText primary="Upload New" />}
      </ListItemButton>
      <ListItemButton></ListItemButton>
    </List>
        </Box>
    )
}

export default DashboardNav;




subheader={
        <ListSubheader sx={{p:2, display:"flex", flexDirection:"row", gap:2}} component="div" id="nested-list-subheader">
          <Avatar sx={{bgcolor:lightBlue["A700"], alignSelf:"center", opacity:"0.7"}}>
          <MenuSharpIcon fontSize='large'/>
         </Avatar>
            <Typography variant="body1" sx={{fontWeight:"bold", display:"flex", alignItems:"center"}}>
            Dashboard 
            </Typography>
          
        </ListSubheader>
      
*/
