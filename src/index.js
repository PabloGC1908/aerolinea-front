import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserPage from "./pages/UserPage";
import VuelosPage from "./pages/VuelosPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import VueloDetailPage from "./pages/VueloDetailPage";
import PagoPage from "./pages/PagoPage";
import ModVueloPage from "./pages/ModVueloPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/user",
    element: <UserPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/vuelos",
    element: <VuelosPage />,
  },
  {
    path: "/vuelos/:idVuelo",
    element : <VueloDetailPage />
  },
  {
    path: "/vuelos/:idVuelo/pago",
    element: <PagoPage />
  },
  {
    path: "/add-vuelo",
    element: <ModVueloPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
