import React, { useState } from "react";
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
import Radio from '../../components/cadastro-servico-sim-nao'

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

    woofJoyApi
        .get(`/parceiros/${idParceiro}`, {
            headers: {
                Authorization: `Bearer ${token}`,
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

    // ------------ 
    //FUNÇÕES P/ HABILITAR CADASTRO/EDIÇÃO DA PÁGINA DE SERVIÇO 
    //(VISÃO PARCEIRO)
    const [inputsEnabled, setInputsEnabled] = useState(false);

    const [inputValues, setInputValues] = useState({
        inputValorPasseioDW: '',
        inputDuracaoPasseioDW: '',
        inputValorHoraDS: '',
        inputTotalPets: ''
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


    const handleSave = (event) => {
        setInputsEnabled(false);
        setEditing(false);
    };

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
    const [selectedOption5, setSelectedOption5] = useState('');

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
                            <BootstrapCarousel />
                        </div>
                        {/* VISÃO PARCEIRO */}
                        <div>
                            <BotaoUpload />
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
                                                            value={inputValues.inputValorPasseioDW}
                                                            onChange={handleInputChange}
                                                            disabled={!inputsEnabled}
                                                            style={inputStyle}
                                                        /> / Passeio
                                                    </span>
                                                </div>
                                                <div className="feed-p-edit-container-servico-item">
                                                    <span>
                                                        Duração:
                                                        <input
                                                            className="feed-p-edit-input-menor"
                                                            type="text"
                                                            name="inputDuracaoPasseioDW"
                                                            value={inputValues.inputDuracaoPasseioDW}
                                                            onChange={handleInputChange}
                                                            disabled={!inputsEnabled}
                                                            style={inputStyle}
                                                        /> min
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

                <section className="feed-p-edit-container-obs-acom">
                    <section className="observacoes">
                        <p className="titulo-obs-acom">Observações</p>
                        <div className="feed-p-edit-container-obs-servicos">
                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div>
                                        <p>Recebe até quantos pets?
                                            <input
                                                className="feed-p-edit-input-menor"
                                                type="number"
                                                name="inputTotalPets"
                                                value={inputValues.inputTotalPets}
                                                onChange={handleInputChange}
                                                style={inputStyle}
                                            />
                                        </p>
                                    </div>
                                )}
                                {!editing && (
                                    <div className="obs-servicos">
                                        <img src={IconDoisPet} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Recebe até *2* pets</span>
                                    </div>
                                )}

                                {editing && (
                                    <div>
                                        Cuida de pets especiais?
                                        <label>
                                            <input
                                                type="radio"
                                                name="option1"
                                                value="sim"
                                                checked={selectedOption1 === 'sim'}
                                                onChange={handleOptionChange1}
                                            />
                                            Sim
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option1"
                                                value="não"
                                                checked={selectedOption1 === 'não'}
                                                onChange={handleOptionChange1}
                                            />
                                            Não
                                        </label>
                                    </div>
                                )}
                                {!editing && selectedOption1 === 'sim' && (
                                    <div className="obs-servicos">
                                        <img src={IconPetEspecial} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Cuida de pets especiais</span>
                                    </div>
                                )}
                                {!editing && selectedOption1 === 'não' && (
                                    <div className="obs-servicos">
                                        <img src={IconPetEspecial} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Não cuida de pets especiais</span>
                                    </div>
                                )}
                            </div>

                            <div className="div-espaco-servico"></div>

                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div>
                                        Aceita cachorro idoso?
                                        <label>
                                            <input
                                                type="radio"
                                                name="option2"
                                                value="sim"
                                                checked={selectedOption2 === 'sim'}
                                                onChange={handleOptionChange2}
                                            />
                                            Sim
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option2"
                                                value="não"
                                                checked={selectedOption2 === 'não'}
                                                onChange={handleOptionChange2}
                                            />
                                            Não
                                        </label>
                                    </div>
                                )}
                                {!editing && selectedOption2 === 'sim' && (
                                    <div className="obs-servicos">
                                        <img src={IconDogIdoso} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Aceita pet idoso</span>
                                    </div>
                                )}
                                {!editing && selectedOption2 === 'não' && (
                                    <div className="obs-servicos">
                                        <img src={IconDogIdoso} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Não aceita pet idoso</span>
                                    </div>
                                )}

                                {editing && (
                                    <div>
                                        Aceita pet bravo?
                                        <label>
                                            <input
                                                type="radio"
                                                name="option3"
                                                value="sim"
                                                checked={selectedOption3 === 'sim'}
                                                onChange={handleOptionChange3}
                                            />
                                            Sim
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option3"
                                                value="não"
                                                checked={selectedOption3 === 'não'}
                                                onChange={handleOptionChange3}
                                            />
                                            Não
                                        </label>
                                    </div>
                                )}
                                {!editing && selectedOption3 === 'sim' && (
                                    <div className="obs-servicos">
                                        <img src={IconPetBravo} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Aceita pet bravo</span>
                                    </div>
                                )}
                                {!editing && selectedOption3 === 'não' && (
                                    <div className="obs-servicos">
                                        <img src={IconPetBravo} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Não aceita pet bravo</span>
                                    </div>
                                )}
                            </div>

                            <div className="div-espaco-servico"></div>


                            <div className="feed-p-edit-obs-servicos">
                                {editing && (
                                    <div>
                                        Aceita pet de porte grande?
                                        <label>
                                            <input
                                                type="radio"
                                                name="option4"
                                                value="sim"
                                                checked={selectedOption4 === 'sim'}
                                                onChange={handleOptionChange4}
                                            />
                                            Sim
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option4"
                                                value="não"
                                                checked={selectedOption4 === 'não'}
                                                onChange={handleOptionChange4}
                                            />
                                            Não
                                        </label>
                                    </div>
                                )}
                                {!editing && selectedOption4 === 'sim' && (
                                    <div className="obs-servicos">
                                        <img src={IconGrandePorte} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Aceita pet grande porte</span>
                                    </div>
                                )}
                                {!editing && selectedOption4 === 'não' && (
                                    <div className="obs-servicos">
                                        <img src={IconGrandePorte} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Não aceita pet grande porte</span>
                                    </div>
                                )}

                                {editing && (
                                    <div>
                                        Aceita fêmea no cio?
                                        <label>
                                            <input
                                                type="radio"
                                                name="option5"
                                                value="sim"
                                                checked={selectedOption5 === 'sim'}
                                                onChange={handleOptionChange5}
                                            />
                                            Sim
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option5"
                                                value="não"
                                                checked={selectedOption5 === 'não'}
                                                onChange={handleOptionChange5}
                                            />
                                            Não
                                        </label>
                                    </div>
                                )}
                                {!editing && selectedOption5 === 'sim' && (
                                    <div className="obs-servicos">
                                        <div className="obs-servicos">
                                            <img src={IconFemeaCio} alt="" />
                                            <span className="feed-p-edit-descricao-obs">Aceita fêmea no cio</span>
                                        </div>
                                    </div>
                                )}
                                {!editing && selectedOption5 === 'não' && (
                                    <div className="obs-servicos">
                                        <img src={IconFemeaCio} alt="" />
                                        <span className="feed-p-edit-descricao-obs">Não aceita fêmea no cio</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="observacoes">
                        <p className="titulo-obs-acom">Acomodação</p>
                        <div className="feed-p-edit-container-obs-servicos">
                            <div className="feed-p-edit-obs-servicos">
                                <div className="obs-servicos">
                                    <img src={IconCasa} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Mora em casa</span>
                                </div>
                                <div className="obs-servicos">
                                    <img src={IconAreaExterna} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Possui área externa</span>
                                </div>
                            </div>

                            <div className="div-espaco-servico"></div>

                            <div className="feed-p-edit-obs-servicos">
                                <div className="obs-servicos">
                                    <img src={IconTemAnimais} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Tem animais</span>
                                </div>
                                <div className="obs-servicos">
                                    <img src={IconCrianca} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Não tem crianças</span>
                                </div>
                            </div>

                            <div className="div-espaco-servico"></div>

                            <div className="feed-p-edit-obs-servicos">
                                <div className="obs-servicos">
                                    <img src={IconRotasFuga} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Sem rotas de fuga</span>
                                </div>
                                <div className="obs-servicos">
                                    <img src={IconSobeSofa} alt="" />
                                    <span className="feed-p-edit-descricao-obs">Pode subir no sofá</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );

}


export default FeedParceiro;
