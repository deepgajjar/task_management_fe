import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const headerRightBtn = [
    {
      title: "Logout",
      clickHandler: () => {
        window.localStorage.removeItem("token");
        navigate("/auth/signin");
      },
    },
  ];
  const headerLeftBtns = [
    {
      title: "My assignments",
      clickHandler: () => navigate("/dashboard"),
    },
    {
      title: "Issued by me",
      clickHandler: () => navigate("/dashboard/issued-by-me"),
    },
    {
      title: "New task",
      clickHandler: () => {},
    },
  ];
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!!!token) navigate("/auth/signin");
  }, []);

  return (
    <>
      <AppHeader
        headerRightBtns={headerRightBtn}
        headerLefttBtns={headerLeftBtns}
      />
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
