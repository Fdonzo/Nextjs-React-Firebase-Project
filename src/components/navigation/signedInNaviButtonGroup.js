/* eslint-disable @next/next/link-passhref */
import styled from "@emotion/styled";
import { Avatar, Button, Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavPopoverMenu from "./navPopoverMenu";

const StyledButton = styled(Button)({
  boxShadow: "none",
  borderRadius: "4px",
  color: "white",
  backgroundColor: grey["800"],

  border: "0.5px solid ",
  borderColor: grey[800],
  "&:hover": {
    color: grey["800"],
    backgroundColor: "white",
    borderColor: grey["800"],
  },
});

function SignedInNavButtonGroup() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { push, asPath, pathname } = useRouter();
  const handleClickAuthSignOut = async (event) => {
    event.preventDefault();
    console.log("signout");
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    console.log("signout", data);
    push(data.url);
  };

  const { data: session } = useSession();
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
  let selectPaths = false;
  if (
    asPath === "/" ||
    asPath === "/profile/editprofile" ||
    asPath === "/profile/subscriptionoption"
  ) {
    selectPaths = true;
  }
  let isDashboardPathname = false;
  if (pathname === "/dashboard") {
    isDashboardPathname = true;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: selectPaths
            ? { sm: "60%", md: "50%", lg: "40%" }
            : { sm: "50%", md: "40%", lg: "32%" },
          flexDirection: "row",
          justifyContent: { sm: "space-between", md: "space-evenly" },
        }}
      >
        <Stack
          sx={{
            width: selectPaths
              ? { sm: "90%", md: "85%" }
              : { sm: "85%", md: "80%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: { sm: "space-between", md: "space-evenly" },
            py: { sm: 1.5, md: 2 },
          }}
        >
          {/*<Link href={"/authentication"}>
       <StyledButton aria-label="payment button">Payment</StyledButton>
  </Link>*/}

          <StyledButton
            //size="medium"
            onClick={handleClickAuthSignOut}
            aria-label="sign-out button"
            sx={{
              fontSize: { sm: "10px", md: "12px", lg: "14px" },
              fontWeight: { sm: 250, md: 300, lg: 350 },
              lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            }}
          >
            Sign-Out
          </StyledButton>
          {!isDashboardPathname && (
            <Link href={"/dashboard"}>
              <StyledButton
                sx={{
                  fontSize: { sm: "10px", md: "12px", lg: "14px" },
                  fontWeight: { sm: 250, md: 300, lg: 350 },
                  lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
                }}
                //size="medium"
                aria-label="dashboard button"
              >
                Dashboard
              </StyledButton>
            </Link>
          )}
          {asPath !== "/profile" && (
            <Link href={"/profile"}>
              <StyledButton
                //size="medium"
                aria-label="profile button"
                sx={{
                  fontSize: { sm: "10px", md: "12px", lg: "14px" },
                  fontWeight: { sm: 250, md: 300, lg: 350 },
                  lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
                }}
              >
                Profile
              </StyledButton>
            </Link>
          )}
          {asPath !== "/decimation" && (
            <Link href={"/decimation"}>
              <StyledButton
                sx={{
                  fontSize: { sm: "10px", md: "12px", lg: "14px" },
                  fontWeight: { sm: 250, md: 300, lg: 350 },
                  lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
                }}
                //size="medium"
                aria-label="profile button"
              >
                Decimation
              </StyledButton>
            </Link>
          )}
        </Stack>
        <Avatar
          alt="Profile Avatar"
          src="/static/images/avatar/1.jpg"
          onClick={handleClick}
          sx={{
            width: { sm: 45, md: 50, lg: 56 },
            height: { sm: 45, md: 50, lg: 56 },
            mt: 1,
            ml: 1,
            color: "black",
            bgcolor: "whitesmoke",
          }}
        >
          {userProfileInitial}
        </Avatar>
      </Box>
      <NavPopoverMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
}

export default SignedInNavButtonGroup;
