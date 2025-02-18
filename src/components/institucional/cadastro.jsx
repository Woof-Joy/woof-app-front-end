import React, { useState } from "react";
import "../../css/cadastro.css";
import woofJoyApi from "../../woof-joy-api";
import customEnv from "../../process";

import imgLogoWoofJoy from "../../imgs/logo-branca-footer.png"
import imgIconBtnVoltar from "../../imgs/icon-voltar.png"
import imgIconAtencao from "../../imgs/cadastro/icon-atencao.png"

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cadastro() {
    const navigate = useNavigate()
    const [mensagemErro, setMensagemErro] = useState({
        texto: "",
        style: { color: "red" }
    });

    const [usuario, setUsuario] = useState({
        nome: "filipe",
        sobrenome: "ricardo",
        cpf: "47010211809",
        cep: "09791160",
        email: "fi@sptech.com",
        senha: "senha1234",
        dataNasc: "2001-12-18",
        numero: "566",
        rua: "",
        cidade: "",
        estado: ""
    });

    const [cepResultado, setCepResultado] = useState({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const userID = customEnv.tipo;

    let cepTimer;

    const criarUsuario = () => {
        woofJoyApi
            .post(`/users/${userID}`, usuario)
            .then((resposta) => {
                alert(resposta.status);
                navigate("/login-inicial")
                toast.success('Usuário cadastrado com sucesso!')
            })
            .catch((erro) => {
                // alert(`Erro ao criar o usuário: ${erro.message}`);
                // alert(usuario);
                console.log(usuario)
                toast.error('Erro ao cadastrar usuário')
            });
    };

    const buscarPorCep = (cep) => {
        woofJoyApi
            .get(`/cep/${cep}`)
            .then((resposta) => {
                setCepResultado({
                    cep: resposta.data.cep,
                    logradouro: resposta.data.logradouro,
                    complemento: resposta.data.complemento,
                    bairro: resposta.data.bairro,
                    localidade: resposta.data.localidade,
                    uf: resposta.data.uf,
                });

                // setMensagemErro({
                //     texto: "Cep Encontrado",
                //     style: { color: "green" }
                // });

                console.log(resposta.message)
                console.log(resposta.status)

                setUsuario({
                    rua: resposta.data.logradouro,
                    cidade: resposta.data.localidade,
                    estado: resposta.data.uf
                })
            })
            .catch((erro) => {
                console.log(`${erro.message}`);
                console.log(`${erro.status}`)

                // setMensagemErro({
                //     texto: "Cep Inválido",
                //     style: { color: "red" }
                // });

                toast.error('CEP Inválido')
            });
    };

    const handleCepChange = (event) => {
        const { value } = event.target;
        setUsuario({ ...usuario, cep: value });

        clearTimeout(cepTimer);

        cepTimer = setTimeout(() => {
            buscarPorCep(value);
        }, 1000);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    // Validação da input de e-mail
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i;
        return regex.test(email);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setIsValidEmail(validateEmail(newEmail));
    };

    // Validação da confirmação de senha
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkPasswordsMatch(event.target.value, confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        checkPasswordsMatch(password, event.target.value);
    };

    const checkPasswordsMatch = (password, confirmPassword) => {
        setPasswordsMatch(password === confirmPassword);
    };

    return (
        <body className="cadastro-body">

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
                    <Link to="/" className="cadastro-button_voltar" onClick={() => criarUsuario(userID)}>
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
                            <p className="cadastro-texto-guia">Endereço:</p>
                            <div className="cadastro-endereco">
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="cep">CEP</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="cep"
                                            value={usuario.cep}
                                            onChange={handleCepChange}
                                            onBlur={buscarPorCep}
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
                                <div className="cadastro-campoSozinho">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="rua">Rua</label>
                                        <input
                                            className="cadastro-inputEmail"
                                            type="text"
                                            name="rua"
                                            value={cepResultado.logradouro}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="cidade">Cidade</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="cidade"
                                            value={cepResultado.localidade}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="estado">Estado</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="text"
                                            name="estado"
                                            value={cepResultado.uf}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cadastro-container-login">
                            <p className="cadastro-texto-guia">Login:</p>
                            <div className="cadastro-login">
                                <div className="cadastro-campoSozinho">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="email">E-mail</label>
                                        <input
                                            className="cadastro-inputEmail"
                                            type="text"
                                            name="email"
                                            value={usuario.email}
                                            onChange={(e) => {
                                                handleEmailChange(e);
                                                handleInputChange(e)
                                            }}
                                        />
                                        {!isValidEmail &&
                                            <div className="cadastro-menssagemErro">
                                                <img src={imgIconAtencao} alt="" />
                                                <span>Digite um e-mail válido</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="cadastro-camposJuntos">
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="senha">Senha</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="password"
                                            name="senha"
                                            value={usuario.senha}
                                            onChange={(e) => {
                                                handlePasswordChange(e);
                                                handleInputChange(e)
                                            }}
                                        />
                                        {/* <div className="cadastro-menssagemErro">
                                            <img src={imgIconAtencao} alt="" />
                                            <span>Digite uma senha válida</span>
                                        </div> */}
                                    </div>
                                    <div className="cadastro-campoForm">
                                        <label htmlFor="confirmacaoSenha">Confirmação de senha</label>
                                        <input
                                            className="cadastro-inputOutros"
                                            type="password"
                                            name="confirmacaoSenha"
                                            value={usuario.confirmacaoSenha}
                                            onChange={(e) => {
                                                handleConfirmPasswordChange(e);
                                                handleInputChange(e)
                                            }}
                                        />
                                        {!passwordsMatch &&
                                            <div className="cadastro-menssagemErro">
                                                <img src={imgIconAtencao} alt="" />
                                                <span>Digite a mesma senha</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cadastro-campoCadastre">
                        <button className="cadastro-button_entrar" onClick={criarUsuario}>Criar Conta</button>
                        <span className="cadastro-span-chamativo-login">Já tem uma conta?
                            <Link to="/login-inicial" className="cadastro-linkForm"><b>Conecte-se</b></Link>
                        </span>
                    </div>
                </section>
            </main>
        </body>

    );
}

export default Cadastro;
