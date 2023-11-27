import React, { useEffect, useState } from "react";
import IconSearch from "../../imgs/chat/icon-search.png"
import ContatoChat from "./ChatContato"
import "../../css/chat.css"
import woofJoyApi from "../../woof-joy-api"

function HistoricoChat() {
    const userIdLogado = 6;
    const token =
        "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGF0ZUBlbWFpbC5jb20iLCJyb2xlIjoiQyIsImlhdCI6MTcwMDUxMDkyMCwiZXhwIjoxNzA0MTEwOTIwfQ.zUJ0ofjvljd0bDxmUaGtrWXGvqnlh72e9p0EUrSp-wZ2c35CODa2AewD1eSGmxe6";


    // const [contatoInfo, setContatoInfo] = useState({
    //     id: 3,
    //     nome: "Teste historico",
    //     imagem: ""
    // })

    const [contatoInfo, setContatoInfo] = useState([]);

    function getMensagensHistory() {
        woofJoyApi
            .get(`/notification/${userIdLogado}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
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
                            />
                        )}

                    </div>
                </div>
            </section>
        </>
    )
} export default HistoricoChat;