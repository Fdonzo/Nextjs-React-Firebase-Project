//import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
//import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
//import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
//import { useState } from "react";

/*
import * as React from 'react';

import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
*/

export default function LoadingDialog() {
  //const [open, setOpen] = useState(true);
  const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matchSizeMd = useMediaQuery(theme.breakpoints.down("md"));
  /*
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
*/
  return (
    <Box>
      {/*
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
  */}
      <Dialog
        //fullScreen={fullScreen}
        open={open}
        //onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          position: matchSizeMd && "absolute",
          top: matchSizeMd && 10,
          left: matchSizeMd && 10,
        }}
      >
        <DialogContent>
          <DialogContentText
            sx={{
              //border: "solid 3px black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                //position: matchSizeMd && "absolute",
                //top: matchSizeMd && 10,
                //left: matchSizeMd && 10,
                //border: "solid 3px red",
              }}
            >
              <Typography>Verifying...</Typography>
              <CircularProgress />
            </Box>
          </DialogContentText>
        </DialogContent>

        {/*
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
  */}
      </Dialog>
    </Box>
  );
}
