import { createTheme } from "@mui/material/styles";
import { lightBlue, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue["A200"],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#212121",
    },
  },
});

export default theme;
