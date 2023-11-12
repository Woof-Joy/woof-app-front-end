import React from "react"
import MenuCliente from "./MenuCliente"
import HistoricoChat from "./ChatHistorico";
import AreaChat from "./ChatArea";
import "../css/chat.css"

import { Link } from 'react-router-dom';

function Chat() {
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
} export default Chat;