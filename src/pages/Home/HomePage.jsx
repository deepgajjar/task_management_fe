import React from "react";
import AppBarWithSignInSignUp from "../../components/Common/AppBarWithSignInSignUp";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const isTokenAvailable = window.localStorage.getItem("token");
  const clickHandler = () => {
    if (!!isTokenAvailable) {
      navigate("/dashboard");
    } else {
      navigate("/auth/signin");
    }
  };
  return (
    <>
      <AppBarWithSignInSignUp />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
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
          }}
        >
          <Typography variant="h2">
            Welcome to task management system.
          </Typography>
          <Button
            sx={{
              mt: 2,
              textTransform: "unset",
              fontSize: "1rem",
            }}
            // color="inherit"
            onClick={clickHandler}
          >
            {!!isTokenAvailable ? "Go to dashboard" : "Sign in"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
