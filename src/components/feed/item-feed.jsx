import React from "react";
import "../item-feed.css"


function ItemFeed() {
    return (
        <>
            <div className="card-servico cards">
                <div className="container-foto">
                    <img className="imagem-prestador" src="../src/imgs/img-dog-2.png" alt="foto prestador" />
                </div>
                <div className="container-dados">
                    <div className="informacoes-parceiro">

                        <label className="nome-prestador">Item do cachorro</label>
                        <section className="endereco">
                            <img className="imagem-localizacao" src="../src/imgs/Mask group.png" alt="ponto de localização" />
                            <label className="cidade">São Bernoia do Campo, São Paulo </label>
                        </section>


                        <label className="descricao">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus alias
                            repudiandae, atque
                            blanditiis id,
                            maiores aliquam possimus laudantium earum eum! Voluptatum ullam ex quis voluptatem accusamus quos,
                            expedita vitae.</label>

                    </div>

                </div>


            </div>
        </>
    );
}
export default ItemFeed;