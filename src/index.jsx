import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Index from "./components/index"
import CadastroInicial from './components/cadastro-inicial'
import Cadastro from "./components/cadastro"
import LoginInicial from "./components/login-inicial"
import Login from "./components/login"
import HomeCliente from "./components/tela-provisoria-home"
import ErrorPage from './components/ErrorPage'
import CadastroServico from './components/cadastro-servico'

// 1 - Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
        path: "cadastro-inicial",
        element: <CadastroInicial />
      },
      {
        path: "cadastro",
        element: <Cadastro  />
      },
      {
        path: "login-inicial",
        element: <LoginInicial />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "home-cliente",
        element: <HomeCliente />
      },
      {
        path: "cadastro-servico",
        element: <CadastroServico />
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);