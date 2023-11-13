import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Index from "./components/index"
import CadastroInicial from './components/cadastro-inicial'
import Cadastro from "./components/cadastro"
import LoginInicial from "./components/login-inicial"
import Login from "./components/login"

import FeedDoacao from './components/feed/feed-doacao'
import FeedServico from './components/feed/feed-servicos'
import FeedHistorico from './components/feed/historico-servicos'
import MeusServicos from './components/feed/meus-servicos'
import Chat from "./components/Chat"

//-------------------IMPORT ERROR PAGE------------------------
import ErrorPage from './components/ErrorPage'

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
        element: <Cadastro />
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
        path: "home",
        element: <FeedServico />
      },
      {
        path: "doacao",
        element: <FeedDoacao />
      },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "historico",
        element: <FeedHistorico />
      },
      {
        path: "meus-servicos",
        element: <MeusServicos/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);