/* eslint-disable react/jsx-key */
/*import {
  BottomNavigation,
  Box,
  CssBaseline,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
*/
//import { indigo, grey, blue, blueGrey, lightBlue } from "@mui/material/colors";
//import FooterSubtitleItem from "../components/footer/footerItem";
//import PolicyIcon from "@mui/icons-material/Policy";
//import GavelIcon from "@mui/icons-material/Gavel";
//import InfoIcon from "@mui/icons-material/Info";
//import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
//import CopyrightIcon from "@mui/icons-material/Copyright";
import { useSelector } from "react-redux";
//import { setIsInformationPage } from "../stores/infoPageState";
import DefaultPageFooter from "../components/footer/defaultFooter";
import InfoPageFooter from "../components/footer/infoPageFooter";
/*
const iconItem = [
  <GavelIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <PolicyIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <InfoIcon sx={{ color: "whitesmoke", mt: 2 }} />,
  <ContactPhoneIcon sx={{ color: "whitesmoke", mt: 2 }} />,
];

const footerItemName = [
  "Disclaimer",
  "Terms & Conditions",
  "About Us",
  "Contact us",
];
*/
function Footer() {
  const isInformationPage = useSelector(
    ({ infoPageState }) => infoPageState.isInformationPage
  );

  return <>{isInformationPage ? <InfoPageFooter /> : <DefaultPageFooter />}</>;
}

export default Footer;
