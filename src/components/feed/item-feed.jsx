import React from "react";
import "../../css/item-feed.css"
import point from "../../imgs/feed-parceiro/point-localizacao.png"
import osso from "../../imgs/item-doacao/osso-foto.png"



function ItemFeed(props) {
    const {
        clienteNome,
        categoria,
        nome,
        endereco,
        descricao,
        avaliacao,
        image = osso
    } = props;

   


    return (
        <>

            <div className="card-item-doacao">
                <div style={{ backgroundImage: `url(${image})` }} className="container-imagem-item-doacao">
                </div>


                <div className="container-informacoes-item-doacao">
                    <h6>Doador: {clienteNome} | Categoria: Brinquedo</h6>
                    <h2>Osso Mastigável</h2>
                    <h4><img className="point-feed-doacao" src={point} alt="point" /> Mooca, São Paulo</h4>
                    <h6><strong>Descrição: </strong></h6>
                    <h6 className="descricao-item-doacao"></h6>
                </div>

            </div>

        </>
    );
}
export default ItemFeed;