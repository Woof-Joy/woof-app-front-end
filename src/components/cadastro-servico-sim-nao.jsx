import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoSimNao(props) {
  const {
    value,
    name,
    onChange
  } = props

  return (
    <>
      <div className="radio-cadastro-servico">
        <label className="sim" for="sim">Sim</label>
        <input className="cadastro-input-radio-sim" type="radio" onChange={onChange} name={name} value="true"></input>
        <label className="nao" for="nao">Não</label>
        <input className="cadastro-input-radio-nao" type="radio" onChange={onChange} name={name} value="false"></input>
      </div>
    </>
  );
}
export default CadastroServicoSimNao;
