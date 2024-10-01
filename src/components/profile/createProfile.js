import {
  Backdrop,
  Box,
  Container,
  CssBaseline,
  Input,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { lightBlue, grey } from "@mui/material/colors";
import { useFormik } from "formik";
import React, { useState } from "react";
import LoadingDialog from "../authentication/loadingDialog";
import LoginAvatar from "../login/loginAvatar";
import LoginInput from "../login/loginInput";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import UserSelect from "./userSelect";
import UserDate from "./userDate";
import UserTextArea from "./userTextArea";

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

const topContainerStyle = {
  my: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  border: "1px solid grey",
  borderRadius: "4px",
  p: 2,
};
export default function CreateProfile() {
  const [loading, setLoading] = useState(false);
  const usageReasons = ["Company", "Personal", "Research", "Others"];
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
    },
  });
  return (
    <Container
      component={"main"}
      maxWidth="xl"
      border={1}
      //sx={{ backdropFilter: "blur(20px)", color: "transparent" }}
    >
      <CssBaseline />

      {loading && (
        <Backdrop
          sx={{
            //backdropFilter: "blur(1px)",
            color: "white",
            //backgroundColor: "whitesmoke",
            opacity: 0.4,

            zIndex: (theme) => theme.zIndex.drawer - 1,
          }}
          open={open}
          //onClick={handleClose}
        >
          <LoadingDialog />
        </Backdrop>
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{
            ...topContainerStyle,
            width: { xs: "85%", sm: "75%", md: "60%", lg: "50%" },
            mb: 5,
            overflow: "auto",
          }}
        >
          <Input name="csrfToken" type="hidden" defaultValue={"fumba"} />
          <LoginAvatar />
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "18px" },
            }}
            variant="h6"
          >
            Edit Profile
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              gap: 2,
              mt: 2,
            }}
          >
            <LoginInput
              name="First Name"
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
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
          <Stack sx={{ width: "80%" }}>
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
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              gap: 2,
              mt: 1,
            }}
          >
            <UserSelect labelName="Reasons For Use" arrayNames={usageReasons} />
            <UserDate labelName={"Birth Date *"} />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              gap: 2,
              mt: 1,
            }}
          >
            <UserTextArea
              labelText={"Description"}
              placeholderText={"Please tell us about you in one sentence"}
              rowNumber={3}
            />
          </Stack>

          <Button
            disableElevation
            sx={{
              mb: 4,
              bgcolor: lightBlue["A200"],
              fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
              width: "80%",
              ":hover": {
                color: "white",
                bgcolor: grey["800"],
                border: "0.5px solid grey",
              },
            }}
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
