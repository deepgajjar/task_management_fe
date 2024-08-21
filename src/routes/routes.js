import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import HomePage from "../pages/Home/HomePage";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import IssuedByMe from "../pages/Dashboard/IssuedByMe";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        // path: "/dashboard/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/issued-by-me",
        element: <IssuedByMe />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "/auth/signin",
        element: <Signin />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
]);
