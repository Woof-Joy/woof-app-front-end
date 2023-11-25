import React, { useEffect, useState } from "react";
import IconSearch from "../../imgs/chat/icon-search.png"
import ContatoChat from "./ChatContato"
import "../../css/chat.css"
import woofJoyApi from "../../woof-joy-api"

function HistoricoChat() {
    const userIdLogado = 22

    const [contatoInfo, setContatoInfo] = useState({
        id: "",
        userId: 1,
        nome: "front",
        imagem: ""
    })

    // useEffect(() => {
    //     listar();

    //     const intervalId = setInterval(() => {
    //         listar();
    //     }, 1 * 60 * 1000);  

    //     return () => clearInterval(intervalId);
    // }, []);

    // function listar() {
    //     woofJoyApi
    //         .get('/notification/${userIdLogado}')
    //         .then((response) => {
    //             console.log(response.data);
    //             alert("acerto")
    //             setContatoInfo(response.data);
    //         })
    //         .catch((erroOcorrido) => {
    //             console.log(erroOcorrido);
    //             alert("erro")

    //         });
    // }


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
                    <ContatoChat
                        key={contatoInfo.userId}
                        nome={contatoInfo.nome}
                    />
                </div>
            </section>

        </>
    )
} export default HistoricoChat;