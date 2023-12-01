import React, { useState, Componente } from "react";
import "../../css/cadastro-pet.css"
import MenuCliente from "../componentes-gerais/MenuCliente"
import BotaoUpload from "../componentes-gerais/BotaoUpload"
import IconLixeira from "../../imgs/meu-perfil/lixeira.png"
import ExemploFotoPerfilPet from "../../imgs/meu-perfil/foto-perfil-pet-exemplo.png"
import IconEditar from "../../imgs/meu-perfil/icon-editar.png"
import GroupOfInputs from './GroupOfInputs';
import Teste from './Teste'

function CadastroPet() {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [valorInput, setValorInput] = useState('');

    const handleRadioChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
    };

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
                        <div className="cadastro-pet-btn-editar">
                            <p className="cadastro-pet-txt-editar">Editar</p>
                            <img src={IconEditar} alt="" />
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
                                <input className="cadastro-pet-input-radio" name="possuiConvenio" value='simCovenio' type="radio" onChange={handleRadioChangeConvenio}
                                    checked={mostrarInputsConvenio} /> Sim
                                <input className="cadastro-pet-input-radio" name="possuiConvenio" value="naoConvenio" type="radio" onChange={handleRadioChangeConvenio}
                                    checked={!mostrarInputsConvenio} /> Não
                            </div>
                            {mostrarInputsConvenio && <Teste />}
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
