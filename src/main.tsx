import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import InvCompras from "./screens/inventario/InvCompras";
import Menu from "./screens/Menu";

const DataRoutes = [
  {
    path: "/InvCompras",
    element: <InvCompras />
  }
]

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
    path: "/InvCompras",
    element: <InvCompras />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
