import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Routes } from "./CONSTANTS";
import LoginForm from "../pages/auth/LoginForm";


export const routerConfig = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.AUTH.LOGIN,
    element: <LoginForm />,
  }
]);