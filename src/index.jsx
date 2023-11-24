import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Index from "./components/index"
import CadastroInicial from './components/cadastro-inicial'
import Cadastro from "./components/cadastro"
import LoginInicial from "./components/login-inicial"
import Login from "./components/login"

import FeedParceiro from './components/feed-parceiro'
import FeedDoacao from './components/feed/feed-doacao'
import FeedServico from './components/feed/feed-servicos'
import FeedHistorico from './components/feed/historico-servicos'
import MeusServicos from './components/feed/meus-servicos'
import ChatCliente from "./components/ChatCliente"
import ChatParceiro from './components/ChatParceiro'
import MeuPerfilCliente from './components/meu-perfil/cliente/MeuPerfilCliente'
import MeuPerfilParceiro from './components/meu-perfil/parceiro/MeuPerfilParceiro'

import CadastroServico from './components/cadastro-servico'

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
        path: "chat-cliente",
        element: <ChatCliente />
      },
      {
        path:"chat-parceiro",
        element: <ChatParceiro/>
      },
      {
        path: "historico",
        element: <FeedHistorico />
      },
      {
        path: "meus-servicos",
        element: <MeusServicos/>
      },
      {

        path: "cadastro-servico",
        element: <CadastroServico/>
      },
      {
        path: "feed-parceiro",
        element: <FeedParceiro/>
      },
      {
        path: "perfil-cliente",
        element: <MeuPerfilCliente />
      },
      {
        path: "perfil-parceiro",
        element: <MeuPerfilParceiro />

      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);