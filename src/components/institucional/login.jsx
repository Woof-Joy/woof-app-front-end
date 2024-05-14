import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import "../../css/login.css"
import imgLogoWoffJoy from "../../imgs/logo-branca-footer.png"
import imgIconVoltar from "../../imgs/icon-voltar.png"
import customEnv from "../../process";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Login() {
    const roleResult = sessionStorage.getItem("role")
    const navigate = useNavigate();


    const [usuarioLogin, setUsuarioLogin] = useState({
        userId: "",
        email: "",
        senha: "",
        role: roleResult,
        token: ""
    });

    const loginUsuario = () => {
        woofJoyApi
            .post(`/users/login`, usuarioLogin)
            .then((resposta) => {
                console.log(resposta.data);
                setUsuarioLogin(resposta.data)
                sessionStorage.setItem("userId", resposta.data.userId)
                sessionStorage.setItem("email", resposta.data.email)
                sessionStorage.setItem("nome", resposta.data.nome)
                sessionStorage.setItem("token", resposta.data.token)
                woofJoyApi
                    .get(`/users/${resposta.data.userId}`)
                    .then((subResponse) => {
                        console.log(resposta.data)
                        sessionStorage.setItem("endereco", `${subResponse.data.endereco.localidade}, ${subResponse.data.endereco.uf}`)
                    })
                    .catch((erro) => {
                        console.log(erro)
                        alert("Erro ao requisitar dados do cliente logado" + erro)
                    })

                if (roleResult === "C") {
                    navigate("/home-cliente")
                } else {
                    navigate("/chat")
                }

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
                    <div className="login-container1">
                        <span className="login-span_bem_vindo">
                            Bem-vindo(a) de volta!
                        </span>
                        <div id="mensagemErro" className="login-div_mensagem_erro"> Usuário ou senha incorretos! Por favor, tente novamente.
                        </div>
                        <label className="login-label" htmlFor="email">E-mail
                            <input className="login-input" type="text" id="email" placeholder=""
                                name="email"
                                value={usuarioLogin.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className="login-label" htmlFor="senha">Senha
                            <input className="login-input" type="text" id="senha" placeholder=""
                                name="senha"
                                value={usuarioLogin.senha}
                                onChange={handleInputChange}

                            />
                        </label>
                        <button className="login-button_entrar" onClick={loginUsuario}>Entrar</button>
                        <span className="span_cadastrase">Ainda não tem uma conta?<a className="a_cadastrase" href="cadastro.html" />
                            <Link to="/cadastro-inicial"><b>Cadastre-se</b></Link> </span>
                        <div className="div_botao_voltar">
                            <Link to="/" className="button_voltar">
                                <img src={imgIconVoltar} alt="Ícone de curtir" />
                                <b>Voltar</b>
                            </Link>
                        </div>
                    </div>
                    <div className="login-container2">
                        <div className="login-containerLogo">
                            <img src={imgLogoWoffJoy} alt="Logo da WoofJoy" className="login-logo" />
                        </div>
                    </div>

                </main>
            </body>
        </>
    )
}
export default Login;