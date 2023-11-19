import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import woofJoyApi from "../woof-joy-api";
import Radio from '../components/cadastro-servico-sim-nao'

function CadastroServicoFormInformacoes({txt, qtdPet, opcoesQuantidadePet, perguntas}) {
  return (
    <>
      <div className="banner-informacoes-servico">
        <div className="informacoes-servico">
          <div className="sessao-1">

          {txt.map((txt, index) => (
                <p key={index} className="titulo-info-servico">
                  {txt}
                </p>
              ))}
            
            <div className="informacoes-quantidade-pet">
            {qtdPet.map((qtdPet, index) => (
                <p key={index} className="p-das-selecoes">
                  {qtdPet}
                </p>
              ))}

            <select className="selecao-pets">
                  {opcoesQuantidadePet.map((opcao) => (
                    <option key={opcao} value={opcao}>
                      {opcao}
                    </option>
                  ))}
            </select>
            </div>
          </div>
        <div className="sessao-2">
          <div className="sessao-perguntas">

            {perguntas.map((pergunta, index) => (
                <p key={index} className="p-das-selecoes">
                  {pergunta}
                </p>
              ))}

          </div>
            <div className="sessao-respostas">
            <Radio />
            <Radio />
            <Radio />
            <Radio />
            <Radio />
            </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default CadastroServicoFormInformacoes;
