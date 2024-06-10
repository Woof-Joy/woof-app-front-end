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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FeedParceiro() {


    const [infoParceiro, setInfoParceiro] = useState({
        idUser: "",
        nome: "",
        dataEntrada: "",
        fichas: [],
        maxDogs: 2,
        aceitaDogEspecial: false,
        aceitaDogIdoso: true,
        aceitaDogBravo: false,
        aceitaDogGrande: true,
        aceitaDogCio: false,
        descricao: ""
    })


    const enderecoLogado = sessionStorage.getItem("endereco");


    const userId = sessionStorage.getItem("userId")
    const nome = sessionStorage.getItem("nome")
    const token = sessionStorage.getItem("token")

    const fileUploadRef = useRef(null);
    const [imagensCarrossel, setImagensCarrossel] = useState([])

    woofJoyApi
        .get(`/parceiros/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then((response) => {
            setInfoParceiro(response.data);
            console.log(response.data)
            //alert(response.status)
        })
        .catch((erroOcorrido) => {
            console.log(erroOcorrido);
        });


    // ------------ 
    //FUNÇÕES P/ HABILITAR CADASTRO/EDIÇÃO DA PÁGINA DE SERVIÇO 
    //(VISÃO PARCEIRO)

    const [inputValues, setInputValues] = useState({
        inputValorPasseioDW: '',
        inputDuracaoPasseioDW: '',
        inputValorHoraDS: '',
        inputTotalPets: ''
    });

    const [editing, setEditing] = useState(false);
    const [mostrarPagamento, setMostrarPagamento] = useState(false);

    function pagamentoOnModal() {
        setMostrarPagamento(true);
    }

    function pagamentoOffModal() {
        setMostrarPagamento(false);
    }






    const toggleInputs = () => {
        setEditing(!editing);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    // const handleFichaChange = (event) => {
    //     const { name, value } = event.target;
    //     setFicha({ ...ficha, [name]: value });
    // };

    const [checkboxDWChecked, setCheckboxDWChecked] = useState(true);
    const [checkboxDS1Checked, setCheckboxDS1Checked] = useState(true);
    const [checkboxDS2Checked, setCheckboxDS2Checked] = useState(true);

    const checkboxStyleDW = {
        ...(!checkboxDWChecked && !editing ? { display: 'none' } : { display: 'flex' })
    }

    const checkboxStyleDS = {
        ...(!checkboxDS1Checked && !editing ? { display: 'none' } : { display: 'flex' })
    }

    const checkboxStyleDSAcomodacoes = {
        ...(!checkboxDS1Checked ? { display: 'none' } : { display: 'flex' })
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
            .then((response) => {
                console.log(response.data);
                //RECARREGANDO A PÁGINA PARA O CARROSSEL PEGAR AS ATUALIZAÇÕES
                window.location.reload();
            })
            .catch((erro) => {
                console.log(erro)
                // alert(`Erro ao salvar a imagem: ${erro.message}`);
                toast.error('Falha no upload')
            });
    };

    function listarImgUrl() {
        woofJoyApi
            .get(`/img/url/img`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setImagensCarrossel(response.data);
            })
            .catch((erro) => {
                console.log(erro)
            });
    };

    useEffect(() => {
        listarImgUrl();
    }, []);

    const handleSave = (event) => {
        setEditing(false);
    };

    // OBSERVAÇÕES
    const [selectedOption1, setSelectedOption1] = useState('não'); // (Não) Cuida de pets especiais
    const [selectedOption2, setSelectedOption2] = useState('não'); // (Não) Aceita pet idoso
    const [selectedOption3, setSelectedOption3] = useState('não'); // (Não) Aceita pet bravo
    const [selectedOption4, setSelectedOption4] = useState('não'); // (Não) Aceita pet de grande porte
    const [selectedOption5, setSelectedOption5] = useState('não'); // (Não) Aceita fêmea no cio

    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleOptionChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const handleOptionChange4 = (event) => {
        setSelectedOption4(event.target.value);
    };

    const handleOptionChange5 = (event) => {
        setSelectedOption5(event.target.value);
    };

    //ACOMODAÇÃO
    const [selectedOption6, setSelectedOption6] = useState('casa'); // Mora em casa/apartamento
    const [selectedOption7, setSelectedOption7] = useState('não'); // (Não) Possui área externa
    const [selectedOption8, setSelectedOption8] = useState('não'); // (Não) Tem crianças
    const [selectedOption9, setSelectedOption9] = useState('não'); // (Não) Tem animais
    const [selectedOption10, setSelectedOption10] = useState('não'); // Tem/Sem rotas de fuga
    const [selectedOption11, setSelectedOption11] = useState('não'); // (Não) Pode subir no sofá

    const handleOptionChange6 = (event) => {
        setSelectedOption6(event.target.value);
    };

    const handleOptionChange7 = (event) => {
        setSelectedOption7(event.target.value);
    };

    const handleOptionChange8 = (event) => {
        setSelectedOption8(event.target.value);
    };

    const handleOptionChange9 = (event) => {
        setSelectedOption9(event.target.value);
    };

    const handleOptionChange10 = (event) => {
        setSelectedOption10(event.target.value);
    };

    const handleOptionChange11 = (event) => {
        setSelectedOption11(event.target.value);
    };


    // ------------



    /*COMPONENTE ATENDIMENTO*/

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

            {/* {mostrarPagamento && ( */}

                <ModalPagamento
                    onClose={pagamentoOffModal}

                />
            {/* )} */}
            <div className="feed-parceiro-container">

                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />

                < MenuCliente />


                <img className="foto-perfil-image-feed" src={foto} alt="" />

                <section className="container-info-parceiro">
                    <div className="conteudo-info-parceiro">
                        <p className="nome-parceiro">{infoParceiro.nome}</p>

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
                                        <b>Desde {infoParceiro.dataEntrada}</b>
                                    </p>
                                </span>
                            </div>
                            <div className="avaliacao">
                                <span className="icon-avaliacao">
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="txt-avaliacao">
                                    <p>
                                        <b>{infoParceiro?.fichas?.[0]?.servicos?.[0]?.nota ?? 0}</b>
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
                    <button className="feed-p-container-btn-editar" onClick={toggleInputs}>
                        <img className="feed-p-edit-icon-editar" src={IconEditar} alt="" />
                    </button>
                </section>
                {/* ----------------*/}

                <section className="carrossel-servicos">


                    <div className="conteudo-servicos">
                        <div className="info-servicos-prestados">
                            <p className="teste-servico">Serviços</p>
                            <p className="txt-descricao-servico">Qtd. Serviços Prestados: {infoParceiro?.fichas?.[0]?.servicos?.length ?? 0}</p>
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
                                            {!editing && (
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

                                                    </span>
                                                </div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span>

                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {!editing && (
                                            <div>
                                                R$ {infoParceiro?.fichas?.[0]?.valor != null ? infoParceiro.fichas[0].valor : 'Informe um valor'} / Passeio
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="dog-sitter" style={checkboxStyleDS}>
                                    <img className="feed-parceiro-img" src={IconDogSitter} alt="icon dog sitter"></img>

                                    <div className="dog-sitter-txt">
                                        <div className="feed-p-edit-container-servico">
                                            <div className="titulo">Dog Sitter</div>

                                        </div>

                                        {editing && (
                                            <div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span>

                                                    </span>
                                                </div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span className="feed-p-edit-container-servico-item-ds">
                                                        <input
                                                            className="feed-p-edit-checkbox"
                                                            type="checkbox"
                                                            checked={checkboxDS2Checked}
                                                            onChange={() => setCheckboxDS2Checked(!checkboxDS2Checked)}
                                                        />
                                                    </span>
                                                </div>


                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feed-p-edit-btn-pgto">
                            <p>Seja um <span className="feed-p-edit-pgto-bold">parceiro premium</span> na Woof Joy:</p>
                            <button onClick={() => pagamentoOnModal()} className="feed-p-edit-pgto-btn-confira">Confira</button>
                        </div>

                    </div>
                </section>

                {/* OBSERVAÇÕES */}
                <section className="feed-p-edit-container-obs-acom">

                    <section className="observacoes">
                        <p className="titulo-obs-acom">Observações</p>
                        <div className="feed-p-edit-container-obs-servicos">
                            <div className="feed-p-edit-obs-servicos">

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Cuida de pets especiais?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option1"
                                                    value="sim"
                                                    checked={selectedOption1 === 'sim'}
                                                    onChange={handleOptionChange1}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option1"
                                                    value="não"
                                                    checked={selectedOption1 === 'não'}
                                                    onChange={handleOptionChange1}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption1 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconPetEspecial} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Cuida de pets especiais</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption1 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconPetEspecial} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não cuida de pets especiais</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Aceita cachorro idoso?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option2"
                                                    value="sim"
                                                    checked={selectedOption2 === 'sim'}
                                                    onChange={handleOptionChange2}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option2"
                                                    value="não"
                                                    checked={selectedOption2 === 'não'}
                                                    onChange={handleOptionChange2}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption2 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconDogIdoso} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Aceita pet idoso</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption2 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconDogIdoso} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não aceita pet idoso</span>
                                        </div>
                                    </div>
                                )}

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Aceita pet bravo?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option3"
                                                    value="sim"
                                                    checked={selectedOption3 === 'sim'}
                                                    onChange={handleOptionChange3}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option3"
                                                    value="não"
                                                    checked={selectedOption3 === 'não'}
                                                    onChange={handleOptionChange3}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption3 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconPetBravo} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Aceita pet bravo</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption3 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconPetBravo} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não aceita pet bravo</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Aceita pet de porte grande?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option4"
                                                    value="sim"
                                                    checked={selectedOption4 === 'sim'}
                                                    onChange={handleOptionChange4}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option4"
                                                    value="não"
                                                    checked={selectedOption4 === 'não'}
                                                    onChange={handleOptionChange4}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption4 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconGrandePorte} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Aceita pet de grande porte</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption4 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconGrandePorte} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não aceita pet de grande porte</span>
                                        </div>
                                    </div>
                                )}

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Aceita fêmea no cio?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option5"
                                                    value="sim"
                                                    checked={selectedOption5 === 'sim'}
                                                    onChange={handleOptionChange5}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option5"
                                                    value="não"
                                                    checked={selectedOption5 === 'não'}
                                                    onChange={handleOptionChange5}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption5 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconFemeaCio} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Aceita fêmea no cio</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption5 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconFemeaCio} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não aceita fêmea no cio</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ACOMODAÇÕES */}
                    <section className="observacoes" style={checkboxStyleDSAcomodacoes}>
                        <p className="titulo-obs-acom">Acomodação</p>
                        <div className="feed-p-edit-container-obs-servicos">
                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Residência tipo:
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option6"
                                                    value="casa"
                                                    checked={selectedOption6 === 'casa'}
                                                    onChange={handleOptionChange6}
                                                />
                                                Casa
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option6"
                                                    value="apartamento"
                                                    checked={selectedOption6 === 'apartamento'}
                                                    onChange={handleOptionChange6}
                                                />
                                                Apartamento
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption6 === 'casa' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconCasa} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Mora em casa</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption6 === 'apartamento' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconCasa} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Mora em apartamento</span>
                                        </div>
                                    </div>
                                )}

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Possui área externa?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option7"
                                                    value="sim"
                                                    checked={selectedOption7 === 'sim'}
                                                    onChange={handleOptionChange7}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option7"
                                                    value="não"
                                                    checked={selectedOption7 === 'não'}
                                                    onChange={handleOptionChange7}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption7 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconAreaExterna} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Possui área externa</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption7 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div>
                                                <img src={IconAreaExterna} alt="" />
                                            </div>
                                            <span className="feed-p-edit-descricao-obs">Não possui área externa</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Tem crianças na residência?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option8"
                                                    value="sim"
                                                    checked={selectedOption8 === 'sim'}
                                                    onChange={handleOptionChange8}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option8"
                                                    value="não"
                                                    checked={selectedOption8 === 'não'}
                                                    onChange={handleOptionChange8}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption8 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconCrianca} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Tem crianças</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption8 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconAreaExterna} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Não tem crianças</span>
                                        </div>
                                    </div>
                                )}

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Tem animais?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option9"
                                                    value="sim"
                                                    checked={selectedOption9 === 'sim'}
                                                    onChange={handleOptionChange9}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option9"
                                                    value="não"
                                                    checked={selectedOption9 === 'não'}
                                                    onChange={handleOptionChange9}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption9 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconTemAnimais} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Tem animais</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption9 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconTemAnimais} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Tem animais</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Tem rotas de fuga?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option10"
                                                    value="sim"
                                                    checked={selectedOption10 === 'sim'}
                                                    onChange={handleOptionChange10}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option10"
                                                    value="não"
                                                    checked={selectedOption10 === 'não'}
                                                    onChange={handleOptionChange10}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption10 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconRotasFuga} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Tem rotas de fuga</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption10 === 'não' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos-conteudo">
                                            <div><img src={IconRotasFuga} alt="" /></div>
                                            <span className="feed-p-edit-descricao-obs">Sem rotas de fuga</span>
                                        </div>
                                    </div>
                                )}

                                {/* ---------------------------------*/}

                                {editing && (
                                    <div className="feed-p-edit-container-option">
                                        Deixa subir no sofá?
                                        <div className="feed-p-edit-option">
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option11"
                                                    value="sim"
                                                    checked={selectedOption11 === 'sim'}
                                                    onChange={handleOptionChange11}
                                                />
                                                Sim
                                            </label>
                                            <label className="radio-cadastro-servico">
                                                <input className="cadastro-input-radio"
                                                    type="radio"
                                                    name="option11"
                                                    value="não"
                                                    checked={selectedOption11 === 'não'}
                                                    onChange={handleOptionChange11}
                                                />
                                                Não
                                            </label>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </section>
                </section>
                <section className="feed-p-container-salvar">
                    <button className="feed-p-container-btn-salvar" onClick={handleSave}>Salvar</button>
                </section>
            </div>
        </>
    );

}


export default FeedParceiro;
