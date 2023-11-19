import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoSimNao() {
  return (
    <>
      <div className="radio-cadastro-servico">
        <label className="sim" for="sim">Sim</label>
        <input className="cadastro-input-radio-sim" type="radio" name="sim" value="sim"></input>
        <label className="nao" for="nao">Não</label>
        <input className="cadastro-input-radio-nao" type="radio" name="nao" value="nao"></input>
      </div>
    </>
  );
}
export default CadastroServicoSimNao;
