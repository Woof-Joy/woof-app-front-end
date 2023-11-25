import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import "../../css/chat.css";
import MensagemChat from "./ChatMensagem";
import ExemploFotoContato from "../../imgs/chat/exemplo-foto-contato.png";
import IconEnvio from "../../imgs/chat/icon-envio.png";
import ModalAgendarServico from "../modais/ModalAgendarServico";

function AreaChat() {
    // const userIdLogado = sessionStorage.getItem("userId")
    // const contatoIdAtual = sessionStorage.getItem("contatoId")

    const userIdLogado = 6;
    const contatoIdAtual = 3;
    const contatoNome = sessionStorage.getItem("contatoName")
    const token =
        "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGF0ZUBlbWFpbC5jb20iLCJyb2xlIjoiQyIsImlhdCI6MTcwMDUxMDkyMCwiZXhwIjoxNzA0MTEwOTIwfQ.zUJ0ofjvljd0bDxmUaGtrWXGvqnlh72e9p0EUrSp-wZ2c35CODa2AewD1eSGmxe6";

    const [sendBody, setsendBody] = useState({
        message: "olá",
        idRemetente: userIdLogado,
        idDestinatario: contatoIdAtual,
        tipo: "doacao",
    });

    const [mensagemBody, setMensagemBody] = useState([]);
    const [modalDisplay, setModalDisplay] = useState(0);

    function getMensagensHistory() {
        woofJoyApi
            .get(`/notification/doacao/${userIdLogado}/${contatoIdAtual}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                setMensagemBody(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    function sendMensage() {
        woofJoyApi
            .post(`/notification`, sendBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);

                setsendBody({
                    message: "",
                    idRemetente: userIdLogado,
                    idDestinatario: 3,
                    tipo: "doacao",
                });
                setModelCancelar()

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);

            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setsendBody({
            ...sendBody,
            [name]: value,
        });
    };

    const setDisplayFlex = () => {
        setModalDisplay(1);
    };

    const setModelCancelar = () => {
        setModalDisplay(0);
    };

    useEffect(() => {
        getMensagensHistory();
        const intervalId = setInterval(() => {
            getMensagensHistory();
        }, 0.01 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="area-chat-container">
                <div className="area-chat-cabecalho">
                    <div className="area-chat-cabecalho-contato">
                        <img
                            className="area-chat-foto-contato"
                            src={ExemploFotoContato}
                            alt=""
                        />
                        <p className="area-chat-nome-contato">{contatoNome} + {contatoIdAtual}</p>
                    </div>
                    <button
                        className="area-chat-btn-agendar-servico"
                        onClick={setDisplayFlex}
                    >
                        Agendar Serviço
                    </button>
                </div>
                <div className="area-chat-mensagens">
                    {mensagemBody && mensagemBody.length > 0 ? (
                        mensagemBody?.map((m) => (
                            <div
                                className={
                                    m.fkRemetente == userIdLogado
                                        ? "area-chat-mensagens-enviadas"
                                        : "area-chat-mensagens-recebidas"
                                }
                                key={m.id}
                            >
                                {m.mensagem && (
                                    <MensagemChat key={m.id} conteudoMensagem={m.mensagem} />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="default-mensagem-area-chat-mensagens">
                            Seja o primeiro a enviar uma mensagem
                        </div>
                    )}
                    <ModalAgendarServico opacityOn={modalDisplay} idParceiro={userIdLogado} cancelarOn={setModelCancelar} sendOn={sendMensage} />
                </div>
                <div className="area-chat-campo-envio">
                    <input
                        className="area-chat-input-envio"
                        type="text"
                        value={sendBody.message}
                        name="message"
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMensage();
                            }
                        }}
                    />
                    <img
                        className="area-chat-icon-btn-envio"
                        onClick={sendMensage}
                        src={IconEnvio}
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}

export default AreaChat;
