import React, { useEffect, useState } from "react";
import woofJoyApi from "../../../woof-joy-api";
import "../../../css/chat.css";
import MensagemChat from "../ChatMensagem";
import ExemploFotoContato from "../../../imgs/chat/exemplo-foto-contato.png";
import IconEnvio from "../../../imgs/chat/icon-envio.png";
import ModalAgendarServico from "../../modais/ModalAgendarServico";
import foto from "../../../imgs/mock/semfoto.jpg";

function AreaChat() {
    const contatoIdAtual = sessionStorage.getItem("contatoId");
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");
    const contatoNome = sessionStorage.getItem("contatoName");

    const [sendBody, setsendBody] = useState({
        message: "",
        idRemetente: userId,
        idDestinatario: contatoIdAtual,
        tipo: "doacao",
    });

    const [mensagemBody, setMensagemBody] = useState([]);
    const [modalDisplay, setModalDisplay] = useState(0);
    const [servicoModal, setServicoModal] = useState(false);

    function getMensagensHistory() {
        woofJoyApi
            .get(`/notification/${userId}/${contatoIdAtual}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.status);
                setMensagemBody(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.message);
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setsendBody({
            ...sendBody,
            [name]: value,
        });
    };

    const sendMensage = () => {
        if (sendBody.message.trim() === "") return;

        woofJoyApi
            .post(`/sendMessage`, sendBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.status);
                getMensagensHistory();
                setsendBody({ ...sendBody, message: "" });
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.message);
            });
    };

    const setDisplayFlex = () => {
        setModalDisplay(1);
        setServicoModal(true);
    };

    const setModelCancelar = () => {
        setModalDisplay(0);
        setServicoModal(false);
    };

    useEffect(() => {
        getMensagensHistory();
        const intervalId = setInterval(() => {
            getMensagensHistory();
        }, 0.01 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, [userId, contatoIdAtual]);

    return (
        <>
            {contatoIdAtual === null || contatoIdAtual === "" ? null : (
                <section className="area-chat-cabecalho">
                    <div className="area-chat-cabecalho-contato">
                        {contatoNome ? (
                            <>
                                <img
                                    className="area-chat-foto-contato"
                                    src={foto}
                                    alt=""
                                />
                                <p className="area-chat-nome-contato">{contatoNome}</p>
                            </>
                        ) : null}
                    </div>

                    {role === 'C' && (
                        <button
                            className="area-chat-btn-agendar-servico"
                            onClick={setDisplayFlex}
                        >
                            Agendar Serviço
                        </button>
                    )}
                </section>
            )}
            <section className="area-chat-container">
                <div className="area-chat-mensagens">
                    {mensagemBody && mensagemBody.length > 0 ? (
                        mensagemBody?.map((m) => (
                            <div
                                className={
                                    m.fkRemetente == userId
                                        ? "area-chat-mensagens-enviadas"
                                        : "area-chat-mensagens-recebidas"
                                }
                                key={m.id}
                            >
                                {m.mensagem && (
                                    <MensagemChat key={m.id} conteudoMensagem={m.mensagem} />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="default-mensagem-area-chat-mensagens">
                            Seja o primeiro a enviar uma mensagem
                        </div>
                    )}
                    {servicoModal === true && (
                        <ModalAgendarServico
                            opacityOn={modalDisplay}
                            idParceiro={userId}
                            cancelarOn={() => setModelCancelar()}
                            parceiroWoofJoy={contatoNome}
                        />
                    )}
                </div>
            </section>
            <section className="area-chat-campo-envio">
                <input
                    className="area-chat-input-envio"
                    type="text"
                    value={sendBody.message}
                    name="message"
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMensage();
                        }
                    }}
                />
                <img
                    className="area-chat-icon-btn-envio"
                    onClick={sendMensage}
                    src={IconEnvio}
                    alt=""
                />
            </section>
        </>
    );
}

export default AreaChat;
