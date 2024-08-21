import React from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";

const AppBarWithSignInSignUp = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <AppHeader headerRightBtns={headerBtn} />
    </>
  );
};

export default AppBarWithSignInSignUp;
