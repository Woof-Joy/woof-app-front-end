import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import "../../css/card-avaliacao.css";
import point from "../../imgs/feed-parceiro/point-localizacao.png";

function CardParceiro(props) {
  const {
    clienteNome,
    nota,
    comentario,
    imagem
  } = props;

  return (
    <>
      <div className="card-servico-avaliacao ">
        <div className="container-dados-avaliacao">

          <div className="nome-prestador-avaliacao">{clienteNome}</div>
          <div className="nota-avaliacao">{nota} ★</div>

        </div>

        <label className="descricao-avaliacao">

          <strong className="descricao-texto-card-parceiro-avaliacao">
            {comentario}
          </strong>

        </label>
      </div>
    </>
  );
}

export default CardParceiro;
