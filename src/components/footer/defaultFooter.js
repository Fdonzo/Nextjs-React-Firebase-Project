/* eslint-disable react/jsx-key */
import { Box, Stack, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import FooterSubtitleItem from "./footerItem";
import PolicyIcon from "@mui/icons-material/Policy";
import GavelIcon from "@mui/icons-material/Gavel";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FooterItemSubheading from "./footerItemSubheading";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SocialMeddiaFollowUs from "./socialMeddiaFollowUs";

//import { useDispatch, useSelector } from "react-redux";
//import { setIsInformationPage } from "../../stores/infoPageState";

const iconFooterItems = [
  <GavelIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <PolicyIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <InfoIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <ContactPhoneIcon sx={{ color: "whitesmoke", mt: 2 }} />,
];

const cssStyle = {
  fontSize: { xs: 20, sm: 25, md: 35, lg: 40 },
};
const socialMediaFollowUsIcons = [
  <FacebookSharpIcon />,
  <InstagramIcon />,
  <TwitterIcon />,
  <YouTubeIcon />,
];
const footerItemName = [
  "Disclaimer",
  "Terms & Conditions",
  "About Us",
  "Contact Us",
];
const allItems = {
  aboutUsItems: [
    "About us",
    "Goal as a business",
    "Value proposition to endusers",
    "Our endusers testimonials",
  ],
  termsConditionsItems: [
    "Intellectual propriety rights",
    "Endusers data privacy and security",
    "How we operate as a business",
    "What we expect from our endusers",
  ],
  disclaimerItems: [
    "What we are not as a business",
    "Fair use",
    "Copyright",
    "No-responsibility",
  ],
  contactUsItems: [
    "General contact",
    "Support assistant for subcribed endusers",
    "Frequent asked questions",
    "Community",
  ],
};
function DefaultPageFooter() {
  /*
  const isInformationPage = useSelector(
    ({ infoPageState }) => infoPageState.isInformationPage
  );
 */
  const allItemskeyProprieties = Object.keys(allItems);
  return (
    <Box sx={{ backgroundColor: lightBlue["A200"], position: "sticky", pb: 5 }}>
      {/*<CssBaseline/>
        <Paper sx={{ backgroundColor:indigo[400], borderRadius:0}} elevation={1}>*/}
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {iconFooterItems.map((each, index) => {
          return (
            <Stack>
              <FooterSubtitleItem
                key={footerItemName[index]}
                icon={each}
                label={footerItemName[index]}
              />
              <FooterItemSubheading
                eachItem={allItems[`${allItemskeyProprieties[`${index}`]}`]}
              />
            </Stack>
          );
        })}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {" "}
        <Typography
          variant={"body1"}
          sx={{
            color: "white",
            mr: 1,
            fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
            fontWeight: { xs: 300, sm: 300, lg: 350 },
            lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            //":hover": { borderBottom: "solid 1px white" },
          }}
        >
          All contents copyright
        </Typography>
        <CopyrightIcon
          sx={{
            color: "white",
            fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
            fontWeight: { xs: 300, sm: 300, lg: 350 },
            lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            mt: 0.5,
            //":hover": { borderBottom: "solid 1px white" },
          }}
        />{" "}
        <Typography
          sx={{
            ml: 1,
            mb: 2,
            color: "white",
            fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
            fontWeight: { xs: 300, sm: 300, lg: 350 },
            lineHeight: { sm: 1, md: 1.3, lg: 1.5 },
            //":hover": { borderBottom: "solid 1px white" },
          }}
          variant={"body1"}
        >
          my company. All rights reserved.
        </Typography>{" "}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 2,
          pr: 5,
        }}
      >
        {socialMediaFollowUsIcons.map((eachIcon, index) => {
          return (
            <SocialMeddiaFollowUs
              style={cssStyle}
              icon={eachIcon}
              customkey={index}
            />
          );
        })}
      </Stack>
      {/*</Paper>*/}
    </Box>
  );
}

export default DefaultPageFooter;
