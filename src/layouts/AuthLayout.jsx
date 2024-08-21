import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBarWithSignInSignUp from "../components/common/AppBarWithSignInSignUp";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!!token) navigate("/dashboard");
  }, []);
  return (
    <>
      <AppBarWithSignInSignUp />
      <Outlet />
    </>
  );
};

export default AuthLayout;
