import React from "react";
import "../css/login.css"

function Login() {
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
                            <input type="text" id="email" placeholder="" />
                        </label>

                        <label for="senha">Senha
                            <input type="password" id="senha" placeholder="" />
                        </label>

                        <button className="button_entrar">Entrar</button>

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