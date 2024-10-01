import { Avatar, Menu, MenuItem, useTheme, useMediaQuery } from "@mui/material";
//import PersonAdd from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LockResetIcon from "@mui/icons-material/LockReset";
import ContactMailIcon from "@mui/icons-material/ContactMail";
//import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { lightBlue, grey } from "@mui/material/colors";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../stores/contactAdmin";

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    color: "white",
    backgroundColor: grey["800"],
  },
});

const StyledAvatar = styled(Avatar)({
  backgroundColor: lightBlue["A200"],
});

export default function NavPopoverMenu({ open, anchorEl, handleClose }) {
  const openDialog = useSelector(
    ({ contactAdminDialog }) => contactAdminDialog.openDialog
  );
  const theme = useTheme();
  const matchDown = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const handleClickDialogOpen = () => {
    if (!openDialog) {
      dispatch(setOpen());
      //push("/");
    }
  };
  const { push, asPath } = useRouter();
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      sx={{ borderRightColor: lightBlue["A200"] }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            //ml: 0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: matchDown ? 14 : 18,
            width: 15,
            height: 15,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <StyledMenuItem onClick={() => push(`/profile`)}>
        <StyledAvatar>
          <EditIcon />
        </StyledAvatar>{" "}
        Edit Profile
      </StyledMenuItem>
      <StyledMenuItem onClick={() => push(`/profile/subscriptionoption`)}>
        <StyledAvatar>
          <LoyaltyIcon />
        </StyledAvatar>{" "}
        Subcription Options
      </StyledMenuItem>
      <StyledMenuItem onClick={() => push(`/`)}>
        <StyledAvatar>
          <LockResetIcon />
        </StyledAvatar>{" "}
        Password Setting
      </StyledMenuItem>
      {asPath === "/profile" && (
        <StyledMenuItem onClick={handleClickDialogOpen}>
          <StyledAvatar>
            <ContactMailIcon />
          </StyledAvatar>{" "}
          Contact Admin
        </StyledMenuItem>
      )}
      {/*<Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
    */}
    </Menu>
  );
}
