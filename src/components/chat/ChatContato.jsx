import React from "react"
import ExemploFotoContato from "../../imgs/chat/exemplo-foto-contato.png"
import "../../css/chat.css"

function ContatoChat(props) {
const{
nome = "teste",
imagem
} = props

    return(
        <>
            <section className="contato-chat-container">
                <img className="contato-chat-foto" src={ExemploFotoContato} alt="hist-chat-foto-contato" />
                <p className="contato-chat-nome">{nome}</p>
            </section>
        </>
    )
} export default ContatoChat;