import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoPerguntas() {
  return (
    <>
      <div className="perguntas-cadastro-servico">
        <p className="p-das-selecoes">Cuida de pets especiais?</p>
        <p className="p-das-selecoes">Aceita cachorros idosos?</p>
        <p className="p-das-selecoes">Aceita pet bravo?</p>
        <p className="p-das-selecoes">Aceita pet de grande porte?</p>
        <p className="p-das-selecoes">Aceita fêmeas no cio?</p>
      </div>
    </>
  );
}
export default CadastroServicoPerguntas;