import React from "react"
import MenuCliente from "../../componentes-gerais/MenuCliente"
import HistoricoChat from "./ChatClienteHistorico";
import AreaChat from "./ChatClienteArea";
import "../../../css/chat.css"

import { Link } from 'react-router-dom';

function ChatCliente() {

    
    return (
        <>
            <section className="chat-container">
                <div className="chat-menu-cliente">
                    <MenuCliente />
                </div>
                <div className="chat-hist-chat">
                    <HistoricoChat />
                </div>
                <div className="chat-area-chat">
                    <AreaChat />
                </div>
            </section>
        </>
    )
} export default ChatCliente;