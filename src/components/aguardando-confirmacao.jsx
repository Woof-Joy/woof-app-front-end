import React, { useEffect, useState } from "react";
import woofJoyApi from "../woof-joy-api";
import "../css/aguardando-confirmacao.css"
import Button from "./componentes-gerais/button";
import { LocalDateTime } from "js-joda"; // Importe LocalDate corretamente




function AguardandoConfirmacao(props) {
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");
    const {
        idServico,
        servico,
        dataHoraInicio,
        dataHoraFim,
        clienteNome,
        idClienteServico,
        status
    } = props

    const formtDateFim = LocalDateTime.parse(dataHoraFim)
    const formtDateInicio = LocalDateTime.parse(dataHoraInicio)

    // const [sendBody, setsendBody] = useState({
    //     message: "",
    //     idRemetente: userId,
    //     idDestinatario: "",
    //     tipo: "servico",
    // });


    // function sendMensage(mensagem) {
    //     woofJoyApi
    //         .post(`/notification`, sendBody, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         })
    //         .then((response) => {
    //             console.log(response.status);

    //             setsendBody({
    //                 message:mensagem,
    //                 idRemetente: userId,
    //                 idDestinatario: idClienteServico,
    //                 tipo: "doacao",
    //             });
    //         })
    //         .catch((erroOcorrido) => {
    //             console.log(erroOcorrido.mensagem);
    //         });
    // }

    function pathStatus() {
        woofJoyApi
            .patch(`/servicos/${idServico}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(idServico)

                // sendMensage("Servico confirmado")
                alert(response.status)
                props.status(response.data.status); 
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }
    
    function deletService() {
        woofJoyApi
            .delete(`/servicos/${idServico}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);

                window.location.reload();
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
                console.log(idServico)

            });
    }
    

    return (
        <>
            <div className="container-dados-card-meus-servicos">
                <div className="informacoes-parceiro-card-meus-servicos">
                    {servico === "dogWalker" ? (
                        <h3 style={{ backgroundColor: "#DB4B90", borderRadius: "5px", color: "white", padding: "3px" }} className="tipo-servico">
                            {servico} 
                        </h3>
                    ) : (
                        <h3 style={{ backgroundColor: "orange", borderRadius: "5px", color: "white", padding: "3px" }} className="tipo-servico">
                            {servico} 
                        </h3>)}

                    <h5>início: {formtDateInicio.dayOfMonth().toString()}/{formtDateInicio.monthValue().toString()}/{formtDateInicio.year().toString()} {formtDateInicio.hour().toString()}:{formtDateInicio.minute().toString()}</h5>
                    <h5>término: {formtDateFim.dayOfMonth().toString()}/{formtDateFim.monthValue().toString()}/{formtDateFim.year().toString()} {formtDateInicio.hour().toString()}:{formtDateInicio.minute().toString()}</h5>
                    <h6 className="nome-prestador">cliente: {clienteNome}</h6>
                </div>
                <div className="status">

                    {status === "aguardandoInicio" ? (
                        <>
                            <Button
                                buttonName={"aceitar"}
                                fontColor={"white"}
                                buttonBackColor={"green"}
                                displayOn={"flex"}
                                textShadow={"black"}
                                buttonWidth={"50%"}
                                buttonHeight={"40%"}
                                onClick={()=>pathStatus()}
                            />
                            <Button
                                buttonName={"recusar"}
                                fontColor={"white"}
                                buttonBackColor={"red"}
                                displayOn={"flex"}
                                textShadow={"black"}
                                buttonWidth={"50%"}
                                buttonHeight={"40%"}
                                onClick={()=>deletService()}
                            />
                        </>
                    ) : (
                        <Button
                            buttonName={status}
                            displayOn={"disable"}
                            fontColor={"white"}
                            buttonBackColor={"#DB4B90"}
                            textShadow={"black"}
                            buttonWidth={"60%"}
                            buttonHeight={"70%"}
                            padding={"20px"}
                            cursor={"auto"}
                        />
                    )}


                </div>
            </div>
        </>
    );
}
export default AguardandoConfirmacao;