import Button from "@mui/material/Button";

import { useState } from "react";
import LoginAvatar from "../login/loginAvatar";
import LoginInput from "../login/loginInput";
import { Stack, Box, useMediaQuery, Typography } from "@mui/material";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFormik } from "formik";
import UserTextArea from "./userTextArea";
import { lightBlue } from "@mui/material/colors";

import { useTheme } from "@emotion/react";
//import styled from "@emotion/styled";
/** 
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
*/
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Invalid email address")
    .required("Email is required"),
  /*
    password: yup
      .string("Enter your password")
      .min(10, "A minimum 8 characters is required")
      .minLowercase(6, "At least 6 lower letters are required")
      .minUppercase(1, "At least 1 upper letter is required")
      .minNumbers(2, "At least 2 number character is required")
      .minSymbols(1, "At least 1 symbol character is required")
      .required("Password is required"),
      */
});
export default function AdminContactDialog() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  //const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  /*
  const handleClickOpen = () => {
    setOpen(true);
    console.log(loading);
  };
*
  const handleClose = () => {
    setOpen(false);
  };
*/
  console.log(matches);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      const { email, password } = values;
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: `${window.location.origin}/dashboard`,
      });
      setSubmitting();
      console.log(res);
      console.log(loading);
    },
  });
  return (
    <Box>
      <Stack
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <LoginAvatar />
      </Stack>

      <Typography sx={{ textAlign: "center" }}>Contact Admin</Typography>

      <Typography>
        Provide your contact details below for us to get back to you at later
        time.
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          //width: "80%",
          gap: 2,
          my: 2,
        }}
      >
        <LoginInput
          name="First Name"
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          handleChange={formik.handleChange}
          value={formik.values.firstName}
          isStartAdorment={true}
          icon1={<AccountBoxSharpIcon />}
          position="start"
        />
        <LoginInput
          name="Last Name"
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          handleChange={formik.handleChange}
          value={formik.values.lastName}
          isStartAdorment={true}
          icon1={<AccountBoxSharpIcon />}
          position="start"
        />
      </Stack>
      <Stack sx={{ my: 2 }}>
        <LoginInput
          name="Email"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          handleChange={formik.handleChange}
          value={formik.values.email}
          hasAdorment={true}
          icon={<MailOutlineIcon />}
        />
      </Stack>
      <Stack>
        <UserTextArea
          labelText={"Message"}
          placeholderText={"Please write your message here"}
          rowNumber={4}
        />
      </Stack>
      <Stack>
        <Button
          disableElevation
          sx={{
            mt: 2,
            mb: 4,
            bgcolor: lightBlue["A700"],
            opacity: "0.7",
            //width: "80%",
            ":hover": {
              bgcolor: "black",
              color: "white",
              border: "0.5px solid grey",
            },
          }}
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}
