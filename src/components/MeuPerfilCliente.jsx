import React from "react"
import MenuCliente from "./MenuCliente"
import "../css/meu-perfil.css"
import ExemploFoto from "../imgs/chat/exemplo-foto-contato.png"

function MeuPerfilCliente() {
    return (
        <>
            <section className="meu-perfil-container">
                <div className="meu-perfil-menu">
                    <MenuCliente />
                </div>
                <div className="meu-perfil-bloco-1">
                    <p className="meu-perfil-titulo">Meu perfil</p>
                    <div className="meu-perfil-foto-perfil">
                        <img className="meu-perfil-img-foto" src={ExemploFoto} alt="" />
                        <label for="file-upload" class="custom-file-upload">
                            Upload
                        </label>
                        <input id="file-upload" type="file" accept=".jpg, .jpeg, .png"></input>
                        <img src="" alt="" />
                    </div>
                    <div className="meu-perfil-inputs">
                        <div className="meu-perfil-texto-guia">
                            <p className="meu-perfil-texto-guia-p">Dados Pessoais</p>
                            <img src="" alt="" />
                        </div>
                        <div className="meu-perfil-input-nome-sobrenome">
                            <div className="meu-perfil-nome">
                                <label className="meu-perfil-label-nome" htmlFor="">Nome</label>
                                <input className="meu-perfil-input-nome" type="text" />
                            </div>
                            <div className="meu-perfil-input-sobrenome">
                                <label className="meu-perfil-label-sobrenome" htmlFor="">Sobrenome</label>
                                <input className="meu-perfil-input-sobrenome" type="text" />
                            </div>
                        </div>
                        <div className="meu-perfil-input-cpf-dtnasc">
                            <div className="meu-perfil-cpf">
                                <label className="meu-perfil-label-cpf" htmlFor="">CPF</label>
                                <input className="meu-perfil-input-cpf" type="text" />
                            </div>
                            <div className="meu-perfil-input-dtnasc">
                                <label className="meu-perfil-label-dtnasc" htmlFor="">Data de Nascimento</label>
                                <input className="meu-perfil-input-dtnasc" type="text" />
                            </div>
                        </div>
                        <div className="meu-perfil-texto-guia">
                            <p className="meu-perfil-texto-guia-p">Endereço</p>
                            <img src="" alt="" />
                        </div>
                        <div className="meu-perfil-input-cep-numero">
                            <div className="meu-perfil-cep">
                                <label className="meu-perfil-label-cep" htmlFor="">CEP</label>
                                <input className="meu-perfil-input-cep" type="text" />
                            </div>
                            <div className="meu-perfil-input-numero">
                                <label className="meu-perfil-label-numero" htmlFor="">Número</label>
                                <input className="meu-perfil-input-numero" type="text" />
                            </div>
                        </div>
                        <div className="meu-perfil-input-rua">
                            <label className="meu-perfil-label-cep" htmlFor="">Rua</label>
                            <input className="meu-perfil-input-cep" type="text" />
                        </div>
                        <div className="meu-perfil-input-cidade-estado">
                            <div className="meu-perfil-cidade">
                                <label className="meu-perfil-label-cidade" htmlFor="">Cidade</label>
                                <input className="meu-perfil-input-cidade" type="text" />
                            </div>
                            <div className="meu-perfil-input-estado">
                                <label className="meu-perfil-label-estado" htmlFor="">Estado</label>
                                <input className="meu-perfil-input-estado" type="text" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="meu-perfil-bloco-2">

                </div>
            </section>
        </>
    )
}
export default MeuPerfilCliente;