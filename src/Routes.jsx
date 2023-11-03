import { useRoutes, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Game } from "./pages/Game";
import { Error } from "./pages/Error";

export const Routes = () => {
  const isSignedIn = JSON.parse(localStorage.getItem("isSignedIn")) ?? false;

  const allRoutes = [
    {
      path: "/signup",
      element: !isSignedIn ? <SignUp /> : <Navigate to="/" />,
    },
    {
      path: "/login",
      element: !isSignedIn ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/",
      element: isSignedIn ? <Game /> : <Navigate to="/" />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];

  return useRoutes(allRoutes);
};
