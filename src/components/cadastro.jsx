import React, { useState } from "react";
import Style from "../css/cadastro.css";
import AllStyle from "../css/styleAll.css";
import woofJoyApi from "../woof-joy-api";

function Cadastro() {
    const [mensagemErro, setMensagemErro] = useState({
        texto: "",
        style: { color: "red" }
    });

    const [usuario, setUsuario] = useState({
        nome: "",
        sobrenome: "",
        cpf: "",
        dataNasc: "",
        cep: "",
        estado: "",
        cidade: "",
        rua: "",
        numero: "",
        email: "",
        senha: "",
        confirmacaoSenha: ""
    });

    const [cepResultado, setCepResultado] = useState({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        usuario: null
    });

    const userID = 0;

    let cepTimer;

    const criarUsuario = () => {
        woofJoyApi
            .post(`/users/${userID}`, usuario)
            .then((resposta) => {
                alert(resposta.status);
                setUsuario(resposta.data);
            })
            .catch((erro) => {
                alert(`Erro ao criar o usuário: ${erro.message}`);
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
                    usuario: null
                });
                setMensagemErro({
                    texto: "Cep Encontrado",
                    style: { color: "green" }
                });
            })
            .catch((erro) => {
                console.log(`${erro.message}`);
                setMensagemErro({
                    texto: "Cep Inválido",
                    style: { color: "red" }
                });
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
    return (
        <body>
            <main>
                <section className="sessionImg">
                    <div className="containerText">
                        <p className="text">
                            A vida está agitada, deixando seu cão solitário?
                            Conecte-se a cuidadores amorosos agora mesmo!
                        </p>
                    </div>
                    <div className="containerLogo">
                        <img src="./imgs/logo-branca-footer.png" alt="Logo da WoofJoy" className="logo" />
                    </div>
                </section>

                <section className="sessionForm">
                    <div className="campoTitlulo">
                        <h1>Crie sua conta agora</h1>
                    </div>
                    <div className="form">
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="nome"
                                    value={usuario.nome}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="campoForm">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="sobrenome"
                                    value={usuario.sobrenome}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="cpf">CPF</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="cpf"
                                    value={usuario.cpf}
                                    onChange={handleInputChange}
                                    placeholder="000.000.000-00"
                                />
                            </div>
                            <div className="campoForm">
                                <label htmlFor="dataNasc">Data de nascimento</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="dataNasc"
                                    value={usuario.dataNasc}
                                    onChange={handleInputChange}
                                    placeholder="00/00/0000"
                                />
                            </div>
                        </div>
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="cep">CEP</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="cep"
                                    value={usuario.cep}
                                    onChange={handleCepChange}
                                    onBlur={buscarPorCep}
                                    placeholder="00000-000"
                                />
                                <label style={mensagemErro.style} className="mensagemErro" htmlFor="cep" >{mensagemErro.texto}</label>

                            </div>

                            <div className="campoForm">
                                <label htmlFor="estado">Estado</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="estado"
                                    value={cepResultado.uf}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="cidade">Cidade</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="cidade"
                                    value={cepResultado.localidade}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="campoForm">
                                <label htmlFor="rua">Rua</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="rua"
                                    value={cepResultado.logradouro}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="numero">Número</label>
                                <input
                                    className="inputOutros"
                                    type="text"
                                    name="numero"
                                    value={usuario.numero}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="campoSozinho">
                            <div className="campoForm">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    className="inputEmail"
                                    type="text"
                                    name="email"
                                    value={usuario.email}
                                    onChange={handleInputChange}
                                />
                                <p className="menssagemErro">
                                    <img src="./imgs/Mask group (1).png" alt="" /> Digite um email válido
                                </p>
                            </div>
                        </div>
                        <div className="camposJuntos">
                            <div className="campoForm">
                                <label htmlFor="senha">Senha</label>
                                <input
                                    className="inputOutros"
                                    type="password"
                                    name="senha"
                                    value={usuario.senha}
                                    onChange={handleInputChange}
                                />
                                <p className="menssagemErro">
                                    <img src="./imgs/Mask group (1).png" alt="" /> Digite uma senha válida
                                </p>
                            </div>
                            <div className="campoForm">
                                <label htmlFor="confirmacaoSenha">Confirmação de senha</label>
                                <input
                                    className="inputOutros"
                                    type="password"
                                    name="confirmacaoSenha"
                                    value={usuario.confirmacaoSenha}
                                    onChange={handleInputChange}
                                />
                                <p className="menssagemErro">
                                    <img src="./imgs/Mask group (1).png" alt="" /> Senhas Incompatíveis
                                </p>
                            </div>
                        </div>
                        <div className="campoCadastre">
                            <button className="button_entrar" onClick={criarUsuario}>
                                Criar Conta
                            </button>
                            <p>
                                Já tem uma conta?{" "}
                                <a className="linkForm" href="./login.html">
                                    <b>Conecte-se</b>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <div className="div_botao_voltar">
                <button className="button_voltar" onClick={() => criarUsuario(userID)}>
                    <img src="./imgs/Mask group.png" alt="Ícone de curtir" />
                    <b>Voltar</b>
                </button>
            </div>
        </body>
    );
}

export default Cadastro;
