import React, { useState } from 'react';
import MenuCliente from "../../MenuCliente"
import BotaoUpload from "../../BotaoUpload"
import ModalMeusPets from "./ModalMeusPets"
import "../../../css/meu-perfil.css"
import ExemploFoto from "../../../imgs/chat/exemplo-foto-contato.png"
import IconLixeira from "../../../imgs/meu-perfil/lixeira.png"
import IconEditar from "../../../imgs/meu-perfil/icon-editar.png"


function MeuPerfilCliente() {
    const [mostrarAlteracaoSenha, setMostrarAlteracaoSenha] = useState(false);

    const handleMostrarAlteracaoSenha = () => {
        setMostrarAlteracaoSenha(true);
    };
    return (
        <>
            <section className="meu-perfil-container">
                <div className="meu-perfil-menu">
                    <MenuCliente />
                </div>
                <div>
                </div>
                <div className="meu-perfil-bloco-1">
                    <p className="meu-perfil-titulo">Meu perfil</p>
                    <div className="meu-perfil-foto-perfil">
                        <img className="meu-perfil-img-foto" src={ExemploFoto} alt="" />
                        <BotaoUpload />
                        <img src={IconLixeira} alt="" />
                    </div>
                    <div className="meu-perfil-inputs">
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Dados Pessoais</p>
                                <img className="meu-perfil-icon-editar" src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Nome</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Sobrenome</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">CPF</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Data de Nascimento</label>
                                    <input className="meu-perfil-input-campo" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Endereço</p>
                                <img src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">CEP</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Número</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                            </div>
                            <div className="meu-perfil-input-campo-separado">
                                <label className="meu-perfil-label-campo" htmlFor="">Rua</label>
                                <input className="meu-perfil-input-campo" type="text" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Cidade</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Estado</label>
                                    <input className="meu-perfil-input-campo" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Dados da Conta</p>
                                <img src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campo-separado">
                                <label className="meu-perfil-label-campo" htmlFor="">E-mail</label>
                                <input className="meu-perfil-input-campo" type="email" />
                            </div>
                            <button className="meu-perfil-btn" onClick={handleMostrarAlteracaoSenha}>Alterar Senha</button>
                            {mostrarAlteracaoSenha && (
                                <div>
                                    <div className="meu-perfil-input-campos-juntos">
                                        <div className="meu-perfil-input-campo-junto">
                                            <label className="meu-perfil-label-campo" htmlFor="">Nova senha</label>
                                            <input className="meu-perfil-input-campo" type="password" />
                                        </div>
                                        <div className="meu-perfil-input-campo-junto">
                                            <label className="meu-perfil-label-campo" htmlFor="">Confirmação de Senha</label>
                                            <input className="meu-perfil-input-campo" type="password" />
                                        </div>
                                    </div>
                                    <div className="meu-perfil-btn-salvar">
                                        <button className="meu-perfil-btn">Salvar</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="meu-perfil-bloco-2">
                    <div className='meu-perfil-modal-meus-pets'>
                        <ModalMeusPets />
                    </div>

                    <div className='meu-perfil-btn-cadastrar-pet'>
                        <button className="meu-perfil-btn">Cadastrar Pet</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MeuPerfilCliente;