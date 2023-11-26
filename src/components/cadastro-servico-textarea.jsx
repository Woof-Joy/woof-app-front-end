import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoTextearea() {
  return (
    <>
                <div className="descricao-caixa">
                    <label className="descricao-titulo"  for="titulo-descricao">Descrição</label>
                    <textarea className="textarea" data-ls-module="charCounter" maxlength="100" id="descricao" placeholder="Digite sua descrição aqui..."></textarea>
                </div>
    </>
  );
}
export default CadastroServicoTextearea;