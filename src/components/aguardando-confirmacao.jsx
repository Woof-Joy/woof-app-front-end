import React, { useEffect, useState } from "react";
import woofJoyApi from "../woof-joy-api";
import "../css/aguardando-confirmacao.css"
import Button from "./componentes-gerais/button";
import { LocalDateTime } from "js-joda"; // Importe LocalDate corretamente




function AguardandoConfirmacao(props) {
    const token = sessionStorage.getItem("token");



    const {
        idServico,
        servico,
        dataHoraInicio,
        dataHoraFim,
        clienteNome,
        status
    } = props

    const formtDateFim = LocalDateTime.parse(dataHoraFim)
    const formtDateInicio = LocalDateTime.parse(dataHoraInicio)


    function pathStatus() {
        woofJoyApi
            .patch(`/servicos ${idServico}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                alert("sucess patch")
                props.status(response.data.status); 
            })
            .catch((erroOcorrido) => {
                alert("fail patch")
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
                alert("sucess delet")
                window.location.reload();
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
                console.log(idServico)
                alert("fail delet")

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
                            disabled={true} 
                        />
                    )}


                </div>
            </div>
        </>
    );
}
export default AguardandoConfirmacao;