import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/css/styleAll.css';

import Index from "./components/institucional/index"
import CadastroInicial from './components/institucional/cadastro-inicial'
import Cadastro from "./components/institucional/cadastro"
import LoginInicial from "./components/institucional/login-inicial"
import Login from "./components/institucional/login"

import FeedParceiro from './components/pagina-servico-prestador/feed-parceiro'
import FeedDoacao from './components/feed/feed-doacao'
import FeedServico from './components/feed/feed-servicos'
import FeedHistorico from './components/feed/historico-servicos'
import MeusServicos from './components/feed/meus-servicos'
import ChatCliente from "./components/chat/cliente/ChatCliente"
import ChatParceiro from './components/chat/parceiro/ChatParceiro'
import MeuPerfilCliente from './components/meu-perfil/cliente/MeuPerfilCliente'
import MeuPerfilParceiro from './components/meu-perfil/parceiro/MeuPerfilParceiro'

import CadastroServico from './components/cadastro-servico'
import CadastraEditaDoacao from './components/cadastra-edita-doacao'
import CadastroPet from "./components/pets/CadastroPet"

import ModalCadastroAvalicao from "./components/modais/ModalCadastrarAvaliacao"

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
        path: "home-cliente",
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
        path: "chat-parceiro",
        element: <ChatParceiro />
      },
      {
        path: "historico",
        element: <FeedHistorico />
      },
      {
        path: "meus-servicos",
        element: <MeusServicos />
      },
      {

        path: "cadastro-servico",
        element: <CadastroServico />
      },
      {
        path: "feed-parceiro",
        element: <FeedParceiro />
      },
      {
        path: "perfil-cliente",
        element: <MeuPerfilCliente />
      },
      {
        path: "perfil-parceiro",
        element: <MeuPerfilParceiro />

      },
      {
        path: "cadastra-edita-doacao",
        element: <CadastraEditaDoacao />
      },
      {
        path: "cadastro-pet",
        element: <CadastroPet />
      },
      {
        path: "cadastrar-avaliacao",
        element: <ModalCadastroAvalicao />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);