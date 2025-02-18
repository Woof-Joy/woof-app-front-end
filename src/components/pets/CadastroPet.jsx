import React, { useEffect, useState } from "react";
import "../../css/cadastro-pet.css"
import MenuCliente from "../componentes-gerais/MenuCliente"
import BotaoUpload from "../componentes-gerais/BotaoUpload"
import IconLixeira from "../../imgs/meu-perfil/lixeira.png"
import ExemploFotoPerfilPet from "../../imgs/meu-perfil/foto-perfil-pet-exemplo.png"

import GroupOfInputs from './GroupOfInputs'

import InputComponent from './InputComponent'
import woofJoyApi from "../../woof-joy-api"

import { useNavigate } from 'react-router-dom';


function CadastroPet() {
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [valorInput, setValorInput] = useState('');

    const handleRadioChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
    };

    const [dogBody, setDog] = useState({
        nome: "Fido",
        dtNasc: "2020-01-01",
        imgCachorro: "url_da_imagem",
        rga: true,
        peso: 20.5,
        raca: "Labrador",
        porte: "médio",
        convenio: false,
        carteirinha: "123456",
        genero: "M",
        agressivo: 2,
        deficiencia: false,
        fkDono: {
            "id": 1
        },
        observacaoList: [
            {
                "descricao": "Observação sobre o cachorro",
                "dataObservacao": "2023-11-26"
            }
        ]
    }

    )
    const navigate = useNavigate();

    function cadastrarPet() {
        woofJoyApi
            .post(`/dogs/${userId}`, dogBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                setDog(response.data)
                alert("pet cadastrado")
                navigate("/perfil-cliente")

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
                alert("complete as informações")


            });


    }



    const [mostrarInputsConvenio, setMostrarInputsConvenio] = useState(false);

    const handleRadioChangeConvenio = (event) => {
        setMostrarInputsConvenio(event.target.value === 'simConvenio');
    };

    return (
        <>
            <section className="cadastro-pet-container">
                <div className="cadastro-pet-menu">
                    <MenuCliente />
                </div>
                <div className="cadastro-pet-conteudo">
                    <div className="cadastro-pet-bloco-1">
                        <div className="cadastro-pet-foto-perfil">
                            <img className="cadastro-pet-img-foto" src={ExemploFotoPerfilPet} alt="" />
                            <BotaoUpload />
                            <img src={IconLixeira} alt="" />
                        </div>

                    </div>
                    <div className="cadastro-pet-bloco-2">
                        <div className="cadastro-pet-txt-guia-div">
                            <p className="cadastro-pet-txt-guia">Dados do Pet</p>
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <label className="cadastro-pet-label" htmlFor="">Nome</label>
                                <input className="cadastro-pet-input-campo" type="text" />
                            </div>
                            <div className="cadastro-pet-input">
                                <label className="cadastro-pet-label" htmlFor="">Raça</label>
                                <input className="cadastro-pet-input-campo" type="text" />
                            </div>
                            <div className="cadastro-pet-radio">
                                <label className="cadastro-pet-label" htmlFor="">Possui RGA?</label>
                                <input className="cadastro-pet-input-radio"
                                    name="possuiRGA"
                                    type="radio"
                                    value="simRGA"
                                    onChange={handleRadioChange}
                                    checked={opcaoSelecionada === 'simRGA'} /> Sim

                                <input className="cadastro-pet-input-radio"
                                    name="possuiRGA"
                                    type="radio"
                                    value="naoRGA"
                                    onChange={handleRadioChange}
                                    checked={opcaoSelecionada === 'naoRGA'} /> Não
                            </div>
                            {opcaoSelecionada === 'simRGA' && (
                                <div>
                                    <input className="cadastro-pet-input-campo"
                                        type="text"
                                        value={valorInput}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <label className="cadastro-pet-label" htmlFor="">Data de Nascimento</label>
                                <input className="cadastro-pet-input-campo" type="date" />
                            </div>
                            <div className="cadastro-pet-input-peso-porte">
                                <div className="cadastro-pet-input">
                                    <label className="cadastro-pet-label" htmlFor="">Peso</label>
                                    <div className="cadastro-pet-input-peso-porte-kg">
                                        <input className="cadastro-pet-input-campo cadastro-pet-peso" type="text" />
                                        <p className="cadastro-pet-txt-kg">Kg</p>
                                    </div>
                                </div>
                                <div className="cadastro-pet-input">
                                    <label className="cadastro-pet-label" htmlFor="">Porte</label>
                                    <input className="cadastro-pet-input-campo cadastro-pet-porte" type="text" />
                                </div>
                            </div>
                            <div className="cadastro-pet-radio">
                                <label className="cadastro-pet-label" htmlFor="">Sexo:</label>
                                <input className="cadastro-pet-input-radio" name="sexo" type="radio" /> Macho
                                <input className="cadastro-pet-input-radio" name="sexo" type="radio" /> Fêmea
                            </div>
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <label className="cadastro-pet-label" htmlFor="">Nível de Agressividade</label>
                                <select className="cadastro-pet-input-campo" name="" id="">
                                    <option value="" disabled selected>Selecione uma opção</option>
                                    <option value="nivel0">Zero ou Nada Agressivo</option>
                                    <option value="nivel1">Nível 1 ou Muito Pouco</option>
                                    <option value="nivel2">Nível 2 ou Pouco</option>
                                    <option value="nivel3">Nível 3 ou Médio</option>
                                    <option value="nivel4">Nível 4 ou Muito</option>
                                    <option value="nivel5">Nível 5 ou Bem Agressivo</option>
                                </select>
                            </div>
                            <div className="cadastro-pet-radio">
                                <label className="cadastro-pet-label" htmlFor="">Possui Convênio?</label>
                            </div>
                            <GroupOfRadioButtonConvenio id={1} />

                        </div>
                    </div>
                    <div className="cadastro-pet-bloco-3">
                        <div className="cadastro-pet-txt-guia-div">
                            <p className="cadastro-pet-txt-guia">Necessidades do Pet</p>
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input-especial">
                                <label className="cadastro-pet-label" htmlFor="">Pet Especial?</label>
                                <input className="cadastro-pet-input-radio" name="especial" type="radio" /> Sim
                                <input className="cadastro-pet-input-radio" name="especial" type="radio" /> Não
                            </div>
                            <div className="cadastro-pet-input">
                                <label className="cadastro-pet-label" htmlFor="">Deficiência</label>
                                <select className="cadastro-pet-input-campo" name="" id="">
                                    <option value="" disabled selected>Selecione uma opção</option>
                                    <option value="fisica">Física</option>
                                    <option value="visual">Visual</option>
                                    <option value="auditiva">Auditiva</option>
                                    <option value="múltipla">Múltipla</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="cadastro-pet-bloco-4">
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <div className="cadastro-pet-input-alergia">
                                    <label className="cadastro-pet-label" htmlFor="">Possui Alergia?</label>
                                    <GroupOfRadioButtons id={1} />
                                </div>
                            </div>
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <div className="cadastro-pet-input-alergia">
                                    <label className="cadastro-pet-label" htmlFor="">Possui Doença?</label>
                                    <GroupOfRadioButtons id={2} />
                                </div>
                            </div>
                        </div>
                        <div className="cadastro-pet-inputs-container">
                            <div className="cadastro-pet-input">
                                <div className="cadastro-pet-input-alergia">
                                    <label className="cadastro-pet-label" htmlFor="">Usa Medicação?</label>
                                    <GroupOfRadioButtons id={3} />
                                </div>
                            </div>
                            <button onClick={cadastrarPet} class="custom-file-upload">
                                Cadastrar Pet
                            </button>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default CadastroPet;

function GroupOfRadioButtons({ id }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const handleRadioChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    const shouldShowGroup = opcaoSelecionada === 'sim';

    return (
        <div>
            <label>
                <input className="cadastro-pet-input-radio"
                    type="radio"
                    name={`opcao-${id}`}
                    value="sim"
                    onChange={handleRadioChange}
                    checked={opcaoSelecionada === 'sim'}
                />
                Sim
            </label>

            <label>
                <input className="cadastro-pet-input-radio"
                    type="radio"
                    name={`opcao-${id}`}
                    value="nao"
                    onChange={handleRadioChange}
                    checked={opcaoSelecionada === 'nao'}
                />
                Não
            </label>

            {shouldShowGroup && <GroupOfInputs />}
        </div>
    );
}

function GroupOfRadioButtonConvenio({ id }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const handleRadioChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    const shouldShowGroup = opcaoSelecionada === 'sim';

    return (
        <div>
            <label>
                <input className="cadastro-pet-input-radio"
                    type="radio"
                    name={`opcao-${id}`}
                    value="sim"
                    onChange={handleRadioChange}
                    checked={opcaoSelecionada === 'sim'}
                />
                Sim
            </label>

            <label>
                <input className="cadastro-pet-input-radio"
                    type="radio"
                    name={`opcao-${id}`}
                    value="nao"
                    onChange={handleRadioChange}
                    checked={opcaoSelecionada === 'nao'}
                />
                Não
            </label>

            {shouldShowGroup && <InputComponent />}
        </div>
    );
}
