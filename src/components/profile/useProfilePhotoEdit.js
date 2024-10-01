import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
//import { useState } from "react";

export default function EditPhotoFormDialog({ openDialog, setOpenDialog }) {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <Dialog
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        open={openDialog}
        onClose={handleClose}
      >
        <DialogTitle>Edit Profile Photo</DialogTitle>
        <DialogContent>
          <DialogContentText>Attach your photo below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Attach Photo"
            type="file"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
