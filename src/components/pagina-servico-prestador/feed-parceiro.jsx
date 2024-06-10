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
import ModalAgendarServico from "../modais/ModalAgendarServico";


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
  const userId = sessionStorage.getItem("userId")
  const token = sessionStorage.getItem("token")
  const idParceiro = sessionStorage.getItem("idParceiroFeed")
  const logradouro = sessionStorage.getItem("cidadeParceiroFeed")
  const uf = sessionStorage.getItem("estadoParceiroFeed")
  const nome = sessionStorage.getItem("nomeParceiroFeed")
  const estrelas = 4.7
  const qtdServicos = sessionStorage.getItem("qtdServicosParceiroFeed")
  const descricao = "Descrição do parceiro"
  const servicos = sessionStorage.getItem("servicosParceiroFeed")
  const dataEntrada = sessionStorage.getItem("dataEntradaParceiroFeed")

  const [servicosParceiroList, setServicosList] = useState([]);


  const [avaliacaoMedia, setAvaliacaoMedia] = useState("");
  const [viewAvaliacao, setViewAvaliacao] = useState(false);
  const [servicoModal, setServicoModal] = useState(false);


  const [listaAvaliacoes, setListaAvaliacoes] = useState([]);
  const [parceiroInfo, setParceiroInfo] = useState({
    idUser: "",
    nome: "",
    dataEntrada: "",
    fichas: [""],
    maxDogs: 2,
    aceitaDogEspecial: false,
    aceitaDogIdoso: true,
    aceitaDogBravo: false,
    aceitaDogGrande: true,
    aceitaDogCio: false,
    descricao: ""
  });

  const enderecoLogado = sessionStorage.getItem("endereco");

  function avaliacaoTrue() {
    if (viewAvaliacao) {
      setViewAvaliacao(false)
    } else {
      setViewAvaliacao(true)
    }
  }

  const setDisplayFlex = () => {
    setServicoModal(true);
};

const setModelCancelar = () => {
    setServicoModal(false);
};

  useEffect(() => {
    listar();

    const intervalId = setInterval(() => {
      listar();
    }, 10 * 60 * 1000); // Ajuste para 10 minutos
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    woofJoyApi
      .get(`/parceiros/${idParceiro}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setParceiroInfo(response.data);
        console.log(response.data)
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }, [idParceiro, token]);

  function listar() {
    woofJoyApi
      .get(`/avaliacoes/parceiro/${idParceiro}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListaAvaliacoes(response.data);
        if (response.data.length > 0) {
          const somaNotas = response.data.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
          setAvaliacaoMedia((somaNotas / response.data.length).toFixed(2));
        } else {
          setAvaliacaoMedia("0");
        }
        console.log(response.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  useEffect(() => {
    listarServicos();

    const intervalId = setInterval(() => {
      listarServicos();
    }, 1 * 60 * 2000);

    return () => clearInterval(intervalId);
  }, []);

  function listarServicos() {
    woofJoyApi
      .get(`/ficha/parceiro/${idParceiro  }`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response.data);
        setServicosList(response.data);
      })
      .catch((erroOcorrido) => {
        console.log(userId);
        console.log("Servicos:" + erroOcorrido);
      });
  }


  function contatoDados() {
    sessionStorage.setItem("contatoName", nome);
    sessionStorage.setItem("contatoId", idParceiro);
  }

  return (
    <>
      {servicoModal === true && (
                        <ModalAgendarServico
                            idParceiro={idParceiro}
                            cancelarOn={() => setModelCancelar()}
                            parceiroWoofJoy={parceiroInfo.nome}
                        />
                    )}
      <div className="feed-parceiro-container">
        <MenuCliente />


        <img className="foto-perfil-image-feed" src={foto} alt="" />

        <section className="container-info-parceiro">
          <div className="conteudo-info-parceiro">
            <p className="nome-parceiro">{parceiroInfo.nome}</p>

            <div className="conteudo-local-data-avaliacao">
              <div className="local">
                <span className="icon-local">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <span className="txt-local">
                  <p>
                    <b>{enderecoLogado}</b>
                  </p>
                </span>
              </div>
              <div className="data">
                <span className="icon-data">
                  <i className="bi bi-calendar3"></i>
                </span>
                <span className="txt-data">
                  <p>
                    <b>Desde {parceiroInfo.dataEntrada}</b>
                  </p>
                </span>
              </div>
              <div className="avaliacao">
                <span className="icon-avaliacao">
                </span>
                <span className="txt-avaliacao">
                  <p>
                    <b>{avaliacaoMedia}★</b>
                  </p>
                </span>
              </div>
              <div className="avaliacao">
                <span className="icon-avaliacao">
                </span>
                <span className="txt-avaliacao">
                  <p>
                  <button className='modal-avaliacao-btn-enviar-avaliacao' onClick={() => setDisplayFlex()}>Agendar Servico</button>
                  </p>
                </span>
              </div>

            </div>
            <div className="txt-apresentacao">
              <p>
                {parceiroInfo.descricao}
              </p>
            </div>
          </div>
        </section>

        <section className="carrossel-servicos">
          <div className="conteudo-servicos">
            <div className="info-servicos-prestados">
              <p className="teste-servico">Serviços</p>
              <div className="tipo-servicos">
                <div className="dog-walker">

                  {servicosParceiroList.map((ficha) => {
                    if (ficha.tipoServico === "Dog Walker") {
                      return (
                        <>
                          <img className="feed-parceiro-img" src={IconDogWalker} alt="icon dog walker"></img>

                          <div className="dog-walker-txt" key={ficha.id}>
                            <div className="titulo">Dog Walker</div>
                            <p>R$ {ficha.valor}</p>
                            <p>Qtd. Serviços Prestados: {ficha.qtdServico}</p>
                          </div>
                        </>
                      );
                    }
                    return null; // Retorna null para não renderizar nada se a ficha não corresponder
                  })}
                </div>

                <div className="dog-sitter">
                  {servicosParceiroList.map((ficha) => {
                    if (ficha.tipoServico === "Dog Sitter") {
                      return (
                        <>
                          <img className="feed-parceiro-img" src={IconDogSitter} alt="icon dog sitter"></img>

                          <div className="dog-sitter-txt" key={ficha.id}>
                            <div className="titulo">Dog Sitter</div>
                            <p>R$ {ficha.valor}</p>
                            <p>Qtd. Serviços Prestados: {ficha.qtdServico}</p>
                          </div>
                        </>

                      );
                    }
                    return null; // Retorna null para não renderizar nada se a ficha não corresponder
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="observacoes">
          <p className="titulo-obs-acom">Observacões</p>
          <div className="todas-observacoes">
            <div className="obs-1">
              <TipoAtendimento icon={IconDoisPet} descricao={["Permitido até dois Pets"]}
                icon2={IconPetEspecial} descricao2={["Cuida de pets especiais"]} />
            </div>

            <div className="obs-2">
              <TipoAtendimento icon={IconDogIdoso} descricao={["Aceita Pet idoso"]}
                icon2={IconPetBravo} descricao2={["Aceita pet bravo"]} />
            </div>

            <div className="obs-3">
              <TipoAtendimento icon={IconDogIdoso} descricao={["Aceita pet grande porte"]}
                icon2={IconFemeaCio} descricao2={["Aceita fêmea no cio"]} />
            </div>
          </div>
        </section>

        <section className="acomodacao">
          <p className="titulo-obs-acom">Acomodação</p>
          <div className="todas-acomodacoes">
            <div className="acom-1">
              <TipoAtendimento icon={IconCasa} descricao={["Mora em Casa"]}
                icon2={IconAreaExterna} descricao2={["Tem Área externa"]} />
            </div>

            <div className="acom-2">
              <TipoAtendimento icon={IconTemAnimais} descricao={["Tem animais em casa"]}
                icon2={IconCrianca} descricao2={["Não tem crianças em casa"]} />
            </div>

            <div className="acom-3">
              <TipoAtendimento icon={IconRotasFuga} descricao={["Sem rotas de fuga"]}
                icon2={IconSobeSofa} descricao2={["Pode subir no sofá"]}
              />
            </div>
          </div>
        </section>

        <section className="feed-avaliacoes-container">
          <button className='modal-avaliacao-btn-enviar-avaliacao' onClick={() => avaliacaoTrue()}>Ver Avaliações</button>
          {viewAvaliacao && (
            <div className="card-avaliacoes">
              {listaAvaliacoes.length > 0 ? (
                listaAvaliacoes.map((avaliacao) => (
                  <Avaliacao
                    key={avaliacao.id}
                    clienteNome={avaliacao.nomeCliente}
                    nota={avaliacao.nota}
                    comentario={avaliacao.comentario}
                  />
                ))
              ) : (
                <p>O Parceiro ainda não foi avaliado.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default FeedParceiro;
