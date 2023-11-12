import React from "react"
import "../css/chat.css"
import MensagemChat from "./ChatMensagem"
import ExemploFotoContato from "../imgs/chat/exemplo-foto-contato.png"
import IconEnvio from "../imgs/chat/icon-envio.png"

function AreaChat() {
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
                    <div className="area-chat-mensagens-recebidas">
                        <MensagemChat />
                        <MensagemChat />
                    </div>
                    <div className="area-chat-mensagens-enviadas">
                        <MensagemChat />
                        <MensagemChat />
                    </div>
                </div>
                <div className="area-chat-campo-envio">
                    <input className="area-chat-input-envio" type="text" />
                    <img src={IconEnvio} alt="" />
                </div>
            </section>

        </>
    )
} export default AreaChat;