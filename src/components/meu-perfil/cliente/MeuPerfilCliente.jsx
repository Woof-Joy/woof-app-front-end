import React, { useEffect, useState } from "react";
import woofJoyApi from "../../../woof-joy-api";
import MenuCliente from "../../componentes-gerais/MenuCliente"
import BotaoUpload from "../../componentes-gerais/BotaoUpload"
import ModalMeusPets from "./ModalMeusPets"
import "../../../css/meu-perfil.css"
import ExemploFoto from "../../../imgs/chat/exemplo-foto-contato.png"
import IconLixeira from "../../../imgs/meu-perfil/lixeira.png"
import IconEditar from "../../../imgs/meu-perfil/icon-editar.png"


function MeuPerfilCliente() {
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")
    const [userData, setUser] = useState({
        id: 3,
        nomeCompleto: "Nome do Usuário Sobrenome do Usuário",
        cpf: null,
        cep: "12345678",
        numero: "12345",
        email: "usuario@email.com",
        senha: "$2a$10$7RsGlcACgYcSQyTYvQHNiuOwh5laKloEreLn6JVri1YdY6JpegTZi",
        dataNasc: "1990-01-01",
        imgUsuario: null,
        descricao: "Alguma descrição do usuário",
        parceiro: {
          nome: "Nome do Usuário",
          sobrenome: "Sobrenome do Usuário",
          cep: "12345678",
          numero: null,
          email: "usuario@email.com",
          dataNasc: "1990-01-01",
          endereco: null,
          dataEntrada: null,
          estrelas: null,
          qtdServicosPrestados: 0,
          servicos: []
        },
        cliente: {
          idCliente: 11,
          dogList: []
        },
        listaItens: []
      })
      
      


    const [mostrarAlteracaoSenha, setMostrarAlteracaoSenha] = useState(false);
    const handleMostrarAlteracaoSenha = () => {
        setMostrarAlteracaoSenha(true);

        function getInfoUser() {
            woofJoyApi
                .get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    console.log(response.status);
                    setUser(response.data)
                })
                .catch((erroOcorrido) => {
                    console.log(erroOcorrido.mensagem);
                });
        }

        function putPerfil() {
            woofJoyApi
                .put(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    console.log(response.status);
                    setUser(response.data)
                })
                .catch((erroOcorrido) => {
                    console.log(erroOcorrido.mensagem);
                });
        }



      

        



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
                                    <input className="meu-perfil-input-campo" value={userData.nomeCompleto} type="text" />
                                </div>
                              
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">CPF</label>
                                    <input className="meu-perfil-input-campo" value={userData.cpf} type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Data de Nascimento</label>
                                    <input className="meu-perfil-input-campo" value={userData.dataNasc} type="date" />
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
                                    <input className="meu-perfil-input-campo" type="text" value={userData.cep} />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Número</label>
                                    <input className="meu-perfil-input-campo" value={userData.numero} type="text" />
                                </div>
                            </div>
                            <div className="meu-perfil-input-campo-separado">
                                <label className="meu-perfil-label-campo" htmlFor="">Rua</label>
                                <input className="meu-perfil-input-campo" value={userData.rua} type="text" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Cidade</label>
                                    <input className="meu-perfil-input-campo" value={userData.cidade} type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Estado</label>
                                    <input className="meu-perfil-input-campo" value={userData.estado} type="text" />
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
                                <input className="meu-perfil-input-campo" value={userData.email} type="email" />
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
                                </div>
                            )}
                            <div className="meu-perfil-btn-salvar">
                                <button className="meu-perfil-btn">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meu-perfil-bloco-2">
                    <div className='meu-perfil-modal-meus-pets'>
                        <ModalMeusPets />
                    </div>

                </div>
            </section>
        </>
    )
}
export default MeuPerfilCliente;