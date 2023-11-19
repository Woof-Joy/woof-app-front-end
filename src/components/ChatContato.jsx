import React from "react"
import ExemploFotoContato from "../imgs/chat/exemplo-foto-contato.png"
import "../css/chat.css"

function ContatoChat() {
    return(
        <>
            <section className="contato-chat-container">
                <img className="contato-chat-foto" src={ExemploFotoContato} alt="hist-chat-foto-contato" />
                <p className="contato-chat-nome">Exemplo Pessoa</p>
            </section>
        </>
    )
} export default ContatoChat;