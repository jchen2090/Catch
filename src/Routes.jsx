import { useRoutes, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Game } from "./pages/Game";
import { Error } from "./pages/Error";
import { useAuth } from "./hooks/useAuth";

export const Routes = () => {
  const cachedIsSignedIn = JSON.parse(localStorage.getItem("isSignedIn")) ?? false;
  const { user } = useAuth();
  const isSignedIn = cachedIsSignedIn || user !== null;

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
      element: isSignedIn ? <Game /> : <Navigate to="/login" />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];

  return useRoutes(allRoutes);
};
