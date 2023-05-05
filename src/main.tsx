import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import InvCompras from "./screens/inventario/InvCompras";
import Menu from "./screens/Menu";
import Usuarios from "./screens/Usuarios";
import Perfiles from "./screens/Perfiles";
import UsuariosCrear from "./screens/UsuariosCrear";
import UsuariosPrueba from "./screens/UsuariosPrueba";
import InventariosAjustes from "./screens/inventarios/InventariosAjustes";
import Sucursales from "./screens/Sucursales";
import CrearInventario from "./screens/inventarios/CrearInventario";
import Proveedores from "./screens/Proveedores";
import ProveedoresCrear from "./screens/ProveedoresCrear";
import NominaTrabajadores from "./screens/NominaTrabajadores";
import NominaTrabajadoresCrear from "./screens/NominaTrabajadoresCrear";
import NominaTrabajadorBaja from "./screens/NominaTrabajadorBaja";
import Productos from "./screens/Productos";
import ProductosCrear from "./screens/ProductosCrear";
import NominaDepartamentos from "./screens/NominaDepartamentos";
import SucursalesCrear from "./screens/SucursalesCrear";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/UsuariosPrueba",
    element: <UsuariosPrueba />,
  },
  {
    path: "/UsuariosCrear",
    element: <UsuariosCrear />,
  },
  {
    path: "/InventariosAjustes",
    element: <InventariosAjustes />,
  },
  {
    path: "/Sucursales",
    element: <Sucursales />,
  },
  {
    path: "/SucursalesCrear",
    element: <SucursalesCrear />,
  },
  {
    path: "/CrearInventario",
    element: <CrearInventario />,
  },
  {
    path: "/Proveedores",
    element: <Proveedores />,
  },
  {
    path: "/ProveedoresCrear",
    element: <ProveedoresCrear />,
  },
  {
    path: "/NominaTrabajadores",
    element: <NominaTrabajadores />,
  },
  {
    path: "/NominaTrabajadoresCrear",
    element: <NominaTrabajadoresCrear />,
  },
  {
    path: "/NominaTrabajadorBaja",
    element: <NominaTrabajadorBaja />,
  },
  {
    path: "/Productos",
    element: <Productos />,
  },
  {
    path: "/ProductosCrear",
    element: <ProductosCrear />,
  },
  {
    path: "/NominaDepartamentos",
    element: <NominaDepartamentos />,
  },
  {
    path: "/Perfiles",
    element: <Perfiles />,
  },
  // {
  //   path: "/users",
  //   element: <Usuarios />,
  // },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
