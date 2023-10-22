import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Index from "./components/index";
import Cadastro from "./components/cadastro"
import ErrorPage from './components/ErrorPage';

// 1 - Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "cadastro",
        element: <Cadastro  />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);