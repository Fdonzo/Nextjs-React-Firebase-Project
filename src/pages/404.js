import {
  Container,
  Box,
  Typography,
  Link,
  Divider,
  Stack,
  useMediaQuery,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { lightBlue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

function PageNotFound() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          height: { xs: 300, sm: 400 },
          alignItems: "center",
          justifyContent: "center",
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Stack sx={{ display: "flex", flexDirection: "row", my: 2 }}>
            {" "}
            <Typography
              sx={{ alignSelf: "flex-end", px: 2 }}
              variant={matches ? "body2" : "body1"}
            >
              {" "}
              Oops, there is a bug!!
            </Typography>
            <AdbIcon
              sx={{ color: lightBlue["A700"], opacity: "0.7" }}
              fontSize="large"
            />
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, my: 2 }}>
            <Typography sx={{ px: 2 }} variant={matches ? "body2" : "body1"}>
              {" "}
              This page does not exit{" "}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ color: lightBlue["A700"] }}
            />
            <Link
              onClick={() => router.push("./")}
              variant={matches ? "body2" : "body1"}
            >
              {" "}
              Return back home Page{" "}
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default PageNotFound;
