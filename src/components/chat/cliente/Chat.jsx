import React from "react"
import HistoricoChat from "./ChatHistorico";
import AreaChat from "./ChatArea";
import "../../../css/chat.css"
import Menu from "../../componentes-gerais/MenuCliente"

function Chat() {

    
    return (
        <>
            <section className="chat-container">
                <div className="chat-menu-cliente">
                      <Menu />
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