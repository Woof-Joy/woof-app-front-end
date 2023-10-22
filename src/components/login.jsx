import React, { useState } from "react";
import woofJoyApi from "../woof-joy-api";
import "../css/login.css"
import customEnv from "../process";
import SESSION_STORAGE from "../sessionStorage";

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


            <body>
                <main>
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

                        <button className="button_entrar" onClick={loginUsuario}>Entrar</button>

                        <span className="span_cadastrase">Ainda não tem uma conta?<a className="a_cadastrase" href="cadastro.html" />
                            <a href="./cadastro.html"><b>Cadastre-se</b></a> </span>



                        <div className="div_botao_voltar">
                            <button className="button_voltar" onclick="window.location.href='./index.html'">
                                <img src="./imgs/Mask group.png" alt="Ícone de curtir" />
                                <b>Voltar</b>
                            </button>
                        </div>


                    </div>
                    <div className="container2">
                        <div calss="containerLogo">
                            <img src="./imgs/logo-branca-footer.png" alt="Logo da WoofJoy" className="logo" />
                        </div>


                    </div>

                </main>
            </body>
        </>
    )
}
export default Login;