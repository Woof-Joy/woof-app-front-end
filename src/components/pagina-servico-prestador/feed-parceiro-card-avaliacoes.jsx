import React, { useState } from "react";
import "../../css/react-feed-parceiro.css";
import woofJoyApi from "../../woof-joy-api";

function FeedParceiroCard({
    imagem,
    clienteNome,
    descricaoServico,
    descricaoAvaliacao
}) {
  return (
    <>
      <div className="container-avaliacao">
        <img
          className="avaliacao-img"
          src={imagem}
          alt="imagem do cliente"
        ></img>

        <div className="info-cliente">
          <div className="nome-cliente">
            {clienteNome.map((clienteNome, index) => (
              <p key={index} className="p-nome-cliente">
                {clienteNome}
              </p>
            ))}
          </div>
          <div className="conteudo-tipo-avaliacao">
          <span className="icon-avaliacao">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    {descricaoServico.map((descricaoServico, index) => (
                      <p key={index} className="descricao-servico-prestado">
                        {descricaoServico}
                      </p>
                    ))}
          </div>
          <div className="conteudo-avaliacao">
          {descricaoAvaliacao.map((descricaoAvaliacao, index) => (
            <p key={index} className="descricao-avaliacao">
              {descricaoAvaliacao}
            </p>
          ))}
          </div>

        </div>
      </div>
    </>
  );
}
export default FeedParceiroCard;
