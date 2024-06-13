import React, { useEffect, useState } from "react";
import woofJoyApi from "../../../woof-joy-api";
import MenuCliente from "../../componentes-gerais/MenuCliente"
import BotaoUpload from "../../componentes-gerais/BotaoUpload"
import ModalMeusPets from "./ModalMeusPets"
import "../../../css/meu-perfil.css"
import ExemploFoto from "../../../imgs/chat/exemplo-foto-contato.png";
import IconLixeira from "../../../imgs/meu-perfil/lixeira.png"
import IconEditar from "../../../imgs/meu-perfil/icon-editar.png"
import { ToastContainer, toast } from 'react-toastify'


function MeuPerfilCliente() {
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")
    const [usuario, setUsuario] = useState({
        id: "",
        nomeCompleto: "",
        cpf: "",
        email: "",
        senha: "",
        dataNasc: "",
        imgUsuario: "",
        descricao: null,
        parceiro: null,
        cliente: {
            idCliente: "",
            dogList: []
        },
        role: "",
        listaItens: [],
        endereco: {
            id: "",
            cep: "",
            logradouro: "",
            numero: "",
            localidade: "",
            uf: ""
        }
    });


    const getInfoCliente = () => {
        woofJoyApi
            .get(`/users/${userId}`)
            .then((resposta) => {
                setUsuario(resposta.data);
            })
            .catch((erro) => {
                alert("erro:" + erro.status);
                console.log(erro.status);
            });
    };

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
                console.log(response.data);
                //RECARREGANDO A PÁGINA PARA A FOTO MUDAR
                window.location.reload();
            })
            .catch((erro) => {
                console.log(erro)
                // alert(`Erro ao salvar a imagem: ${erro.message}`);
                toast.error('Falha no upload')
            });
    };

  



    const [mostrarAlteracaoSenha, setMostrarAlteracaoSenha] = useState(false);




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
                setUsuario(response.data)
                getInfoCliente()

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    useEffect(() => {
        getInfoCliente();

        const intervalId = setInterval(() => {
            getInfoCliente();
        }, 1 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleMostrarAlteracaoSenha = () => {
        if(mostrarAlteracaoSenha === true){
            setMostrarAlteracaoSenha(false);

        }else{
        setMostrarAlteracaoSenha(true);
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
                        <img className="meu-perfil-img-foto" src={usuario.imgUsuario} alt="" />
                        <BotaoUpload onUpload={uploadImg}/>
                        <img src={IconLixeira} alt="" />
                    </div>
                    <div className="meu-perfil-inputs">
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Dados Pessoais</p>
                                <img className="meu-perfil-icon-editar" src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos input">
                                <div className="meu-perfil-input-campo-junto">
                                    <label className="meu-perfil-label-campo" htmlFor="">Nome</label>
                                    <input className="meu-perfil-input-campo" value={usuario.nomeCompleto} type="text" />
                                </div>

                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">CPF</label>
                                    <input className="meu-perfil-input-campo" value={usuario.cpf} type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">Data de Nascimento</label>
                                    <input className="meu-perfil-input-campo" value={usuario.dataNasc} type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Endereço</p>
                                <img src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">CEP</label>
                                    <input className="meu-perfil-input-campo" type="text" value={usuario.endereco.cep} />
                                </div>
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">Número</label>
                                    <input className="meu-perfil-input-campo" value={usuario.endereco.numero} type="text" />
                                </div>
                            </div>
                            <div className="meu-perfil-input-campo-separado input">
                                <label className="meu-perfil-label-campo" htmlFor="">Rua</label>
                                <input className="meu-perfil-input-campo" value={usuario.endereco.logradouro} type="text" />
                            </div>
                            <div className="meu-perfil-input-campos-juntos">
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">Cidade</label>
                                    <input className="meu-perfil-input-campo" value={usuario.endereco.localidade} type="text" />
                                </div>
                                <div className="meu-perfil-input-campo-junto input">
                                    <label className="meu-perfil-label-campo" htmlFor="">Estado</label>
                                    <input className="meu-perfil-input-campo" value={usuario.endereco.uf} type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="meu-perfil-inputs-box">
                            <div className="meu-perfil-texto-guia">
                                <p className="meu-perfil-texto-guia-p">Dados da Conta</p>
                                <img src={IconEditar} alt="" />
                            </div>
                            <div className="meu-perfil-input-campo-separado input">
                                <label className="meu-perfil-label-campo" htmlFor="">E-mail</label>
                                <input className="meu-perfil-input-campo" value={usuario.email} type="email" />
                            </div>
                            <button className="meu-perfil-btn" onClick={handleMostrarAlteracaoSenha}>Alterar Senha</button>
                            {mostrarAlteracaoSenha && (
                                <div>
                                    <div className="meu-perfil-input-campos-juntos">
                                        <div className="meu-perfil-input-campo-junto input">
                                            <label className="meu-perfil-label-campo" htmlFor="">Nova senha</label>
                                            <input className="meu-perfil-input-campo" type="password" />
                                        </div>
                                        <div className="meu-perfil-input-campo-junto input">
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
            </section>
        </>
    )
}
export default MeuPerfilCliente;