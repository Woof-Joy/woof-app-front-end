import React, { useState, useEffect } from 'react';
import woofJoyApi from "../../woof-joy-api";
import "../../css/modal-pagamento.css";
import Button from "../componentes-gerais/button";

import imgNavLogoWoofJoy from "../../imgs/logo-preta.png";
import imgInicioChamativo from "../../imgs/img-inicio-pata.jpg";
import imgLogoWoffJoy from "../../imgs/logo-branca-footer.png";

function ModalPagamento(props) {
    const { nomeUsuario, onClose } = props;

    const [pagamentoBody, setPagamentoBody] = useState({
        amount: "40",
        description: "Pagamento concluído com sucesso"
    });

    const [responsePayment, setPayment] = useState({
        redirectUrl: ""
    });

    // useEffect(() => {
    //     if (responsePayment.redirectUrl) {
    //         console.log("Redirecionando para:", responsePayment.redirectUrl);
    //         // Abrindo a URL em uma nova aba
    //         const newWindow = window.open(responsePayment.redirectUrl, '_blank');
    //         if (newWindow) {
    //             newWindow.opener = null;
    //         } else {
    //             console.error("Navegador bloqueou a abertura de uma nova aba.");
    //             alert("Por favor, permita pop-ups para continuar.");
    //         }
    //     }
    // }, [responsePayment]);

    function postApagamento() {
        const token = sessionStorage.getItem("token");

        woofJoyApi
            .post(`/payment`, pagamentoBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log("Resposta da API:", response.data);
                if (response.data && response.data.redirectUrl) {
                    setPayment({ redirectUrl: response.data.redirectUrl });
                    window.open("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-77U645654S019294F", '_blank');
                    alert("Pagamento feito com sucesso");
                    onClose();
                } else {
                    console.error("Resposta inesperada:", response.data);
                    alert("Pagamento indisponível no momento");
                }
            })
            .catch((erroOcorrido) => {
                console.error("Erro ao fazer pagamento:", erroOcorrido);
                alert("Pagamento indisponível no momento");
            });
    }

    return (
        <section className='modal-pagemento'>
            <div className='pagamento-container-info-imagem'>
                <p onClick={onClose} style={{ fontSize: "20px", color: "white", margin: "1%", borderRadius: "100px", cursor: "pointer" }}>
                    X
                </p>
                <div className='container-imagem-pagamento'>
                    <img className='imagem-pagamento' src={imgInicioChamativo} alt="" />
                    <img className='imagem-pagamento-logo-branco' src={imgLogoWoffJoy} alt="" />
                </div>

                <div className='container-info-pagamento'>
                    <div className='info-pagamento-um'>
                        <p style={{ fontSize: "25px", color: "white" }}>Quer ganhar mais clientes?</p>
                        <p style={{ fontSize: "20px", color: "white" }}>Assine nosso plano e seja destaque no feed!</p>
                    </div>

                    <div className='info-pagamento-dois'>
                        <label className='label-pagamento-info' htmlFor="">
                            <b style={{ fontSize: "18px", color: "#DB4B90", marginTop: "2%", marginBottom: "1%" }}>BENEFÍCIOS:</b>
                            <p>✅ Cresça sua visibilidade na plataforma</p>
                            <p>✅ Gere confiança nos clientes</p>
                            <p>✅ Aumente seu número de clientes</p>
                            <b style={{ fontSize: "18px", color: "#DB4B90", }}>POR APENAS:</b>
                            <div className='plano-pagamento'>
                                <b style={{ fontSize: "17px", color: "#DB4B90", marginTop: "10px", marginBottom: "-2px" }}>Plano Anual</b>
                                <p style={{ fontSize: "17px", color: "#DB4B90", }}>R$ 29.90 / ano</p>
                            </div>
                        </label>
                        <Button
                            buttonName={"Assinar Agora"}
                            displayOn={"flex"}
                            fontColor={"white"}
                            buttonBackColor={"#DB4B90"}
                            buttonWidth={"90%"}
                            buttonHeigth={"15%"}
                            cursor={"pointer"}
                            onClick={postApagamento}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModalPagamento;
