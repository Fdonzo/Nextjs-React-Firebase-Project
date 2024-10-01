/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
//import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  useMediaQuery,
  Card,
  CardMedia,
  //InputAdornment,
  Toolbar,
  //TextField,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";

//import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import { useSelector } from "react-redux";
//import { setHasAlreadySignup } from "../stores/signup";
import SignedInNavButtonGroup from "../components/navigation/signedInNaviButtonGroup";
import DefaultNavButtonGroup from "../components/navigation/defaultNavButtonGroup";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MenuNav from "../components/navigation/menuNav";
import { useRouter } from "next/router";
import NavSearchInputBase from "../components/navigation/navSearchInputBase";
import NavPopoverMenu from "../components/navigation/navPopoverMenu";

/*
const StyledBox = styled(Box)({
  //borderRadius: 4,
  width: "30%",
  height: "30px",
  border: "1px solid grey",
  borderRadius: "12px",
  backgroundColor: "white",
  ml: 2,
});

/*
const StyledButton = styled(Button)({
  boxShadow: "none",
  borderRadius: "4px",
  color: grey[800],
  backgroundColor: "inherit",
  border: "1px solid ",
  borderColor: grey[800],
  "&:hover": {
    backgroundColor: grey[50],
    borderColor: grey[800],
  },
});
*/
function Navigation() {
  const { data: session, status } = useSession();
  const { loading } = status;
  //console.log(session, loading);
  //const hasAlreadySignup = useSelector(({ signup }) => signup.hasAlreadySignup);

  const isInformationPage = useSelector(
    ({ infoPageState }) => infoPageState.isInformationPage
  );
  const theme = useTheme();
  const matchDown = useMediaQuery(theme.breakpoints.down("md"));
  const matchUp = useMediaQuery(theme.breakpoints.up("md"));
  /*
  const [toggleMenuBar, setToggleMenuBar] = useState(false);
  
  const handleToggleMenubar = () => {
    setToggleMenuBar(!toggleMenuBar);
  };
   */

  const [anchorElNavMenu, setAnchorElNavMenu] = useState(null);
  const openNavMenu = Boolean(anchorElNavMenu);

  const handleClickNaMenu = (event) => {
    setAnchorElNavMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNavMenu(null);
  };
  const [anchorElNavPopOver, setAnchorElNavPopOver] = useState(null);
  const openNavPopOver = Boolean(anchorElNavPopOver);

  const handleClickNavPopOver = (event) => {
    setAnchorElNavPopOver(event.currentTarget);
  };
  const handleCloseNavPopOver = () => {
    setAnchorElNavPopOver(null);
  };

  const { asPath, pathname } = useRouter();
  let selectPaths;
  if (
    (asPath === "/dashboard" && matchUp) ||
    (asPath === "/decimation" && matchUp) ||
    (asPath === "/authentication/passwordrecreation" && matchUp)
  ) {
    selectPaths = true;
  } else {
    selectPaths = false;
  }

  const [userID, setUserID] = useState({});

  useEffect(() => {
    setUserID({ ...session });
  }, [userID]);

  let userProfileInitial = "?";

  const isSessionEmpty = Object.keys(userID).length !== 0;

  if (isSessionEmpty) {
    const { user } = userID;

    const { name } = user;

    const nameArray = name.split(" ");

    userProfileInitial = `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
  }
  return (
    <>
      {isInformationPage ? null : (
        <Box
          border={1}
          elevation={0}
          sx={{ mb: selectPaths ? "7%" : matchUp ? "10%" : "12%" }}
        >
          <AppBar border={1} position="fixed" elevation={0}>
            {matchDown ? (
              <Toolbar
                sx={{
                  bgcolor: lightBlue["A200"],
                  //borderBottomColor: "black",
                  borderBottom: 0.5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  //opacity: "0.7",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    aria-label="menu bar"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "black",
                      alignSelf: "center",

                      ":hover": { bgcolor: "white" },
                    }}
                  >
                    <MenuSharpIcon
                      onClick={handleClickNaMenu}
                      fontSize="large"
                      sx={{
                        color: "white",
                        ":hover": { color: "black" },
                      }}
                    />
                  </Avatar>
                  {openNavMenu && (
                    <KeyboardArrowUpOutlinedIcon fontSize="large" />
                  )}
                  <MenuNav
                    open={openNavMenu}
                    anchorEl={anchorElNavMenu}
                    handleClose={handleCloseNavMenu}
                  />
                </Box>
                {asPath === "/profile" ? (
                  <Avatar
                    alt="Profile Avatar"
                    src="/static/images/avatar/1.jpg"
                    onClick={handleClickNavPopOver}
                    sx={{
                      width: { sm: 45, md: 50, lg: 56 },
                      height: { sm: 45, md: 50, lg: 56 },
                      mb: 0.5,
                      ml: 1,
                      color: "black",
                      bgcolor: "whitesmoke",
                    }}
                  >
                    {userProfileInitial}
                  </Avatar>
                ) : (
                  <Link href={"/"}>
                    <Card sx={{ my: 1 }}>
                      <CardMedia
                        aria-label="app logo"
                        component="img"
                        alt="app logo"
                        sx={{ height: { xs: 40, sm: 45, md: 50 } }}
                        image="/vricon.jpg"
                      />
                    </Card>
                  </Link>
                )}
                {asPath === "/profile" && (
                  <NavPopoverMenu
                    open={openNavPopOver}
                    handleClose={handleCloseNavPopOver}
                    anchorEl={anchorElNavPopOver}
                  />
                )}
              </Toolbar>
            ) : (
              <Toolbar
                border={1}
                sx={{
                  bgcolor: lightBlue["A200"],
                  borderBottom: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "12%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link href={"/"}>
                    <Card sx={{ my: 1 }}>
                      <CardMedia
                        aria-label="app logo"
                        component="img"
                        alt="app logo"
                        sx={{ height: { sm: 45, md: 55, lg: 60 } }}
                        image="/vricon.jpg"
                      />
                    </Card>
                  </Link>
                </Box>

                {!session && <NavSearchInputBase />}
                {/*<ButtonGroup size="large" sx={{width:"20%", display: "flex", justifyContent:"space-around", p:1.5}}>
             <Link href={"/authentication"}>
            <StyledButton >Sign-In</StyledButton>
            </Link>
            <Link href={"/authentication"}>
            <StyledButton>Sign-Up</StyledButton>
            </Link>
          
      </ButtonGroup>*/}
                {!loading && session ? (
                  pathname !== "/authentication" ? (
                    <SignedInNavButtonGroup />
                  ) : null
                ) : (
                  <DefaultNavButtonGroup />
                )}
              </Toolbar>
            )}
          </AppBar>
        </Box>
      )}
    </>
  );
}

export default Navigation;
