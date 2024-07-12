import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClientList from "../pages/clients/ClientList";
import ClientForm from "../pages/clients/ClientForm";
import { Routes } from "./CONSTANTS";
import LoginForm from "../pages/auth/LoginForm";
import CreadorForm from "../pages/usuario/CreadorForm";
import CreadorList from "../pages/usuario/CreadorList";
import SurtidorList from "../pages/surtidor/SurtidorList";
import SurtidorForm from "../pages/surtidor/SurtidorForm";
import BombaForm from "../pages/bomba/BombaForm";
import BombaList from "../pages/bomba/BombaList";
import TipoCombustibleForm from "../pages/tipocombustible/TipoCombustibleForm";
import TipoCombustibleList from "../pages/tipocombustible/TipoCombustibleList";
import VentaForm from "../pages/ventas/VentaForm";
import VentaList from "../pages/ventas/VentaList";

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
    path: Routes.CREADOR.LIST,
    element: <CreadorList />,
  },
  {
    path: Routes.CREADOR.CREATE,
    element: <CreadorForm />,
  },
  {
    path: Routes.CREADOR.EDIT,
    element: <CreadorForm />,
  },
  {
    path: Routes.SURTIDOR.LIST,
    element: <SurtidorList />,
  },
  {
    path: Routes.SURTIDOR.CREATE,
    element: <SurtidorForm />,
  },
  {
    path: Routes.SURTIDOR.EDIT,
    element: <SurtidorForm />,
  },
  {
    path: Routes.BOMBA.LIST,
    element: <BombaList />,
  },
  {
    path: Routes.BOMBA.CREATE,
    element: <BombaForm />,
  },
  {
    path: Routes.BOMBA.EDIT,
    element: <BombaForm />,
  },
  {
    path: Routes.AUTH.LOGIN,
    element: <LoginForm />,
  },
  {
    path: Routes.TIPOCOMBUSTIBLE.LIST,
    element: <TipoCombustibleList />,
  },
  {
    path: Routes.TIPOCOMBUSTIBLE.CREATE,
    element: <TipoCombustibleForm />,
  },
  {
    path: Routes.TIPOCOMBUSTIBLE.EDIT,
    element: <TipoCombustibleForm />,
  },
  {
    path: Routes.VENTA.LIST,
    element: <VentaList />,
  },
  {
    path: Routes.VENTA.CREATE,
    element: <VentaForm />,
  },
  {
    path: Routes.VENTA.EDIT,
    element: <VentaForm />,
  }
]);