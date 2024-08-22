import React from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";

const AppBarWithSignInSignUp = () => {
  const navigate = useNavigate();
  const isTokenAvailable = window.localStorage.getItem("token");
  const headerBtn = [
    {
      title: "Sign in",
      clickHandler: () => {
        navigate("/auth/signin");
      },
    },
    {
      title: "Sign up",
      clickHandler: () => {
        navigate("/auth/signup");
      },
    },
  ];

  const dashboardBtn = [
    {
      title: "Go To Dashboard",
      clickHandler: () => {
        navigate("/dashboard");
      },
    },
  ];

  return (
    <>
      <AppHeader
        headerRightBtns={!!isTokenAvailable ? dashboardBtn : headerBtn}
      />
    </>
  );
};

export default AppBarWithSignInSignUp;
