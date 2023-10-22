import React from "react";
import "../aguardando-confirmacao.css"


function AguardandoConfirmacao() {
    return (
        <>
            <div className="container-dados">
                <div className="informacoes-parceiro">
                    <label className="tipo-servico">Dog Walker</label>
                    <section className="dados">
                         <label className="nome-prestador">Filipe Silva</label>
                        <label className="nome-pet">Mata rindo hahahha </label>
                    </section>
                </div>
                <label className="tipo-status">Aguardando Confirmação</label>
            </div>
        </>
    );
}
export default AguardandoConfirmacao;