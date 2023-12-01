import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/feed-servicos.css"
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png"
import point from "../../imgs/feed-parceiro/point-localizacao.png"
import CardParceiro from "./card-parceiro-feed";
import { Link } from 'react-router-dom';



function FeedServico() {

    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")
    const [listaParceiros, setParceiros] = useState([])

    function guardarIdParaCaminhoFeedParceiro(parceiroId,nome, cidade, estado, estrelas, qtdServicos, descricao, servicos) {
        sessionStorage.setItem("idParceiroFeed", parceiroId)
        sessionStorage.setItem("cidadeParceiroFeed", cidade)
        sessionStorage.setItem("estadoParceiroFeed", estado)
        sessionStorage.setItem("nomeParceiroFeed", nome)
        sessionStorage.setItem("estrelasParceiroFeed", estrelas)
        sessionStorage.setItem("qtdServicosParceiroFeed", qtdServicos)
        sessionStorage.setItem("descricaoParceiroFeed", descricao)
        sessionStorage.setItem("servicosParceiroFeed", servicos)
    }


    useEffect(() => {
        listar();

        const intervalId = setInterval(() => {
            listar();
        }, 1 * 60 * 1000);
        return () => clearInterval(intervalId);
    });

    function listar() {
        woofJoyApi
            .get('/parceiros', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setParceiros(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }
    return (
        <>
            <Menu />

            <div className="container-feed-servico">

                <div className="header-feed-servico">
                    <div className="titulo-feed-servico">
                        <h1>Feed</h1> <br />
                        <h3> Os melhores DogWalkers e</h3>
                        <h3>Pet Sitters perto de você!</h3>
                    </div>
                    <div className="entradas-feed-servico">

                        <div className="barra-pesquisa-feed-servico">
                            <img className="img-pesquisa-feed-servico" src={lupa} alt="ícone de pesquisa" />
                            <input className="input-pesquisa-feed-servico" type="text" placeholder="pesquisar" />
                        </div>
                        <div className="filtros-feed-servico">

                            <h6>
                                Sua Localização <br />
                                <img className="point-feed-servico" src={point} alt="point" />
                                <p></p>
                            </h6>

                            <h6>
                                Tipo de Serviço <br />
                                <select className="select-feed-servico" name="" id=""></select>
                            </h6>

                        </div>
                    </div>

                </div>
                {listaParceiros?.map((parceiro) => (

                    <>
                        <Link to={"/feed-parceiro"} onClick={() => guardarIdParaCaminhoFeedParceiro(
                            6,
                            parceiro.nome,
                            parceiro.cidade,
                            parceiro.estado,
                            parceiro.estrelas,
                            parceiro.qtdServicos,
                            parceiro.descricao,
                            parceiro.servicos
                            )} className="container-card-feed-servico">

                            <CardParceiro
                                key={parceiro.id}
                                servicoWalker={parceiro.servicoWalker}
                                servicoSitter={parceiro.servicoSitter}
                                nome={parceiro.nome}
                                endereco={parceiro.endereco}
                                descricao={parceiro.descricao}
                                avaliacao={parceiro.avaliacao}
                            />
                        </Link>

                    </>
                ))}


            </div>

        </>
    );
}
export default FeedServico;