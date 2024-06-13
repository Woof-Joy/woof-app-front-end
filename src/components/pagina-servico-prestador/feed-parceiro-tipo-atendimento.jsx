import React, { useState } from "react";
import "../../css/react-feed-parceiro.css";
import woofJoyApi from "../../woof-joy-api";
import IconDoisPet from "../../imgs/feed-parceiro/icon-two-pet.png";
import IconPetEspecial from "../../imgs/feed-parceiro/icon-pet-especial.png";

function FeedParceiroTipoAtendimento({icon, descricao, icon2,descricao2}) {
  
  return (
    <>
      <div className="atendimentos">
        <div className="conteudo-atendimento-primeiro">
        <img className="icon-atendimento" src={icon} alt="imagem do parceiro" />
          {descricao.map((descricao, index) => (
            <p key={index} className="txt-info">
              {descricao}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
export default FeedParceiroTipoAtendimento;
