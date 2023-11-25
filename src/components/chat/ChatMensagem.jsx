import React from "react"
import "../../css/chat.css"

function MensagemChat(props) {
    const {
        conteudoMensagem = "props mensag em"
    } = props

    return (
        <>
            <section className="mensagem-chat-container">
                <p>{conteudoMensagem}</p>
            </section>
        </>
    )
} export default MensagemChat;