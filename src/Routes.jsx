import { useRoutes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Game } from "./pages/Game";
import { Error } from "./pages/Error";

export const Routes = () => {
  const allRoutes = [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Game />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];

  return useRoutes(allRoutes);
};
