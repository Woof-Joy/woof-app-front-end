import React, { useState } from "react";
import "../../css/cadastro.css";
import woofJoyApi from "../../woof-joy-api";
import customEnv from "../../process";

import imgLogoWoofJoy from "../../imgs/logo-branca-footer.png";
import imgIconBtnVoltar from "../../imgs/icon-voltar.png";
import imgIconAtencao from "../../imgs/cadastro/icon-atencao.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../componentes-gerais/button";

function Cadastro() {
    const navigate = useNavigate();
    const role = sessionStorage.getItem("role");

    const [mensagemErro, setMensagemErro] = useState({
        texto: "",
        style: { color: "red" },
    });

    const [usuario, setUsuario] = useState({
        nome: "filipe",
        sobrenome: "ricardo",
        cpf: "47010211809",
        email: "fi@sptech.com",
        senha: "123",
        confirmacaoSenha: "",
        dataNasc: "2001-12-18",
        cep: "09791-160",
        numero: "566",
        rua: "",
        cidade: "",
        estado: "",
    });


    const criarUsuario = () => {
        woofJoyApi
            .post(`/users/${role}`, usuario)
            .then((resposta) => {
                if (role === "C") {
                    navigate("/login");
                }
                else {
                    navigate("/feed-parceiro-edit");

                }
                toast.success("Usuário cadastrado com sucesso!");
            })
            .catch((erro) => {
                console.log(usuario);
                toast.error("Erro ao cadastrar usuário");
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i;
        return regex.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setIsValidEmail(validateEmail(newEmail));
        handleInputChange(event);
    };

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkPasswordsMatch(event.target.value, confirmPassword);
        handleInputChange(event);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        checkPasswordsMatch(password, event.target.value);
        handleInputChange(event);
    };

    const checkPasswordsMatch = (password, confirmPassword) => {
        setPasswordsMatch(password === confirmPassword);
    };

    return (
        <body className="cadastro-body">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <main className="cadastro-main">
                <section className="cadastro-sessionImg">
                    <div className="cadastro-containerText">
                        <p className="cadastro-text">
                            A vida está agitada, deixando seu cão solitário?
                            Conecte-se a cuidadores amorosos agora mesmo!
                        </p>
                    </div>
                    <div className="cadastro-containerLogo">
                        <img src={imgLogoWoofJoy} alt="Logo da WoofJoy" className="cadastro-logo" />
                    </div>
                </section>

                <section className="cadastro-div_botao_voltar">
                    <Link to="/" className="cadastro-button_voltar">
                        <img className="cadastro-img_botao_voltar" src={imgIconBtnVoltar} alt="Ícone de curtir" />
                        <b>Voltar</b>
                    </Link>
                </section>

                <section className="cadastro-sessionForm">
                    <div className="cadastro-campoTitulo">
                        <p>Crie sua conta agora</p>
                    </div>
                    <div className="cadastro-form">
                        <div className="cadastro-container-dados-pessoais">
                            <p className="cadastro-texto-guia">Dados Pessoais:</p>
                            <div className="cadastro-dados-pessoais">
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="nome"
                                            value={usuario.nome}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="sobrenome">Sobrenome</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="sobrenome"
                                            value={usuario.sobrenome}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="cpf">CPF</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="cpf"
                                            value={usuario.cpf}
                                            onChange={handleInputChange}
                                            placeholder="000.000.000-00"
                                        />
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="dataNasc">Data de nascimento</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="date"
                                            name="dataNasc"
                                            value={usuario.dataNasc}
                                            onChange={handleInputChange}
                                            placeholder="00/00/0000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cadastro-container-endereco">
                            <p className="cadastro-texto-guia-endereco">Endereço:</p>
                            <div className="cadastro-endereco">
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="cep">CEP</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="cep"
                                            value={usuario.cep}
                                            onChange={handleInputChange}
                                            placeholder="00000-000"
                                        />
                                        {/* <label style={mensagemErro.style} className="cadastro-mensagemErro" htmlFor="cep" >{mensagemErro.texto}</label> */}
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="numero">Número</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="numero"
                                            value={usuario.numero}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="cadastro-container-login">
                            <p className="cadastro-texto-guia">Dados do usuário:</p>
                            <div className="cadastro-login">
                                <div className="cadastro-campoForm">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        className={`cadastro-inputOutros ${isValidEmail ? "" : "invalid"}`}
                                        type="email"
                                        name="email"
                                        value={usuario.email}
                                        onChange={handleEmailChange}
                                    />
                                    {!isValidEmail && <p className="error-message">Email inválido</p>}
                                </div>
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="senha">Senha</label>
                                        <input
                                            className={`cadastro-inputOutros ${passwordsMatch ? "" : "invalid"}`}
                                            type="password"
                                            name="senha"
                                            value={usuario.senha}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="confirmacaoSenha">Confirmar senha</label>
                                        <input
                                            className={`cadastro-inputOutros ${passwordsMatch ? "" : "invalid"}`}
                                            type="password"
                                            name="confirmacaoSenha"
                                            value={usuario.confirmacaoSenha}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        {!passwordsMatch && <p className="error-message">As senhas não coincidem</p>}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="cadastro-container-btn">
                        <Button
                            buttonName={"Cadastrar"}
                            displayOn={"flex"}
                            fontColor={"white"}
                            buttonBackColor={"#DB4B90"}
                            buttonWidth={"50%"}
                            buttonHeigth={"30%"}
                            cursor={"pointer"}
                            onClick={() => criarUsuario()}
                        />
                    </div>
                </section>
            </main>
        </body>
    );
}

export default Cadastro;
