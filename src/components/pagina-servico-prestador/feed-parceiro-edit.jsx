import React, { useEffect, useState, useRef } from "react";
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
import IconEditar from "../../imgs/meu-perfil/icon-editar.png"
import BotaoUpload from "../componentes-gerais/BotaoUpload"

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

    const fileUploadRef = useRef(null);
    const [imagensCarrossel, setImagensCarrossel] = useState([])

    const [parceiroInfo, setParceiroInfo] = useState({
        id: 1,
        idUser: 2,
        nome: "Natan",
        sobrenome: "Viado",
        email: "N@N",
        dataNasc: "2024-04-25",
        dataEntrada: "2024-04-26",
        estrelas: null,
        qtdServicosPrestados: 0,
        servicos: [],
        idUsuario: 2
    })

    const [ficha, setFicha] = useState({
        idParceiro: userId,
        tipoServico: "",
        valor: ""
    })

    woofJoyApi
        .get(`/parceiros/${idParceiro}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then((response) => {
            setParceiroInfo(response.data);
            console.log(response.data)
            //alert(response.status)
        })
        .catch((erroOcorrido) => {
            console.log(erroOcorrido);
        });

    woofJoyApi
        .get(`/ficha`, ficha, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setParceiroInfo(response.data);
            console.log(response.status)
        })
        .catch((erroOcorrido) => {
            console.log(erroOcorrido);
        });

    // ------------ 
    //FUNÇÕES P/ HABILITAR CADASTRO/EDIÇÃO DA PÁGINA DE SERVIÇO 
    //(VISÃO PARCEIRO)
    const [inputsEnabled, setInputsEnabled] = useState(false);

    const [inputValues, setInputValues] = useState({
        inputValorPasseioDW: '',
        inputDuracaoPasseioDW: '',
        inputValorHoraDS: ''
    });

    const [editing, setEditing] = useState(false);

    const toggleInputs = () => {
        setInputsEnabled(!inputsEnabled);
        setEditing(!editing);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleFichaChange = (event) => {
        const { name, value } = event.target;
        setFicha({ ...ficha, [name]: value });
    };

    const inputStyle = {
        ...(inputsEnabled ? {} : { backgroundColor: '#f0f0f0', color: '#666' })
    };

    const [checkboxDWChecked, setCheckboxDWChecked] = useState(false);
    const [checkboxDS1Checked, setCheckboxDS1Checked] = useState(false);
    const [checkboxDS2Checked, setCheckboxDS2Checked] = useState(false);

    const checkboxStyleDW = {
        ...(!checkboxDWChecked && !editing ? { display: 'none' } : { display: 'flex' })
    }

    const checkboxStyleDS = {
        ...(!checkboxDS1Checked && !editing ? { display: 'none' } : { display: 'flex' })
    }

    const uploadImg = (file) => {
        const formData = new FormData();

        formData.append('file', file);

        woofJoyApi
            .post(`/img/upload/img`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resposta) => {
                console.log(resposta.data);
                //RECARREGANDO A PÁGINA PARA O CARROSSEL PEGAR AS ATUALIZAÇÕES
                window.location.reload();
            })
            .catch((erro) => {
                console.log(erro)
                alert(`Erro ao salvar a imagem: ${erro.message}`);
            });
    };

    function listarImgUrl() {
        woofJoyApi
            .get(`/img/url/img`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resposta) => {
                console.log(resposta.data);
                setImagensCarrossel(resposta.data);
            })
            .catch((erro) => {
                console.log(erro)
            });
    };

    useEffect(() => {
        listarImgUrl();
    }, []);

    const handleSave = (event) => {
        setInputsEnabled(false);
        setEditing(false);
    };
    // ------------

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

    return (
        <>
            <div className="feed-parceiro-container">
                < MenuCliente />
                <Link to={"/chat"} className="footer-feed">
                    <img className="icon-chat-historico-servicos" src={chat} alt="icon-chat" />
                </Link>

                <img className="foto-perfil-image-feed" src={foto} alt="" />

                <section className="container-info-parceiro">
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
                                {/* {descricao} */}
                            </p>
                        </div>


                    </div>
                </section>

                {/* VISÃO PARCEIRO */}
                <section className="feed-p-container-btn-edit">
                    <button onClick={toggleInputs}>
                        <img className="feed-p-edit-icon-editar" src={IconEditar} alt="" />
                    </button>
                    <button onClick={handleSave}>Salvar</button>
                </section>
                {/* ----------------*/}

                <section className="carrossel-servicos">
                    <div className="conteudo-carrossel">
                        <div className="carrossel">
                            <BootstrapCarousel
                                imagens={imagensCarrossel}
                            />
                        </div>
                        {/* VISÃO PARCEIRO */}
                        <div>
                            <BotaoUpload ref={fileUploadRef} onUpload={uploadImg} />
                        </div>
                        {/* ----------------*/}
                    </div>

                    <div className="conteudo-servicos">
                        <div className="info-servicos-prestados">
                            <p className="teste-servico">Serviços</p>
                            <p className="txt-descricao-servico">Qtd. Serviços Prestados: {qtdServicos}</p>
                            <div className="tipo-servicos">

                                <div className="dog-walker" style={checkboxStyleDW}>
                                    <img className="feed-parceiro-img" src={IconDogWalker} alt="icon dog walker"></img>

                                    <div className="dog-walker-txt">
                                        <div className="feed-p-edit-container-servico">
                                            <div className="titulo">Dog Walker</div>
                                            {editing && (
                                                <input
                                                    className="feed-p-edit-checkbox"
                                                    type="checkbox"
                                                    checked={checkboxDWChecked}
                                                    onChange={() => setCheckboxDWChecked(!checkboxDWChecked)}
                                                />
                                            )}
                                        </div>

                                        {editing && (
                                            <div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span>
                                                        R$
                                                        <input
                                                            className="feed-p-edit-input-menor"
                                                            type="text"
                                                            name="inputValorPasseioDW"
                                                            value={ficha.valor}
                                                            onChange={handleFichaChange}
                                                            disabled={!inputsEnabled}
                                                            style={inputStyle}
                                                        /> / Passeio
                                                    </span>
                                                </div>

                                            </div>
                                        )}
                                        {!editing && (
                                            <div>
                                                <p>R$ {inputValues.inputValorPasseioDW} / Passeio</p>
                                                <p>Duração: {inputValues.inputDuracaoPasseioDW} min</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="dog-sitter" style={checkboxStyleDS}>
                                    <img className="feed-parceiro-img" src={IconDogSitter} alt="icon dog sitter"></img>

                                    <div className="dog-sitter-txt">
                                        <div className="feed-p-edit-container-servico">
                                            <div className="titulo">Dog Sitter</div>
                                            {editing && (
                                                <input
                                                    className="feed-p-edit-checkbox"
                                                    type="checkbox"
                                                    checked={checkboxDS1Checked}
                                                    onChange={() => setCheckboxDS1Checked(!checkboxDS1Checked)}
                                                />
                                            )}
                                        </div>

                                        {editing && (
                                            <div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span>
                                                        R$
                                                        <input
                                                            className="feed-p-edit-input-menor"
                                                            type="text"
                                                            name="inputValorHoraDS"
                                                            value={inputValues.inputValorHoraDS}
                                                            onChange={handleInputChange}
                                                            disabled={!inputsEnabled}
                                                            style={inputStyle}
                                                        /> / Hora
                                                    </span>
                                                </div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span className="feed-p-edit-container-servico-item-ds">
                                                        <input
                                                            className="feed-p-edit-checkbox"
                                                            type="checkbox"
                                                            checked={checkboxDS2Checked}
                                                            onChange={() => setCheckboxDS2Checked(!checkboxDS2Checked)}
                                                        /> Recebe o pet em residência.
                                                    </span>
                                                </div>


                                            </div>
                                        )}
                                        {!editing && (
                                            <div>
                                                <p>R$ {inputValues.inputValorHoraDS} / Hora</p>
                                                {checkboxDS2Checked && <p>Recebe o pet em residência.</p>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="observacoes">
                    <p className="titulo-obs-acom">Observações</p>
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
            </div>
        </>
    );

}


export default FeedParceiro;
