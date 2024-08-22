import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppHeader from "../components/Common/AppHeader";
import { Box } from "@mui/material";
import { setCreateNewTicketModalFalg } from "../store/slices/flagSlice";
import { useDispatch } from "react-redux";
import { useLazyGetCurrentUserInfoQuery } from "../store/Api/Auth";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [getUserInfo, { data: userInfo, isLoading }] =
    useLazyGetCurrentUserInfoQuery();
  useEffect(() => {
    getUserInfo();
  }, []);

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
      title: "My Tasks",
      clickHandler: () => navigate("/dashboard"),
    },
    {
      title: "All Tasks",
      clickHandler: () => navigate("/dashboard/all-tasks"),
    },
    {
      title: "New task",
      clickHandler: () => dispatch(setCreateNewTicketModalFalg(true)),
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
        userName={userInfo?.userName}
      />
      <Box
        sx={{
          mt: "64px",
          display: "flex",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
