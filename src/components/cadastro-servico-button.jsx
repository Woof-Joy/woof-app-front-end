import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoButton() {
  return (
    <>
        <div className="cadastro-servico-btn">
          <button class="button-descartar" type="button">Descartar</button>
          <button class="button-salvar" type="button">salvar</button>
        </div>
    </>
  );
}
export default CadastroServicoButton;