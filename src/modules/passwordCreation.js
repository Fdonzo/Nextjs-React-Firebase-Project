import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  Backdrop,
} from "@mui/material";
import LoginAvatar from "../components/login/loginAvatar";
import LoginInput from "../components/login/loginInput";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { lightBlue, grey } from "@mui/material/colors";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

import CustomLoading from "../utils/customLoading";

const topContainerStyle = {
  my: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  border: "0.5px solid grey",
  borderRadius: "4px",
  p: 2,
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

function PasswordRecreation() {
  const [emailForward, setEmailForward] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const { email } = values;

      setLoading(true);
      setOpen(true);
      const response = await axios({
        method: "POST",
        url: "/api/auth/passwordReset",
        data: {
          email,
        },
        headers: { "Content-Type": "application/json" },
      });
      //console.log("mydata", response);
      const { data } = response;
      //console.log("data", data);
      if (data.message === "sent") {
        setEmailForward(true);
      } else if (data.status === 500 && data.error) {
        setError(true);
      }
      setLoading(false);
      setSubmitting(false);
    },
  });

  return (
    <Container component={"main"} maxWidth="xl" sx={{ mb: 8 }}>
      <CssBaseline />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {loading && (
          <Backdrop
            sx={{
              bgcolor: "transparent",
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
            //onClick={handleClose}
          >
            <CustomLoading />
          </Backdrop>
        )}
        {!loading && !emailForward && (
          <Box
            component={"form"}
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              ...topContainerStyle,
              width: { xs: "80%", sm: "60%", md: "50%", lg: "35%" },
              mb: 5,
              boxShadow: 0.5,
              //height: { xs: 150, sm: 300 },
            }}
          >
            <LoginAvatar />

            <Typography
              sx={{
                my: 1,
                color: "black",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
              variant={matches ? "h6" : "h6"}
            >
              Recreate Password
            </Typography>

            <LoginInput
              name="Email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              handleChange={formik.handleChange}
              value={formik.values.email}
              hasAdorment={true}
              icon={<MailOutlineIcon />}
              position="start"
            />

            <Button
              aria-label="submit-button"
              size="large"
              disableElevation
              fullWidth
              sx={{
                mt: 3,
                mb: 5,
                bgcolor: lightBlue["A200"],
                //opacity: "0.8",
                fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "14px" },
                //lineHeight: { xs: 1.2, sm: 1.5, md: 1.5, lg: 1.5 },
                ":hover": { bgcolor: grey["800"], color: "white", border: 1 },
              }}
              type="submit"
              variant={"contained"}
            >
              Submit
            </Button>
          </Box>
        )}
        {emailForward && (
          <Box
            sx={{
              ...topContainerStyle,
              width: { xs: "70%", sm: "60%", md: "50%", lg: "35%" },
              mb: 25,
              pt: 5,
              boxShadow: 0.5,
              //height: { xs: 150, sm: 300 },
            }}
          >
            <Avatar
              sx={{
                bgcolor: error ? "red" : lightBlue["A200"],
                //color: lightBlue["A200"],
              }}
            >
              {emailForward ? (
                <CheckCircleIcon />
              ) : (
                <ErrorIcon sx={{ color: "red" }} />
              )}
            </Avatar>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              {error
                ? "Enter a valid email or Create a new account"
                : " A valid link has been successfully sent to your email"}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default PasswordRecreation;
