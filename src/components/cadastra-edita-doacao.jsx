import React, { useState } from "react";
import "../css/cadastra-edita-doacao.css";
import Textarea from "../components/cadastro-servico-textarea";
import Menu from "./componentes-gerais/MenuCliente";
import UpdateImg from "./componentes-gerais/BotaoUpload";
import SimNao from "./cadastro-servico-sim-nao";
import woofJoyApi from "../woof-joy-api";
import Button from "../components/cadastro-servico-button";

function CadastraEditaDoacao() {
  return (
    <>
      <div className="conteudo-edita-cadastra-servico">
        <Menu />
        <div className="titulo-cadastra">
          <p className="titulo-publicacao-doacao">Publicacão</p>
          <p className="sub-doacao">Doacão</p>
        </div>
        <div className="titulo-input">
          <p>Título</p>
        </div>
        <div className="objeto-doacao">
          <input
            className="o-nome-obj-doacao"
            type="text"
            placeholder="Nome do objeto de doação"
          />
        </div>
<div className="textarea-e-estado-categoria">
<div className="caixa-doacao">
          <Textarea />
        </div>
        <div className="categoria-estado">
          <select className="categoria-doacao" id="categoria-doacao">
            <option className="txt-selected" selected disabled>Categoria</option>
            <option value="brinquedo">brinquedo</option>
            <option value="higiêne">higiêne</option>
            <option value="acessórios">acessórios</option>
            <option value="alimentar">alimentar</option>
            <option value="passeio">passeio</option>
          </select>
          <select className="categoria-doacao" id="estado-doacao">
          <option className="txt-selected" selected disabled>Estado</option>
            <option value="novo">novo</option>
            <option value="usado">usado</option>
          </select>
        </div>
</div>

        <div className="upload-img-doacao">
          <div class="enviar-img-doacao">
            <p className="enviar-img-doacao-txt">Imagens</p>
            <UpdateImg />
          </div>
        </div>
        <div className="formulario-de-retirada-doacao">
          <div className="perguntas-retirada-primeira-parte">
            <p className="txt-retirada">Retirada:</p>
            <div className="primeira-parte-perguntas">
              <div className="perguntas-retirada-um">
                <p className="p-das-selecoes">Leva o produto até o receptor?</p>
                <p className="p-das-selecoes">Marca ponto de encontro mais próximo?</p>
                <p className="p-das-selecoes">Precisa retirar no local?</p>
              </div>
              <div>
                <SimNao />
                <SimNao />
                <SimNao />
              </div>
            </div>
          </div>
          <div className="perguntas-retirada-segunda-parte">
            <div className="segunda-parte-perguntas">
            <div className="perguntas-retirada-dois">
              <p className="p-das-selecoes">Envia pelo correio?</p>
              <p className="p-das-selecoes">Cobra taxa?</p>
            </div>
            <div>
              <SimNao />
              <SimNao />
            </div>
            </div>

          </div>
        </div>
        <div className="buttons-edita-doacao">
          <Button />
        </div>
      </div>
    </>
  );
}
export default CadastraEditaDoacao;
