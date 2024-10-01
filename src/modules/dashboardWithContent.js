import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSession } from "next-auth/react";
import DashboardContent from "../components/dashboard/dashboardContent";
import DashboardNav from "../components/dashboard/dashboardNav";
import DashboardTopSideNav from "../components/dashboard/dashboardTopSideNav";

function DashboardWithContent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Box
        sx={{
          height: "25%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {matches && <DashboardTopSideNav />}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <DashboardNav />
        <DashboardContent />
      </Box>
    </>
  );
}

export default DashboardWithContent;
