import React from "react"
import "../../../css/chat.css"
import MensagemChat from "../ChatMensagem"
import foto from "../../../imgs/mock/semfoto.jpg";
import IconEnvio from "../../../imgs/chat/icon-envio.png";

function AreaChat() {
    return (
        <>
            <section className="area-chat-cabecalho">
                <div className="area-chat-cabecalho-contato">
                    <img className="area-chat-foto-contato" src={foto} alt="" />
                    <p className="area-chat-nome-contato">Rafael Marcos</p>
                </div>
            </section>
            <section className="area-chat-container">
                <div className="area-chat-mensagens">
                    <div className="area-chat-mensagens-recebidas">
                        <MensagemChat />
                        <MensagemChat />
                    </div>
                    <div className="area-chat-mensagens-enviadas">
                        <MensagemChat />
                        <MensagemChat />
                        <MensagemChat />
                        <MensagemChat />
                        <MensagemChat />
                    </div>
                </div>
            </section>
            <section className="area-chat-campo-envio">
                <input className="area-chat-input-envio" type="text" />
                <img className="area-chat-icon-btn-envio" src={IconEnvio} alt="" />
            </section>
        </>
    )
} export default AreaChat;