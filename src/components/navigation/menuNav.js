/* eslint-disable @next/next/link-passhref */
//import { lightBlue } from "@material-ui/core/colors";
import styled from "@emotion/styled";
import { Menu, MenuItem, MenuList } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setHasAlreadySignup } from "../../stores/signup";

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    color: "white",
    backgroundColor: grey["800"],
  },
});

function MenuNav({ open, anchorEl, handleClose }) {
  const { data: session } = useSession();
  const { asPath, push } = useRouter();
  let isNotHomePage;
  if (asPath === "/authentication") {
    isNotHomePage = true;
  } else {
    isNotHomePage = false;
  }
  let isHomePage;
  if (asPath === "/") {
    isHomePage = true;
  } else {
    isHomePage = false;
  }
  let isPasswordRecreationPage;
  if (asPath === "/authentication/passwordrecreation") {
    isPasswordRecreationPage = true;
  } else {
    isPasswordRecreationPage = false;
  }

  const hasAlreadySignup = useSelector(({ signup }) => signup.hasAlreadySignup);
  const dispatch = useDispatch();

  const handleClickSignIn = () => {
    if (!hasAlreadySignup) {
      dispatch(setHasAlreadySignup());
      push("/authentication");
    }
  };
  const handleClickSignUp = () => {
    if (hasAlreadySignup) {
      console.log("signup", hasAlreadySignup);
      dispatch(setHasAlreadySignup());
      push("/authentication");
    } else {
      push("/authentication");
    }
  };

  const handleClickAuthSignOut = async (event) => {
    event.preventDefault();
    console.log("signout");
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    console.log("signout", data);
    push(data.url);
  };

  return (
    <Menu
      sx={{
        mt: session ? 5 : 3.8,
      }}
      id="nav-positioned-menu"
      aria-labelledby="nav-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {session ? (
        <MenuList>
          {" "}
          <StyledMenuItem onClick={handleClickAuthSignOut}>
            Sign-Out
          </StyledMenuItem>
          {asPath !== "/dashboard" && (
            <StyledMenuItem onClick={() => push("/dashboard")}>
              Dashboard
            </StyledMenuItem>
          )}
          {asPath !== "/profile" && (
            <StyledMenuItem onClick={() => push("/profile")}>
              Profile
            </StyledMenuItem>
          )}
          {asPath !== "/decimation" && (
            <StyledMenuItem onClick={() => push("/decimation")}>
              Decimation
            </StyledMenuItem>
          )}
        </MenuList>
      ) : (
        <MenuList>
          {" "}
          {(isNotHomePage || isPasswordRecreationPage) && (
            <StyledMenuItem onClick={() => push("/")}>Home</StyledMenuItem>
          )}
          {(!hasAlreadySignup || isHomePage || isPasswordRecreationPage) && (
            <StyledMenuItem onClick={handleClickSignIn}>Sign-In</StyledMenuItem>
          )}
          {(hasAlreadySignup || isHomePage || isPasswordRecreationPage) && (
            <StyledMenuItem onClick={handleClickSignUp}>Sign-Up</StyledMenuItem>
          )}
        </MenuList>
      )}
    </Menu>
  );
}

export default MenuNav;
