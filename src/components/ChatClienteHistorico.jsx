import React from "react"
import IconSearch from "../imgs/chat/icon-search.png"
import ContatoChat from "./ChatContato"
import "../css/chat.css"

function HistoricoChat() {
    return (
        <>
            <section className="hist-chat-container">
                <p className="hist-chat-titulo">Histórico</p>
                <div className="hist-chat-barra-pesquisa">
                    <img className="hist-chat-icon-search" src={IconSearch} alt="" />
                    <input className="hist-chat-input-search" type="text" />
                </div>
                <div className="hist-chat-buttons">
                    <button className="hist-chat-btn-parceiro">Parceiro</button>
                    <button className="hist-chat-btn-doacao">Doação</button>
                </div>
            </section>
            <section className="hist-chat-container-lista-contatos">
                <div className="hist-chat-lista-contatos">
                    <ContatoChat />
                    <ContatoChat />
                    <ContatoChat />
                    <ContatoChat />
                    <ContatoChat />
                    <ContatoChat />
                    <ContatoChat />
                </div>
            </section>

        </>
    )
} export default HistoricoChat;