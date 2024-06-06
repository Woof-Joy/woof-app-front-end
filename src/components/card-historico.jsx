import React, { useEffect, useState } from "react";
import woofJoyApi from "../woof-joy-api";
import "../css/aguardando-confirmacao.css";
import Button from "./componentes-gerais/button";
import { LocalDateTime } from "js-joda"; // Importe LocalDate corretamente
import ModalLeituraRelatorio from "../components/modais/ModalLeituraRelatorio";
import ModalCadastrarAvaliacao from "../components/modais/ModalCadastrarAvaliacao";

function CardHistorico(props) {
    const userId = sessionStorage.getItem("userId");
    const nomeUsuario = sessionStorage.getItem("nome")

    const {
        idServico,
        servico,
        dataHoraInicio,
        dataHoraFim,
        parceiroNome,
        status,
        relatorio,
        idParceiro
    } = props;

    const formtDateFim = LocalDateTime.parse(dataHoraFim);
    const formtDateInicio = LocalDateTime.parse(dataHoraInicio);

    const [patchResponse, setPatchResponse] = useState({
        status: status,
    });

    const [relatorioVal, setRelatorio] = useState(false);
    const [avaliacaoVal, setAvaliacao] = useState(false);

    function openRelatorio() {
        setRelatorio(true);
    }
    function openAvaliacao() {
        setAvaliacao(true);
    }


    function closeRelatorio() {
        setRelatorio(false);
    }
    function closeAvaliacao() {
        setAvaliacao(false);
    }

    return (
        <>
            {relatorioVal && (
                <ModalLeituraRelatorio 
                    onClose={closeRelatorio}
                    idServico={idServico}
                    servico={servico}
                    parceiroNome={parceiroNome}
                    relatorio={relatorio}
                />
            )}
              {avaliacaoVal && (
                <ModalCadastrarAvaliacao 
                onClose={closeAvaliacao}
                idServico={idServico}
                idParceiro={idParceiro}
                idClienteServico={userId}
                clienteNome={nomeUsuario}
                  
                />
            )}



            <div className="container-dados-card-meus-servicos">
                <div className="informacoes-parceiro-card-meus-servicos">
                    <h3 style={{ fontSize: "25px", color: "black", padding: "3px" }} className="tipo-servico">
                        {patchResponse.status}
                    </h3>
                    {servico === "Dog Walker" ? (
                        <h3 style={{ backgroundColor: "#DB4B90", borderRadius: "5px", color: "white", padding: "3px" }} className="tipo-servico">
                            {servico}
                        </h3>
                    ) : (
                        <h3 style={{ backgroundColor: "orange", borderRadius: "5px", color: "white", padding: "3px" }} className="tipo-servico">
                            {servico}
                        </h3>
                    )}

                    <h5>início: {formtDateInicio.dayOfMonth().toString()}/{formtDateInicio.monthValue().toString()}/{formtDateInicio.year().toString()} {formtDateInicio.hour().toString()}:{formtDateInicio.minute().toString()}</h5>
                    <h5>término: {formtDateFim.dayOfMonth().toString()}/{formtDateFim.monthValue().toString()}/{formtDateFim.year().toString()} {formtDateFim.hour().toString()}:{formtDateFim.minute().toString()}</h5>
                    <h6 className="nome-prestador">parceiro: {parceiroNome}</h6>
                </div>
                <div className="status">
                    {patchResponse.status === "Concluído" && relatorio === null ?  (
                        <>
                          <Button
                            buttonName={"Avaliar Parceiro"}
                            displayOn={"disable"}
                            fontColor={"white"}
                            buttonBackColor={"#DB4B90"}
                            textShadow={"black"}
                            buttonWidth={"90%"}
                            buttonHeight={"70%"}
                            padding={"20px"}
                            cursor={"auto"}
                            onClick={() => openAvaliacao()}
                        />
                        
                        </>
                    ) : patchResponse.status === "Concluído" && relatorio !== null ? (
                       <>
                        <Button
                        buttonName={"Avaliar Parceiro"}
                        displayOn={"disable"}
                        fontColor={"white"}
                        buttonBackColor={"#DB4B90"}
                        textShadow={"black"}
                        buttonWidth={"90%"}
                        buttonHeight={"70%"}
                        padding={"15px"}
                        cursor={"auto"}
                        onClick={() => openAvaliacao()}
                    />
                        <Button
                            buttonName={"Visualizar Relatório"}
                            displayOn={"disable"}
                            fontColor={"white"}
                            buttonBackColor={"#DB4B90"}
                            textShadow={"black"}
                            buttonWidth={"90%"}
                            buttonHeight={"70%"}
                            padding={"15px"}
                            cursor={"auto"}
                            onClick={() => openRelatorio()}
                        />
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CardHistorico;
