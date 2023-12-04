import React from "react";
import "../../css/item-feed.css"
import point from "../../imgs/feed-parceiro/point-localizacao.png"
import foto from "../../imgs/mock/casa.jpg";



function ItemFeed(props) {
    const {
        titulo,
        categoria,
        logradouro,
        descricao,
        uf
    } = props;

   


    return (
        <>

            <div className="card-item-doacao">
                <div style={{ backgroundImage: `url(${foto})` }} className="container-imagem-item-doacao">
                </div>


                <div className="container-informacoes-item-doacao">
                    <h6>Categoria: {categoria}</h6>
                    <h2>{titulo}</h2>
                    <h4><img className="point-feed-doacao" src={point} alt="point" />{logradouro},{uf}</h4>
                    <h6><strong>Descrição: </strong></h6>
                    <h6 className="descricao-item-doacao">{descricao}</h6>
                </div>

            </div>

        </>
    );
}
export default ItemFeed;