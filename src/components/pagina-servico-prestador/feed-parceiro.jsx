import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import MenuCliente from "../componentes-gerais/MenuCliente.jsx";
import BootstrapCarousel from '../componentes-gerais/carrossel.jsx'
import Avaliacao from './feed-parceiro-card-avaliacoes.jsx'
import "../../css/react-feed-parceiro.css";
import ImgParceiro from '../../imgs/feed-parceiro/foto-colaborador.png'
import ImgDamares from '../../imgs/feed-parceiro/foto-damares.png'
import ImgRichard from '../../imgs/feed-parceiro/foto-richard.png'
import ImgLucca from '../../imgs/feed-parceiro/foto-lucca.png'
import chat from "../../imgs/meus-servicos/icon-chat.png"
import foto from "../../imgs/mock/semfoto.jpg";


import IconDogWalker from '../../imgs/feed-parceiro/icon-dog-walker.png'
import IconDogSitter from '../../imgs/feed-parceiro/icon-dog-sitter.png'

import TipoAtendimento from './feed-parceiro-tipo-atendimento.jsx'

import IconDoisPet from '../../imgs/feed-parceiro/icon-two-pet.png'
import IconPetEspecial from '../../imgs/feed-parceiro/icon-pet-especial.png'
import IconDogIdoso from '../../imgs/feed-parceiro/icon-dog-idoso.png'
import IconPetBravo from '../../imgs/feed-parceiro/icon-dog-bravo.png'
import IconGrandePorte from '../../imgs/feed-parceiro/icon-dog-grande.png'
import IconFemeaCio from '../../imgs/feed-parceiro/icon-dog-femea.png'

import IconCasa from '../../imgs/feed-parceiro/icon-dog-mora-em-casa.png'
import IconAreaExterna from '../../imgs/feed-parceiro/dog-area-externa.png'
import IconTemAnimais from '../../imgs/feed-parceiro/icon-dog-tem-animal.png'
import IconCrianca from '../../imgs/feed-parceiro/icon-dog-sem-crianca.png'
import IconRotasFuga from '../../imgs/feed-parceiro/icon-dog-sem-fuga.png'
import IconSobeSofa from '../../imgs/feed-parceiro/icon-dog-sobe-sofa.png'
import { Link } from "react-router-dom";


function FeedParceiro() {

  /*COMPONENTE ATENDIMENTO*/

  const iconDoisPet = IconDoisPet;
  const iconPetEspecial = IconPetEspecial;
  const iconDogIdoso = IconDogIdoso;
  const iconDogBravo = IconPetBravo;
  const iconDogGrande = IconGrandePorte;
  const iconFemeaCio = IconFemeaCio;

  const iconCasa = IconCasa;
  const iconAreaExterna = IconAreaExterna;
  const iconTemAnimais = IconTemAnimais;
  const iconCrianca = IconCrianca;
  const iconRotasFuga = IconRotasFuga;
  const iconSobeSofa = IconSobeSofa;


  const doisPets = ["Permitido até dois Pets"]
  const petEspecial = ["Cuida de pets especiais"]
  const petIdoso = ["Aceita Pet idoso"]
  const petBravo = ["Aceita pet bravo"]
  const petGrande = ["Aceita pet grande porte"]
  const petCio = ["Não aceita fêmea no cio"]

  const petCasa = ["Mora em casa"]
  const petAreaExterna = ["Possui área externa"]
  const petTemAnimais = ["Tem animais"]
  const petCrianca = ["Não tem crianças"]
  const petRotasFuga = ["Sem rotas de fuga"]
  const petsSobeSofa = ["Pode subir no sofá"]

  /*COMPONENTE AVALIACAO*/
  const imgDamares = ImgDamares;
  const clienteNome1 = ["Damares Oliveira"]
  const descricaoServico1 = ["5,0 - Serviço utilizado:  Dog Walker"]
  const descricaoAvaliacao1 = ["Adorei o atendimento dele, o meu cachorro se sentiu muito confortável"]

  const imgRichard = ImgRichard;
  const clienteNome2 = ["Damares Oliveira"]
  const descricaoServico2 = ["4,0 - Serviço utilizado:  Dog Walker"]
  const descricaoAvaliacao2 = ["Bom. O meu pet chegou em casa muito bem"]

  const imgLucca = ImgLucca;
  const clienteNome3 = ["Damares Oliveira"]
  const descricaoServico3 = ["5,0 - Serviço utilizado:  Dog Walker"]
  const descricaoAvaliacao3 = ["Adorei o atendimento dele, meu pet fica muito feliz com os passeios e a plataforma achei pratica"]

  const userId = sessionStorage.getItem("userId")
  const token = sessionStorage.getItem("token")
  const idParceiro = sessionStorage.getItem("idParceiroFeed")
  const logradouro = sessionStorage.getItem("cidadeParceiroFeed")
  const uf = sessionStorage.getItem("estadoParceiroFeed")
  const nome = sessionStorage.getItem("nomeParceiroFeed")
  const estrelas = 4.7
  const qtdServicos =sessionStorage.getItem("qtdServicosParceiroFeed")
  const descricao = "Descrição do parceiro"
  const servicos = sessionStorage.getItem("servicosParceiroFeed")
  const dataEntrada = sessionStorage.getItem("dataEntradaParceiroFeed")


  function getInfoPrestador() {
    woofJoyApi
        .put(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
        })
        .catch((erroOcorrido) => {
            console.log(erroOcorrido.mensagem);
        });
}

function contatoDados() {
  sessionStorage.setItem("contatoName", nome);
  sessionStorage.setItem("contatoId", idParceiro);
}


  return (
    <>
      <div className="feed-parceiro-container">
        < MenuCliente />
        <Link to={"/chat-cliente"} onClick={() => contatoDados()} className="footer-feed">
        <img className="icon-chat-historico-servicos" src={chat} alt="icon-chat" />
        </Link>

        <section className="container-info-parceiro">
          <img className="feed-parceiro-img" src={ImgParceiro} alt="imagem do parceiro"></img>
          <div className="conteudo-info-parceiro">
            <p className="nome-parceiro">{nome}</p>

            <div className="conteudo-local-data-avaliacao">
              <div className="local">
                <span className="icon-local">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <span className="txt-local">
                  <p>
                    <b>{logradouro}, {uf}</b>
                  </p>
                </span>
              </div>
              <div className="data">
                <span className="icon-data">
                  <i className="bi bi-calendar3"></i>
                </span>
                <span className="txt-data">
                  <p>
                    <b>Desde {dataEntrada}</b>
                  </p>
                </span>
              </div>
              <div className="avaliacao">
                <span className="icon-avaliacao">
                  <i className="bi bi-star-fill"></i>
                </span>
                <span className="txt-avaliacao">
                  <p>
                    <b>{estrelas}</b>
                  </p>
                </span>
              </div>
            </div>
            <div className="txt-apresentacao">
              <p>
                {descricao}
              </p>
            </div>
        
          
          </div>
        </section>

        <section className="carrossel-servicos">
          <div className="conteudo-carrossel">
            <div className="carrossel">
              <BootstrapCarousel />
            </div>

          </div>

          <div className="conteudo-servicos">
            <div className="info-servicos-prestados">
              <p className="teste-servico">Serviços</p>
              <p className="txt-descricao-servico">Qtd. Serviços Prestados: {qtdServicos}</p>
              <div className="tipo-servicos">
                <div className="dog-walker">
                  <img className="feed-parceiro-img" src={IconDogWalker} alt="icon dog walker"></img>
                  <div className="dog-walker-txt">
                    <div className="titulo">Dog Walker</div>
                    <p>R$ 60,00 / Passeio</p>
                    <p>Duração: 40min</p>
                  </div>
                </div>

                <div className="dog-sitter">
                  <img className="feed-parceiro-img" src={IconDogSitter} alt="icon dog sitter"></img>
                  <div className="dog-sitter-txt">
                    <div className="titulo">Dog Sitter</div>
                    <p>R$ 20,00 / Hora</p>
                    <p>Receber o Pet na Resid.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="observacoes">
          <p className="titulo-obs-acom">Observacões</p>
          <p className="txt-obs-acom">(vale para os dois serviços)</p>
          <div className="todas-observacoes">

            <div className="obs-1">
              < TipoAtendimento icon={iconDoisPet} descricao={doisPets}
                icon2={iconPetEspecial} descricao2={petEspecial} />
            </div>

            <div className="obs-2">
              < TipoAtendimento icon={iconDogIdoso} descricao={petIdoso}
                icon2={iconDogBravo} descricao2={petBravo} />
            </div>

            <div className="obs-3">
              < TipoAtendimento icon={iconDogGrande} descricao={petGrande}
                icon2={iconFemeaCio} descricao2={petCio} />
            </div>

          </div>
        </section>

        <section className="acomodacoes">
          <p className="titulo-obs-acom">Acomodação </p>
          <p className="txt-obs-acom">(Só no caso de pet sitter)</p>
          <div className="todas-acomodacoes">
            <div className="acom-4">
              < TipoAtendimento icon={iconCasa} descricao={petCasa}
                icon2={iconAreaExterna} descricao2={petAreaExterna} />
            </div>

            <div className="acom-5">
              < TipoAtendimento icon={iconTemAnimais} descricao={petTemAnimais}
                icon2={iconCrianca} descricao2={petCrianca} />
            </div>

            <div className="acom-6">
              < TipoAtendimento icon={iconRotasFuga} descricao={petRotasFuga}
                icon2={iconSobeSofa} descricao2={petsSobeSofa} />
            </div>
          </div>
        </section>
        <div className="avaliacoes">
          <p className="titulo-avaliacao">Avaliações</p>
          <div className="avaliacao-um">
            < Avaliacao imagem={imgDamares} clienteNome={clienteNome1}
              descricaoServico={descricaoServico1} descricaoAvaliacao={descricaoAvaliacao1} />
          </div>

          <div className="avaliacao-dois">
            < Avaliacao imagem={imgRichard} clienteNome={clienteNome2}
              descricaoServico={descricaoServico2} descricaoAvaliacao={descricaoAvaliacao2} />
          </div>
          <div className="avaliacao-tres">
            < Avaliacao imagem={imgLucca} clienteNome={clienteNome3}
              descricaoServico={descricaoServico3} descricaoAvaliacao={descricaoAvaliacao3} />
          </div>

        </div>
      </div>
    </>
  );
}
export default FeedParceiro;
