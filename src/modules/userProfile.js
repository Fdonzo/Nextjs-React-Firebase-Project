import {
  Container,
  Paper,
  Stack,
  Box,
  Button,
  Avatar,
  Typography,
  //SvgIcon,
} from "@mui/material";
//import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import EditIcon from "@mui/icons-material/Edit";

import React, { useEffect, useState } from "react";
import { grey, lightBlue } from "@mui/material/colors";
import { useRouter } from "next/router";
import AdminContactDialog from "../components/profile/adminContactDialog";
import EditPhotoFormDialog from "../components/profile/useProfilePhotoEdit";
import CustomBackdrop from "../utils/customBackDrop";

EditPhotoFormDialog;
function UserProfile() {
  const { push } = useRouter();
  const [mouseEnter, SetMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    SetMouseEnter(true);
  };
  const handleMouseLeave = () => {
    SetMouseEnter(false);
  };
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handlePhotoEditDialogOpen = () => {
    setOpenDialog(true);
  };
  //const [userID, setUserID] = useState({ user: { name: {} } });
  const [userID, setUserID] = useState({});

  useEffect(() => {
    setLoading(true);
    setUserID({ ...session });
  }, [userID]);

  console.log("session1", session);
  console.log("session2", userID);
  let userProfileName = "?";
  let userProfileInitial = "?";
  //let userImage =""
  const isSessionEmpty = Object.keys(userID).length !== 0;

  if (isSessionEmpty) {
    //console.log("mysession", userID);
    const { user } = userID;
    //console.log(user);
    const { name } = user;
    //userImage = image;
    const nameArray = name.split(" ");
    //console.log(nameArray);

    userProfileName = `${nameArray[0]} ${nameArray[1].charAt(0)}`;
    userProfileInitial = `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
    //setLoading(false);
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", justifyContent: "center", height: 700, mb: 4 }}
    >
      {loading && status === "authenticated" && <CustomBackdrop />}
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" },
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          //border: "solid red",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            width: { xs: "95%", sm: "95%", md: "90%" },
            mt: 2,
            flexDirection: "row",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              gap: 2,
              borderRadius: "4px 4px 0 0",
              borderTop: "1px solid",
              borderRight: "1px solid",
              borderLeft: "1px solid",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              boxShadow: 0,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", width: "40%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 0,
                  //border: "1px solid",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar
                  sx={{
                    width: { xs: 65, sm: 70, md: 80 },
                    height: { xs: 65, sm: 70, md: 80 },
                    bgcolor: lightBlue["A200"],
                    mb: 4,
                    mt: 1,
                    mx: 2,
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  //src={`${userImage}`}
                >
                  {userProfileInitial}
                </Avatar>
                {mouseEnter && (
                  <Avatar
                    sx={{ bgcolor: grey["800"] }}
                    onClick={handlePhotoEditDialogOpen}
                  >
                    <EditIcon />
                  </Avatar>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  pl: 1,
                  flexDirection: "column",
                  flexGrow: 1,
                  pt: 2,
                }}
              >
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    //fontWeight: { xs: 300, sm: 300, md: 300, lg: 350 },
                  }}
                >
                  {userProfileName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: { xs: "small", sm: "medium", md: "large" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                      },
                      //fontWeight: { xs: 300, sm: 300, md: 300, lg: 350 },
                    }}
                  >
                    Perth, Australia-6:50pm
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "60%", sm: "57%", md: "52%", lg: "50%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Button
                disableElevation
                size="small"
                sx={{
                  fontSize: { xs: "8px", sm: "8px", md: "10px", lg: "14px" },
                  fontWeight: { xs: 250, sm: 250, md: 300, lg: 350 },
                  lineHeight: { xs: 1.4, sm: 1.4, md: 1.6, lg: 1.6 },
                  bgcolor: grey["800"],
                  color: "white",
                  borderRadius: 4,
                  ":hover": {
                    bgcolor: lightBlue["A200"],
                    color: "black",
                  },
                }}
                variant="contained"
                startIcon={<LoyaltyIcon />}
                onClick={() => push("/profile/subscriptionoption")}
              >
                {" "}
                Subcription Options{" "}
              </Button>
              <Button
                disableElevation
                size="small"
                sx={{
                  fontSize: { xs: "8px", sm: "8px", md: "10px", lg: "14px" },
                  fontWeight: { xs: 250, sm: 250, md: 300, lg: 350 },
                  lineHeight: { xs: 1.4, sm: 1.4, md: 1.6, lg: 1.6 },
                  bgcolor: grey["800"],
                  color: "white",
                  borderRadius: 4,
                  ":hover": {
                    bgcolor: lightBlue["A200"],
                    color: "black",
                  },
                }}
                variant="contained"
                startIcon={<SettingsIcon />}
                onClick={() => push("/profile/editprofile")}
              >
                Profile Settings
              </Button>
            </Box>
          </Paper>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            width: { xs: "95%", sm: "95%", md: "90%" },
            flexDirection: "row",
            height: "75%",
            flexWrap: "wrap",
          }}
        >
          <Stack sx={{ width: "25%" }}>
            <Paper
              sx={{
                height: "100%",
                border: "1px solid",
                borderRadius: "0 0 0 4px",
                boxShadow: 0,
              }}
            >
              <Box
                sx={{
                  height: { xs: "10%", sm: "15%", md: "20%" },
                  display: "flex",
                  //bgcolor: grey["800"],
                }}
              >
                <Button
                  size="large"
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: "80%",
                    color: grey["800"],
                    borderRadius: 8,
                    fontSize: { xs: "8px", sm: "8px", md: "12px", lg: "14px" },
                    ":hover": {
                      color: lightBlue["A200"],
                    },
                  }}
                >
                  Subcription
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  gap: 5,
                  mx: { xs: 1, sm: 1, md: 2, lg: 3 },
                }}
              >
                <Box
                  component={"Typography"}
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    fontWeight: { xs: 300, sm: 300, md: 300, lg: 350 },
                  }}
                >
                  Status
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    fontWeight: { xs: 300, sm: 300, md: 300, lg: 350 },
                  }}
                  component={"Typography"}
                >
                  Expiry Date
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    fontWeight: { xs: 300, sm: 300, md: 300, lg: 350 },
                  }}
                  component={"Typography"}
                >
                  Number of uploads
                </Box>
              </Box>
            </Paper>
          </Stack>
          <Stack sx={{ display: "flex", flexGrow: 1 }}>
            <Paper
              sx={{
                height: "100%",
                //border: "1px solid",
                borderRight: " 1px solid",
                borderBottom: " 1px solid",
                borderTop: "1px solid",
                borderRadius: "0 0 4px 0",
                boxShadow: 0,
              }}
            ></Paper>
          </Stack>
        </Stack>
        <AdminContactDialog />
      </Box>
      <EditPhotoFormDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
}

export default UserProfile;
/*
export async function getServerSideProps(ctx) {
  //const prisma = new PrismaClient();
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/authentication",
        permanent: false,
      },
    };
  }
  /*const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });
  
  return {
    props: {
      session: session,
      //profile,
    },
  };
}
*/
