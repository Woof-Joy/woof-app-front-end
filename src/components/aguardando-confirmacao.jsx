import React from "react";
import "../css/aguardando-confirmacao.css"
import Button from "./componentes-gerais/button";


function AguardandoConfirmacao(props) {
    const {
        status,
        servico,
        dataHoraAgendamento,
        clienteNome,
        petNome,
        divFontColor,
        cardBackColor,
        //ATRIBUTOS BOTÕES
        displayOn,
        fontColor,
        buttonBackColor,
        buttonName,
        textShadow
    } = props

    return (
        <>
            <div style={{ backgroundColor: cardBackColor, color: divFontColor }} className="container-dados-card-meus-servicos">
                <div className="informacoes-parceiro-card-meus-servicos">
                    <h2>{status}</h2>
                    <h3>{servico}</h3>
                    <h5>{dataHoraAgendamento}</h5>
                    <h6 className="nome-prestador">Cliente: {clienteNome}</h6>
                    <h6 className="nome-pet">Pet: {petNome}</h6>
                </div>
                <div className="botoes-status">
                    <Button displayOn={displayOn} buttonName={buttonName} fontColor={fontColor} buttonBackColor={buttonBackColor} textShadow={textShadow} />
                </div>
            </div>
        </>
    );
}
export default AguardandoConfirmacao;