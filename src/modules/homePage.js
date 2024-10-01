import {
  Box,
  Divider,
  Stack,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { blueGrey, lightBlue } from "@mui/material/colors";

import styled from "@emotion/styled";
import HomePageMedia from "../components/homePage/homePageCard";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",

  margin: "5% 0 2% 2%",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const cardContents = ["Lizard", "Cat", "Tiger", "Deer"];
function HomePage() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //console.log("myprocess", process.env);
  return (
    <StyledStack
      gap={1}
      divider={
        <Divider
          sx={{ bgcolor: lightBlue["A200"] }}
          orientation="vertical"
          flexItem
          data-testid="top-stack"
        />
      }
    >
      <Box sx={{ flex: 1, bgcolor: "inherit", px: 3 }}>
        <Typography
          data-testid="heading-h4"
          variant="h4"
          sx={{ textAlign: "center", p: 2 }}
        >
          AR Conversion
        </Typography>

        <Typography
          sx={{ fontWeight: "normal" }}
          variant={matches ? "body1" : "h6"}
          paragraph={true}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor.
        </Typography>
      </Box>
      <Box sx={{ flex: 2, bgcolor: "inherit", p: 2 }}>
        <Paper sx={{ bgcolor: blueGrey["50"], boxShadow: 0 }}>
          <Typography
            data-testid="heading-h5"
            variant="h5"
            sx={{ p: 2, textAlign: "center" }}
          >
            {" "}
            Product Overview
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",

              rowGap: 3,
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              px: 2,
              pb: 4,
              mt: 1,
            }}
          >
            {cardContents.map((eachCard, index) => {
              return <HomePageMedia key={index} name={eachCard} />;
            })}
          </Stack>{" "}
        </Paper>{" "}
      </Box>
    </StyledStack>
  );
}

export default HomePage;
