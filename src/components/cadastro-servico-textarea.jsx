import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoTextearea(props) {

  const {
    value,
    name,
    onChange
  } = props

  return (
    <>
      <div className="descricao-caixa">
        <label className="descricao-titulo" for="titulo-descricao">Descrição</label>
        <textarea className="textarea" data-ls-module="charCounter" maxlength="100" name={name} onChange={onChange} placeholder="Digite sua descrição aqui..."></textarea>
      </div>
    </>
  );
}
export default CadastroServicoTextearea;