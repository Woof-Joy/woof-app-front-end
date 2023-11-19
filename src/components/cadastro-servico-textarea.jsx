import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";

function CadastroServicoTextearea() {
  return (
    <>
                <div className="descricao">
                    <label className="descricao-titulo"  for="titulo-descricao">Descrição</label>
                    <textarea className="textarea" id="descricao" placeholder="Digite sua descrição aqui..."></textarea>
                </div>
    </>
  );
}
export default CadastroServicoTextearea;