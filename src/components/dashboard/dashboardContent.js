import { Box, Stack, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { grey, lightBlue, lime } from "@mui/material/colors";
import { DashboardAddIcon } from "./dashboardAddIcon";
import {
  Chart,
  PieSeries,
  //Title,
  //Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    //textAlign: "center",
    //padding: 15,
    backgroundColor: `${lightBlue["A200"]} !important1`,
  },
});

function DashboardContent() {
  const [useData, setUseData] = useState({
    totalUploads: 30,
    deletedUploads: 7,
    monthlyUploads: 5,
  });

  const classes = useStyles();

  // Sample data
  const data = [
    { argument: "Total Uploads", value: useData.totalUploads },
    { argument: "Deleted Uploads", value: useData.deletedUploads },
    { argument: "Monthly Uplaods", value: useData.monthlyUploads },
  ];
  useEffect(() => {
    setUseData({ totalUploads: 30, deletedUploads: 7, monthlyUploads: 5 });
  }, []);
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        overflowY: "auto",
        height: 600,
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        bgcolor: grey["300"],
        opacity: "0.7",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          height: "45%",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          my: 2,
          width: "95%",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            flexGrow: 1,
            bgColor: "blue",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 2,
            pt: 1,
          }}
          className={classes.root}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: grey["800"],
              fontWeight: "medium",
            }}
          >
            {" "}
            Summary
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="body2">Total Uploads </Typography>
              <Typography variant="body2">{useData.totalUploads}</Typography>
            </Box>
            <Box>
              <Typography variant="body2"> Deleted Uploads</Typography>
              <Typography variant="body2"> {useData.deletedUploads}</Typography>
            </Box>
            <Box>
              <Typography variant="body2"> Monthly Uploads</Typography>
              <Typography variant="body2"> {useData.monthlyUploads}</Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Chart data={data} width={120} height={120} sx={{}}>
              <PieSeries valueField="value" argumentField="argument" />

              <Animation />
            </Chart>
          </Stack>
        </Paper>

        <Paper
          sx={{
            flexGrow: 1,
            bgColor: "blue",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 2,
            pt: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: grey["800"],
              fontWeight: "medium",
            }}
          >
            {" "}
            Subcription
          </Typography>
        </Paper>
        {/*<Paper sx={{ flexGrow: 1 }}>say</Paper>*/}
      </Stack>
      <Stack
        sx={{
          width: "95%",
          height: "50%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          mb: 2,
        }}
      >
        <Paper sx={{ display: "flex", flexGrow: 1 }}>sayheloo</Paper>
        <Paper sx={{ display: "flex", flexGrow: 1 }}>sayheloo</Paper>
      </Stack>
      <DashboardAddIcon />
    </Box>
  );
}
lime;

export default DashboardContent;
