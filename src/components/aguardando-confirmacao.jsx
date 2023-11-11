import React from "react";
import "../css/aguardando-confirmacao.css"
import Button from "./button/button";


function AguardandoConfirmacao() {
    return (
        <>
            <div className="container-dados-card-meus-servicos">
                <div className="informacoes-parceiro-card-meus-servicos">
                    <h2>Aguardando Confirmação</h2>
                    <h3>Dog Walker</h3>
                    <h5>Início do Serviço: Data - Hora | Fim do Serviço: Data - Hora</h5>
                    <h6 className="nome-prestador">Cliente: Filipe Silva</h6>
                    <h6 className="nome-pet">Pet: Mata rindo hahahha </h6>
                </div>
                <div className="botoes-status">
                    <Button buttonName="Aceitar" fontColor="white" bgColor="#DB4B90" />
                </div>
            </div>
        </>
    );
}
export default AguardandoConfirmacao;