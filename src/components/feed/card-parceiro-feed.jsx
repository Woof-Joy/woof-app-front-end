import React from "react";
import "../../css/card-parceiro-feed.css";
import point from "../../imgs/feed-parceiro/point-localizacao.png"


function CardParceiro(props) {
    const { servicoWalker, servicoSitter, nome, endereco, descricao, avaliacao } = props;
    return (
        <>
            <div className="card-servico cards">
                <div className="container-foto">
                    <img classNameName="imagem-prestador" src="../src/imgs/img-dog-2.png" alt="foto prestador" />
                </div>
                <div className="container-dados">
                    <div className="informacoes-parceiro">
                        <section className="servicos">
                            <strong className="servico-nome">🐕‍🦺{servicoWalker}</strong>
                            <strong className="servico-nome">🐶{servicoSitter}</strong>
                        </section>

                        <label className="nome-prestador">{nome}</label>
                        <section className="endereco">
                            <img className="imagem-localizacao" src={point} alt="ponto de localização" />
                            <label className="cidade">{endereco}</label>
                        </section>



                    </div>
                    <label className="descricao">
                        <strong className="descricao-texto-card-parceiro">
                           {descricao}
                        </strong>
                    </label>


                </div>


                <div className="container-estrelas">
                    <div className="avaliacao">{avaliacao} ★</div>
                </div>

            </div>
        </>
    );
}
export default CardParceiro;