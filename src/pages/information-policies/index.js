import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";
import { Box, useTheme } from "@mui/system";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
//import LoginAvatar from "../../components/login/loginAvatar";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { setIsInformationPage } from "../../stores/infoPageState";
import { useRef } from "react";

const StyledTypography = styled(Typography)({
  textAlign: "center",
  marginBottom: "10px",
});
const StyledAvatar = styled(Avatar)({
  backgroundColor: grey["800"],
});

const StyledContainer = styled(Container)({
  backgroundColor: lightBlue["A200"],
  height: "650px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //marginBottom:theme.spacing(0.5)
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "90%",
  width: "80%",
  display: "flex",
  //justifyContent:"center",
  flexDirection: "column",
  //alignItems: "center",
  padding: theme.spacing(2),
  overflow: "auto",
  color: grey["800"],
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  display: "flex",
  flexDirection: "column",
  //justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2),
  //border: "solid 2px",
}));

function AboutPage() {
  const footerItemName = [
    "Disclaimer",
    "Terms & Conditions",
    "About Us",
    "Contact Us",
  ];
  const isInformationPage = useSelector(
    ({ infoPageState }) => infoPageState.isInformationPage
  );
  const buttomElement = useRef();
  const forward = () => {
    console.log(buttomElement);
    console.log(buttomElement.current.innerText);
    let tabName = buttomElement.current.innerText;
    switch (tabName) {
      case "CONTACT US":
        console.log(tabName);
        break;
    }
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const { push } = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (isInformationPage) {
      console.log(isInformationPage);
      dispatch(setIsInformationPage());
      push("/");
    }
  };

  return (
    <>
      {isInformationPage && (
        <StyledContainer maxWidth="xl">
          <CssBaseline />
          <StyledPaper
            sx={{
              //overflowY: "auto",
              //scrollbarWidth: "thin",
              //scrollbarColor: " red black",
              overflow: "auto",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: 8,
                //height: 10,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: lightBlue["A200"],
                borderRadius: 2,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: grey["800"],
                width: 6,
              },
              "&::-webkit-scrollbar-button": {
                //width: 3,
                height: "12px",
              },
            }}
          >
            <StyledBox>
              <Avatar
                sx={{ width: 56, height: 56 }}
                aria-aria-label="app-logo"
                src="/vricon.jpg"
                onClick={handleClick}
              />
              <ButtonGroup
                sx={{
                  my: 2,
                  width: "95%",
                }}
                size={matches ? "small" : "medium"}
              >
                {footerItemName.map((eachItem, index) => {
                  return (
                    <Button
                      ref={buttomElement}
                      sx={{
                        bgcolor: lightBlue["A200"],
                        color: "white",
                        width: "30%",
                        borderColor: lightBlue["A200"],
                        ":hover": {
                          bgcolor: "white",
                          color: grey["800"],
                          borderColor: lightBlue["A200"],
                        },
                        ":focus": {
                          bgcolor: grey["800"],
                          color: "white",
                          borderColor: grey["800"],
                        },
                      }}
                      aria-label="medium-size buttom"
                      key={index}
                    >
                      {eachItem}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </StyledBox>
            <StyledTypography variant={"h6"} mt={5}>
              Subtitle 1
            </StyledTypography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </Typography>
            <StyledTypography variant={"h6"}>Subtitle 2</StyledTypography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos
            </Typography>
            <StyledTypography variant={"h6"}>Subtitle 1</StyledTypography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </Typography>
            <StyledTypography variant={"h6"}>Subtitle 2</StyledTypography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos
            </Typography>

            <Box
              sx={{
                mt: 3,
                mb: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <StyledAvatar>
                <ArrowForwardIcon
                  //onClick={(event) => console.log(event)}
                  onClick={forward}
                  onLoad={(evnt) => console.log(evnt)}
                />
              </StyledAvatar>
              <StyledAvatar onClick={handleClick}>
                <HomeIcon />
              </StyledAvatar>
              <StyledAvatar>
                <ArrowBackIcon />
              </StyledAvatar>
            </Box>
          </StyledPaper>
        </StyledContainer>
      )}
    </>
  );
}

export default AboutPage;
