// import { Button } from "@mui/material";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { decrement, increment } from "../../store/slices/counterSlice";
import AppHeader from "../../components/common/AppHeader";
import AppBarWithSignInSignUp from "../../components/common/AppBarWithSignInSignUp";

const HomePage = () => {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  // const location = useLocation();
  // const navigation = useNavigate();
  return (
    <>
     <AppBarWithSignInSignUp />
    </>
  );
};

export default HomePage;
