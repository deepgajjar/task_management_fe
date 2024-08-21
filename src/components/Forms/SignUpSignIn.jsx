import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";

import CommonTextField from "../common/CommonTextField";
import {
  SigninSchema,
  SignupSchema,
} from "../../utils/validations/validationSchemas";

const SignUpSignIn = ({ title, isSignup, submitHandler }) => {
  const navigate = useNavigate();
  const initialValues = !!isSignup
    ? { email: "", password: "", userName: "" }
    : { email: "", password: "" };

  const accountLinkClickHandler = (e) => {
    e.preventDefault();
    navigate(!!isSignup ? "/auth/signin" : "/auth/signup");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          paddingTop:'10vh',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={!!isSignup ? SignupSchema : SigninSchema}
            onSubmit={submitHandler}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Grid container spacing={2}>
                  {!!isSignup && (
                    <Grid item xs={12}>
                      <CommonTextField
                        label="User Name"
                        name="userName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                        errorMessage={
                          errors?.userName && touched?.userName
                            ? errors?.userName
                            : null
                        }
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <CommonTextField
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      errorMessage={
                        errors?.email && touched?.email ? errors?.email : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CommonTextField
                      name="password"
                      label="Password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      errorMessage={
                        errors?.password && touched?.password
                          ? errors?.password
                          : null
                      }
                    />
                  </Grid>
                </Grid>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {title}
                </Button>
              </Form>
            )}
          </Formik>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="/auth/signin"
                variant="body2"
                onClick={accountLinkClickHandler}
              >
                {!!isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpSignIn;
