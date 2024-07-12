import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClientList from "../pages/clients/ClientList";
import ClientForm from "../pages/clients/ClientForm";
import { Routes } from "./CONSTANTS";
import LoginForm from "../pages/auth/LoginForm";
import RutaForm from "../pages/ruta/RutaForm";
import RutaList from "../pages/ruta/RutaList";
import ChoferList from "../pages/chofer/ChoferList";
import ChoferForm from "../pages/chofer/ChoferForm";
import CamionList from "../pages/camion/CamionList";
import CamionForm from "../pages/camion/CamionForm";

export const routerConfig = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.CLIENTS.LIST,
    element: <ClientList />,
  },
  {
    path: Routes.CLIENTS.CREATE,
    element: <ClientForm />,
  },
  {
    path: Routes.CLIENTS.EDIT,
    element: <ClientForm />,
  },
  {
    path: Routes.AUTH.LOGIN,
    element: <LoginForm />,
  },
  {
    path: Routes.RUTA.CREATE,
    element: <RutaForm />,
  },
  {
    path: Routes.RUTA.EDIT,
    element: <RutaForm />,
  },
  {
    path: Routes.RUTA.LIST,
    element: <RutaList />,
  },
  {
    path: Routes.CHOFER.LIST,
    element: <ChoferList />,
  },
  {
    path: Routes.CHOFER.CREATE,
    element: <ChoferForm />,
  },
  {
    path: Routes.CHOFER.EDIT,
  },
  {
    path: Routes.CAMION.LIST,
    element: <CamionList />,
  },
]);