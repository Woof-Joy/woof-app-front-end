import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import MenuCliente from "../componentes-gerais/MenuCliente.jsx";
import BootstrapCarousel from '../componentes-gerais/carrossel.jsx'
import Avaliacao from './feed-parceiro-card-avaliacoes.jsx'
import Button from "../componentes-gerais/button";

import "../../css/react-feed-parceiro.css";
import ImgParceiro from '../../imgs/feed-parceiro/foto-colaborador.png'
import ImgDamares from '../../imgs/feed-parceiro/foto-damares.png'
import ImgRichard from '../../imgs/feed-parceiro/foto-richard.png'
import ImgLucca from '../../imgs/feed-parceiro/foto-lucca.png'
import chat from "../../imgs/meus-servicos/icon-chat.png"
import foto from "../../imgs/mock/semfoto.jpg";
import ModalAgendarServico from "../modais/ModalAgendarServico";

import ModalPagamento from "../modais/ModalPagamento.jsx"

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
import { ToastContainer, toast } from 'react-toastify'
import BotaoUpload from "../componentes-gerais/BotaoUpload"


function MenuParceiro() {
  const userId = sessionStorage.getItem("userId")
  const email = sessionStorage.getItem("email")
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

  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [editarPerfil, setEditarPerfil] = useState(true);
  const [nomeButton, setNomeButton] = useState(false);

  const handleInputChangeObservacao = (event) => {
    const { name, value } = event.target;
    setPutObservacoesBody({
      ...putObservacoesBody,
      [name]: value
    });
  };



  function pagamentoOnModal() {
    setMostrarPagamento(true);
  }

  function pagamentoOffModal() {
    setMostrarPagamento(false);
  }

  function deixarInputsEditaveus() {
    if (editarPerfil == false) {
      setEditarPerfil(true)
    } else {
      setEditarPerfil(false)
    }

  }


  const [listaAvaliacoes, setListaAvaliacoes] = useState([]);



  const [putFichaBody, setPutFichaBody] = useState({
    idParceiro: userId,
    tipoServico: "Dog Sitter",
    valor: ""
  })

  const [putNome, setPutNome] = useState({
    nome: "",
    sobrenome: "",
    email: email
  })

  const [putObservacoesBody, setPutObservacoesBody] = useState({
    aceitaDogEspecial: "",
    aceitaDogIdoso: "",
    aceitaDogBravo: "",
    aceitaDogGrande: "",
    aceitaDogCio: "",
  })

  const [postFichaBody, setFichaBodyPost] = useState({
    idParceiro: userId,
    tipoServico: "",
    valor: ""

  })


  const [parceiroInfo, setParceiroInfo] = useState({
    idUser: "",
    idParceiro: "",
    nome: "",
    dataEntrada: "",
    fichas: [""],
    maxDogs: 2,
    aceitaDogEspecial: false,
    aceitaDogIdoso: true,
    aceitaDogBravo: false,
    aceitaDogGrande: true,
    aceitaDogCio: false,
    descricao: "",
    imgParceiro: ""
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
    listarDados()

    const intervalId = setInterval(() => {
      listar();
      listarDados()
    }, 10 * 60 * 100); // Ajuste para 10 minutos
    return () => clearInterval(intervalId);
  }, []);

  function listarDados() {
    woofJoyApi
      .get(`/parceiros/${userId}`, {
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
  };

  function listar() {
    woofJoyApi
      .get(`/avaliacoes/parceiro/${parceiroInfo.idParceiro}`, {
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
      .get(`/ficha/parceiro/${userId}`, {
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

  function putFicha(valorPassado, tipoServicoPassado) {

  
    setFichaBodyPost({
      valor: valorPassado,
      tipoServico: tipoServicoPassado,

    })

    woofJoyApi
      .put(`/ficha/parceiro/${userId}`, postFichaBody, {
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

  function putObservacoes() {
    woofJoyApi
      .put(`/parceiros//${userId}`, postFichaBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response.data);
        setPutObservacoesBody(response.data)
      })
      .catch((erroOcorrido) => {
        alert("erro no put de observacoes")
        console.log(userId);
        console.log("Servicos:" + erroOcorrido);
      });
  }


  function putValidacao() {
    woofJoyApi
      .put(`/api/users/${userId}`, putNome, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPutNome(response.data);
        console.log(response.data)
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
        alert("erro no put cadastral")

      });
  };


  function save() {
    putValidacao()
    putObservacoes()
    putFicha()
    listarServicos()
    listarDados()
  }



  function contatoDados() {
    sessionStorage.setItem("contatoName", nome);
    sessionStorage.setItem("contatoId", idParceiro);
  }

  const uploadImg = (file) => {
    const formData = new FormData();

    formData.append('file', file);

    woofJoyApi
      .post(`/img/upload/perfil`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        //RECARREGANDO A PÁGINA PARA A FOTO MUDAR
        window.location.reload(true);
      })
      .catch((erro) => {
        console.log(erro)
        // alert(`Erro ao salvar a imagem: ${erro.message}`);
        toast.error('Falha no upload')
      });
  };

  return (
    <>
      {mostrarPagamento && (

        <ModalPagamento
          nomeUsuario={nome}
          onClose={pagamentoOffModal}

        />
      )}

      {/* {mostrarPagamento ? (

<ModalPagamento
  nomeUsuario={nome}
  onClose={pagamentoOffModal}

/>
) : (
<>teste</>
)} */}

      <div className="feed-parceiro-container">
        <MenuCliente />

        <div>
          <img className="foto-perfil-image-feed" src={parceiroInfo.imgParceiro} alt="" />
          <BotaoUpload onUpload={uploadImg} />
        </div>
        <section className="container-info-parceiro">
          <div className="conteudo-info-parceiro">
            <div className="cadastrar-menu-parceiro">
              <input className="nome-parceiro i-menu" disabled={editarPerfil} value={parceiroInfo.nome} />
              <input className="nome-parceiro i-menu" disabled={editarPerfil} value={putNome.email} />
              <Button
                buttonName={"Editar"}
                fontColor={"white"}
                buttonBackColor={"#DB4B90"}
                textShadow={"black"}
                buttonWidth={"100%"}
                buttonHeight={"20%"}
                padding={"20px"}
                cursor={"auto"}
                onClick={() => deixarInputsEditaveus()}
              />
              {!editarPerfil && (

                <Button
                  buttonName={"Salvar"}
                  fontColor={"white"}
                  buttonBackColor={"#DB4B90"}
                  textShadow={"black"}
                  buttonWidth={"100%"}
                  buttonHeight={"20%"}
                  padding={"20px"}
                  cursor={"auto"}
                  onClick={() => save()}
                />
              )}
            </div>

            <div className="conteudo-local-data-avaliacao">
              <div className="local">
                <span className="icon-local">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <span className="txt-local">
                  <p>
                    <b><input className="i-menu" type="text" value={enderecoLogado} /></b>
                  </p>
                </span>
              </div>
              <div className="avaliacao">
                <span className="icon-avaliacao">
                </span>
                <span className="txt-avaliacao-menu">
                  <p>
                    <b className="media-avaliacao-menu-parceiro" >Sua média avaliativa {avaliacaoMedia}★</b>
                  </p>
                </span>
              </div>



            </div>
            <div className="txt-apresentacao">
              <p>
                <input className="i-menu" type="text" disabled={editarPerfil} value={parceiroInfo.descricao} />
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
                            <div className="titulo">Dog Walker
                              {!editarPerfil && (

                                <Button
                                  buttonName={"Salvar"}
                                  fontColor={"white"}
                                  buttonBackColor={"#DB4B90"}
                                  textShadow={"black"}
                                  buttonWidth={"100%"}
                                  buttonHeight={"20%"}
                                  padding={"20px"}
                                  cursor={"auto"}
                                  onClick={() => putFicha("valorDogWalker.value", "Dog Walker")}
                                />
                              )}
                            </div>
                            <p>R$ <input id="valorDogWalker" className="i-menu" type="text" disabled={editarPerfil} value={ficha.valor} /></p>
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
                          <img className="feed-parceiro-img" src={IconDogSitter} alt="icon dog sitter" />

                          <div className="dog-sitter-txt" key={ficha.id}>
                            <div className="titulo">Dog Sitter
                              {!editarPerfil && (
                                <Button
                                  buttonName={"Salvar"}
                                  fontColor={"white"}
                                  buttonBackColor={"#DB4B90"}
                                  textShadow={"black"}
                                  buttonWidth={"100%"}
                                  buttonHeight={"20%"}
                                  padding={"20px"}
                                  cursor={"auto"}
                                  onClick={() => putFicha("valorDogSitter.value", "Dog Sitter")}
                                />
                              )}                            </div>
                            <>
                              <p>R$ <input id="valorDogSitter" name="valorDogSitter" className="i-menu" key="valorDogSitter" type="text" disabled={editarPerfil} value={ficha.valor} /></p>
                              <p>Qtd. Serviços Prestados: {ficha.qtdServico}</p>
                            </>
                          </div>
                        </>
                      );
                    }
                    return null;
                  })}

                </div>

              </div>
            </div>
            <div className="feed-p-edit-btn-pgto">
              <p>Seja<span className="feed-p-edit-pgto-bold"> premium</span> na Woof Joy:</p>
              <button onClick={() => pagamentoOnModal()} className="feed-p-edit-pgto-btn-confira">Confira</button>
            </div>
          </div>
        </section>

        <p className="titulo-obs-acom" value={parceiroInfo.aceitaDogBravo}></p>
        <section className="acomodacao">
          <div className="todas-acomodacoes">
            <div className="obs obs-condicional">
              <TipoAtendimento icon={IconPetEspecial} descricao={["Aceita pet especiais"]} /> parceiroInfo 
              <input type="checkbox" name="aceitaDogEspecial" onChange={handleInputChangeObservacao} disabled={editarPerfil} checked={parceiroInfo.aceitaDogEspecial? true : false}/>
            </div>

            <div className="obs obs-condicional">
              <TipoAtendimento icon={IconPetBravo} descricao={["Aceita pet bravo"]} />
              <input type="checkbox" name="aceitaDogBravo" onChange={handleInputChangeObservacao} disabled={editarPerfil} />

            </div>

            <div className="obs obs-condicional">
              <TipoAtendimento icon={IconCasa} descricao={["Aceita Pet idoso"]} />
              <input type="checkbox" name="aceitaDogIdoso" onChange={handleInputChangeObservacao} disabled={editarPerfil} />
            </div>
          </div>


          <div className="todas-acomodacoes">

            <div className="obs  obs-condicional">
              <TipoAtendimento icon={IconDogIdoso} descricao={["Aceita pet grande porte"]} />
              <input type="checkbox" name="aceitaDogGrande" onChange={handleInputChangeObservacao} disabled={editarPerfil} />
            </div>

            <div className="obs obs-condicional">
              <TipoAtendimento icon={IconFemeaCio} descricao={["Aceita fêmea no cio"]} />
              <input type="checkbox" name="aceitaDogCio" onChange={handleInputChangeObservacao} disabled={editarPerfil} />

            </div>

          </div>


        </section >

        <section className="acomodacao">
          <div className="todas-acomodacoes">

          </div>
        </section >

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
      </div >
    </>
  );
}

export default MenuParceiro;
