import React, { useEffect, useState } from "react";
import IconSearch from "../../../imgs/chat/icon-search.png"
import ContatoChat from "../ChatContato"
import "../../../css/chat.css"
import woofJoyApi from "../../../woof-joy-api"

function HistoricoChat() {
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")

 
    const [contatoInfo, setContatoInfo] = useState([]);

    function getMensagensHistory() {
        woofJoyApi
            .get(`/notification/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setContatoInfo(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    useEffect(() => {
        getMensagensHistory();
        const intervalId = setInterval(() => {
            getMensagensHistory();
        }, 0.01 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <>
            <section className="hist-chat-container">
                <p className="hist-chat-titulo">Histórico</p>
                <div className="hist-chat-barra-pesquisa">
                    <img className="hist-chat-icon-search" src={IconSearch} alt="" />
                    <input className="hist-chat-input-search" type="text" />
                </div>
                <div className="hist-chat-container-lista-contatos">
                    <div className="hist-chat-lista-contatos">
                        {contatoInfo.map((contato) =>

                            <ContatoChat
                                key={contato.id}
                                id={contato.usuario2.id}
                                nome={contato.usuario2.nomeCompleto}
                                // image={}
                            />
                        )}

                    </div>
                </div>
            </section>
        </>
    )
} export default HistoricoChat;