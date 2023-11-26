import React from "react"
import MenuParceiro from "../componentes-gerais/MenuParceiro"
import HistoricoChat from "./ChatParceiroHistorico";
import AreaChat from "./ChatParceiroArea";
import "../../css/chat.css"

import { Link } from 'react-router-dom';

function ChatParceiro() {
    return (
        <>
            <section className="chat-container">
                <div className="chat-menu-cliente">
                    <MenuParceiro />
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
} export default ChatParceiro;