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
import FeedParceiroEdit from './components/pagina-servico-prestador/menu-parceiro';
import FeedDoacao from './components/feed/feed-doacao'
import FeedServico from './components/feed/feed-servicos'
import MeusServicos from './components/feed/meus-servicos'
import HistoricoClienteServicos from './components/feed/historico-cliente-servicos'
import Chat from "./components/chat/cliente/Chat"
import MeuPerfilCliente from './components/meu-perfil/cliente/MeuPerfilCliente'
import MeuPerfilParceiro from './components/meu-perfil/parceiro/MeuPerfilParceiro'

import CadastroServico from './components/cadastro-servico'
import CadastraEditaDoacao from './components/cadastra-edita-doacao'
import PublicacaoDoacao from './components/publicacao-doacao'
import CadastroPet from "./components/pets/CadastroPet"

import ModalCadastroAvalicao from "./components/modais/ModalCadastrarAvaliacao"
import ModalCadastrarRelatorio from './components/modais/ModalCadastrarRelatorio';
import ModalLeituraRelatorio from "./components/modais/ModalLeituraRelatorio"
import ModalPagamento from "./components/modais/ModalPagamento"

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
        path: "chat",
        element: <Chat />
      },
      {
        path: "meus-servicos",
        element: <MeusServicos />
      },
      {
        path: "historico-servicos-cliente",
        element: <HistoricoClienteServicos />
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
        path: "feed-parceiro-edit",
        element: <FeedParceiroEdit />
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
        
        path: "publicacao-doacao",
        element: <PublicacaoDoacao />
      },
      {
        path: "cadastrar-avaliacao",
        element: <ModalCadastroAvalicao />
      },
      {
        path: "cadastrar-relatorio",
        element: <ModalCadastrarRelatorio/>
      },
      {
        path: "visualizar-relatorio",
        element: <ModalLeituraRelatorio />

      },
      {
        path: "pagamento",
        element: <ModalPagamento />

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);