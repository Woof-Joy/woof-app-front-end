import React, { useState } from "react";
import "../css/publicacao-doacao.css";
import woofJoyApi from "../woof-joy-api";
import BootstrapCarousel from "./componentes-gerais/carrossel";
import ImgDamares from "../imgs/publicacao-doacao/damares-doacao.png";
import Menu from "./componentes-gerais/MenuCliente";

function PublicacaoDoacao() {
  return (
    <>
      <div className="pricipal-publicacao-doacao">
        <Menu />
        <div className="chat-e-perfil-cliente">
          <i className="bi bi-chat-dots-fill"></i>
          <img
            className="doador-item-img"
            src={ImgDamares}
            alt="imagem do parceiro"
          ></img>
        </div>
        <div className="produto-local-editar">
          <div className="nome-do-produto">
            <p className="titulo-produto-doado">Porta Saquinho</p>
            <div className="nome-regiao-doacao">
              <i className="bi bi-geo-alt-fill"></i>
              <p className="txt-localizacao-produto">Zona Sul, São Paulo</p>
            </div>
          </div>

          <div className="parte-editar-pagina-doacao">
            <p className="editar-doacao-txt">Editar</p>
            <i class="bi bi-pencil-square"></i>
          </div>
        </div>

        <div className="parte-carrossel-e-detalhes">
          <div className="componente-carrossel-doacao">
            <BootstrapCarousel />
          </div>
          <div className="detalhes-da-doacao">
            <div className="doador-chat">
              <p className="txt-nome-doador">Doador: Damares Oliveira</p>
              <i className="bi bi-chat-dots-fill"></i>
            </div>

            <div className="caixa-rosa">
              <p className="titulo-detalhes-doacao">Detalhes</p>
              <div className="categoria-estado-doacao">
                <p className="categoria-do-objeto-doado">Categoria : Higiene</p>
                <p className="estado-objeto-doado">Estado: Novo</p>
              </div>
              <div className="conteudo-retirada">
                <p className="titulo-retirada">Retirada:</p>

                <div className="retirada1">
                  <i className="bi bi-check"></i>
                  <p className="opcao-retirada1">
                    Leva o produto até o receptor
                  </p>
                </div>
                <div className="retirada2">
                  <i className="bi bi-check"></i>
                  <p className="opcao-retirada2">
                    Marca ponto de encontro em local público mais próximo
                  </p>
                </div>
                <div className="retirada3">
                  <i className="bi bi-x"></i>
                  <p className="opcao-retirada3">
                    Envia pelo Correio (cobra taxa)
                  </p>
                </div>
                <div className="retirada4">
                  <i className="bi bi-x"></i>
                  <p className="opcao-retirada4">Precisa retirar no local</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parte-descricao-doacao">
          <p className="titulo-descricao-doacao">Descrição</p>
          <p className="texto-descricao-doacao">
            Lorem ipsum dolor sit amet. Sed nemo amet et quibusdam amet et iste
            voluptas. Ut earum labore non ratione velit et aliquid enim nam Quis
            perferendis 33 nemo perspiciatis! Lorem ipsum dolor sit amet. Sed
            nemo amet et quibusdam amet et iste voluptas. Ut earum labore non
            ratione velit et aliquid enim nam Quis perferendis 33 nemo
            perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
}
export default PublicacaoDoacao;
