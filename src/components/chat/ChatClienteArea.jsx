import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import "../../css/chat.css"
import MensagemChat from "./ChatMensagem"
import ExemploFotoContato from "../../imgs/chat/exemplo-foto-contato.png"
import IconEnvio from "../../imgs/chat/icon-envio.png"

function AreaChat() {

    //CORRETO
    // const userIdLogado = sessionStorage.getItem("userId")
    // const token = sessionStorage.getItem("token")

    //APAGAR PÓS TESTE
    const userIdLogado = 6
    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGF0ZUBlbWFpbC5jb20iLCJyb2xlIjoiQyIsImlhdCI6MTcwMDUxMDkyMCwiZXhwIjoxNzA0MTEwOTIwfQ.zUJ0ofjvljd0bDxmUaGtrWXGvqnlh72e9p0EUrSp-wZ2c35CODa2AewD1eSGmxe6"

    const [sendBody, setsendBody] = useState({
        message: "teste Async enviar",
        idRemetente: userIdLogado,
        idDestinatario: 3,
        tipo: "doacao",
    })

    const [mensagemBody, setMensagemBody] = useState([])

    //localhost:8080/notification/doacao/22/20

    function getMensagensHistory() {
        woofJoyApi
            .get(`/notification/doacao/${userIdLogado}/3`,
                {
                    headers: {
                        Authorization: ` Bearer ${token}`
                    }
                })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                setMensagemBody(response.data)

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    useEffect(() => {
        getMensagensHistory();
        const intervalId = setInterval(() => {
            getMensagensHistory();
            
        }, 0.01 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);




    function sendMensage() {
        woofJoyApi
            .post(`/notification`, sendBody,
                {
                    headers: {
                        Authorization: ` Bearer ${token}`
                    }
                })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                alert("acerto")

                setsendBody({
                    message: "teste Async enviar",
                    idRemetente: userIdLogado,
                    idDestinatario: 3,
                    tipo: "doacao",
                });

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
                alert("erro")

            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setsendBody({
            ...sendBody,
            [name]: value
        });
    };





    return (
        <>
            <section className="area-chat-container">
                <div className="area-chat-cabecalho">
                    <div className="area-chat-cabecalho-contato">
                        <img className="area-chat-foto-contato" src={ExemploFotoContato} alt="" />
                        <p className="area-chat-nome-contato">Rafael Marcos</p>
                    </div>
                    <button className="area-chat-btn-agendar-servico">Agendar Serviço</button>
                </div>
                <div className="area-chat-mensagens">
                    {mensagemBody && mensagemBody.length > 0 ? (

                        mensagemBody?.map((m) => (

                            < div className={m.fkRemetente == userIdLogado ? 'area-chat-mensagens-enviadas' : 'area-chat-mensagens-recebidas'} key={m.id} >
                                {
                                    m.mensagem && (
                                        <MensagemChat
                                            key={m.id}
                                            conteudoMensagem={m.mensagem}
                                        />
                                    )}
                            </div>
                        ))
                    ) : (

                        <div className="default-mensagem-area-chat-mensagens">Seja o primeiro a enviar uma mensagem</div>
                    )}









                </div>
                <div className="area-chat-campo-envio">
                    <input
                        className="area-chat-input-envio"
                        type="text"
                        value={sendBody.message}
                        name="message"
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
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
            </section >

        </>
    )
} export default AreaChat;