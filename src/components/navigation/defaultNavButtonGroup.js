/* eslint-disable @next/next/link-passhref */
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setHasAlreadySignup } from "../../stores/signup";
//import { useTheme } from "@mui/material/styles";

const StyledButton = styled(Button)({
  boxShadow: "none",
  borderRadius: "4px",
  color: "white",
  backgroundColor: grey["800"],

  border: "1px solid ",
  borderColor: grey[800],
  "&:hover": {
    color: grey["800"],
    backgroundColor: "white",
    borderColor: grey[800],
  },
});

function DefaultNavButtonGroup() {
  const { asPath, pathname } = useRouter();
  let isNotHomePage;
  if (pathname === "/authentication") {
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
  /*
  const theme = useTheme();
  const matcheSize = useMediaQuery(theme.breakpoints.down("lg"));
  */
  const hasAlreadySignup = useSelector(({ signup }) => signup.hasAlreadySignup);
  const dispatch = useDispatch();

  const handleClickSignIn = () => {
    if (!hasAlreadySignup) {
      dispatch(setHasAlreadySignup());
    }
  };
  const handleClickSignUp = () => {
    if (hasAlreadySignup) {
      //console.log("signup", hasAlreadySignup);
      dispatch(setHasAlreadySignup());
    }
  };
  return (
    <Stack
      sx={{
        width: isPasswordRecreationPage
          ? { sm: "38%", md: "25%", lg: "20%" }
          : { sm: "25%", md: "20%", lg: "15%" },
        display: "flex",
        flexDirection: "row",
        justifyContent: {
          sm: "space-around",
          md: "space-around",
          lg: "space-evenly",
        },

        py: 1.5,
      }}
    >
      {(isNotHomePage || isPasswordRecreationPage) && (
        <Link href={"/"}>
          <StyledButton
            aria-label="home button"
            sx={{
              fontSize: { sm: "10px", md: "12px", lg: "14px" },
              fontWeight: { sm: 300, md: 300, lg: 350 },
              lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            }}
          >
            Home
          </StyledButton>
        </Link>
      )}
      {(!hasAlreadySignup || isHomePage || isPasswordRecreationPage) && (
        <Link href={"/authentication"}>
          <StyledButton
            onClick={handleClickSignIn}
            aria-label="sign-in button"
            sx={{
              fontSize: { sm: "10px", md: "12px", lg: "14px" },
              fontWeight: { sm: 300, md: 300, lg: 350 },
            }}
          >
            Sign-In
          </StyledButton>
        </Link>
      )}
      {(hasAlreadySignup || isHomePage || isPasswordRecreationPage) && (
        <Link href={"/authentication"}>
          <StyledButton
            onClick={handleClickSignUp}
            aria-label="sign-up button"
            sx={{
              fontSize: { sm: "10px", md: "12px", lg: "14px" },
              fontWeight: { sm: 300, md: 300, lg: 350 },
            }}
          >
            Sign-Up
          </StyledButton>
        </Link>
      )}
    </Stack>
  );
}

export default DefaultNavButtonGroup;
