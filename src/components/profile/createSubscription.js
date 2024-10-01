import {
  Backdrop,
  Box,
  Container,
  CssBaseline,
  Input,
  Typography,
  Stack,
  Button,
  useMediaQuery,
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
import UserSelect from "./userSelect";
import UserDate from "./userDate";
import UserTextArea from "./userTextArea";
import { useTheme } from "@emotion/react";
//import { useRouter } from "next/router";

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

export default function CreateSubcription() {
  const [loading, setLoading] = useState(false);
  //const [open, setOpen] = useState(true);
  const subscriptionmode = ["Monthly", "One Off"];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //const { push } = useRouter();
  /*useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        push(`/authentication`);
      } else {
        setLoading(false);
        setOpen(false);
      }
    };
    securePage();
  }, []);
  */
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

            zIndex: (theme) => theme.zIndex.drawer + 1,
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
            variant={matches ? "h6" : "h6"}
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "18px" },
            }}
          >
            Subcription Options
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

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              gap: 2,
              mt: 1,
            }}
          >
            <UserSelect
              labelName={"Subscription Mode"}
              arrayNames={subscriptionmode}
            />
            <UserDate labelName={"Starting Date *"} />
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
              labelText={"Payment option to be put here"}
              placeholderText={"This temporarily element"}
              rowNumber={3}
            />
          </Stack>

          <Button
            disableElevation
            sx={{
              mb: 4,
              bgcolor: lightBlue["A200"],
              //opacity: "0.7",
              width: "80%",
              ":hover": {
                bgcolor: grey["800"],
                color: "white",
                border: "0.5px solid grey",
              },
              fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
            }}
            variant="contained"
            type="submit"
          >
            Pay
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
