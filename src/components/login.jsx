import React, { useState } from "react";
import woofJoyApi from "../woof-joy-api";
import "../css/login.css"

import imgLogoWoffJoy from "../imgs/logo-branca-footer.png"
import imgIconVoltar from "../imgs/icon-voltar.png"

import customEnv from "../process";
import SESSION_STORAGE from "../sessionStorage";

import { Link } from 'react-router-dom';

function setSessiomStorage(name, value) {
    SESSION_STORAGE[name] = value;

}

const roleResult = customEnv.role


function Login() {

    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: "",
        role: roleResult,

    });


    const loginUsuario = () => {
        woofJoyApi
            .post(`/users/login`, usuarioLogin)
            .then((resposta) => {
                console.log(resposta.data);
                setUsuarioLogin(resposta.data)
                alert("Login realizado com sucesso")
                setSessiomStorage("email", resposta.email)
                setSessiomStorage("token", resposta.token)
            })
            .catch((erro) => {
                console.log(erro)
                alert(`Erro ao logar o usuário: ${erro.message}`);

            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuarioLogin({
            ...usuarioLogin,
            [name]: value
        });
    };

    return (
        <>
            <body className="login-body">
                <main className="login-main">
                    <div className="container1">
                        <span className="span_bem_vindo">
                            Bem-vindo(a) de volta!
                        </span>
                        <div id="mensagemErro" className="div_mensagem_erro"> Usuário ou senha incorretos! Por favor, tente novamente.
                        </div>
                        <label for="email">E-mail
                            <input type="text" id="email" placeholder=""
                                name="email"
                                value={usuarioLogin.email}
                                onChange={handleInputChange}

                            />
                        </label>
                        <label for="senha">Senha
                            <input type="text" id="senha" placeholder=""
                                name="senha"
                                value={usuarioLogin.senha}
                                onChange={handleInputChange}

                            />
                        </label>
                        <Link to="/home-cliente" className="button_entrar" onClick={loginUsuario}>Entrar</Link>
                        <span className="span_cadastrase">Ainda não tem uma conta?<a className="a_cadastrase" href="cadastro.html" />
                            <Link to="/cadastro-inicial"><b>Cadastre-se</b></Link> </span>
                        <div className="div_botao_voltar">
                            <Link to="/" className="button_voltar">
                                <img src={imgIconVoltar} alt="Ícone de curtir" />
                                <b>Voltar</b>
                            </Link>
                        </div>
                    </div>
                    <div className="container2">
                        <div calss="containerLogo">
                            <img src={imgLogoWoffJoy} alt="Logo da WoofJoy" className="logo" />
                        </div>
                    </div>

                </main>
            </body>
        </>
    )
}
export default Login;