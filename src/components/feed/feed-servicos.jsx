import React, { useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../MenuCliente";
import "../../css/feed-servicos.css"
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png"
import point from "../../imgs/feed-parceiro/point-localizacao.png"
import CardParceiro from "./card-parceiro-feed";


function FeedServico() {

    const [listaParceiros, setListaParceiros] = useState([])

    const prestador = {
        servicoWalker: "DogWalker",
        servicoSitter: "DogSitter",
        nome: "Homem Aranha",
        endereco: "São Bernoia do Campo, São Paulo",
        descricao: "Lorem ipsum dribus iste eaque porro a cumque excepturi voluptatibus ipsum, blanditiis nulla deserunt?",
        avaliacao: 4.5
    };

    const getParceiros = () => {
        woofJoyApi
            .get(`/parceiros`)
            .then((resposta) => {
                alert(resposta.message)
            })
            .catch((erro) => {
                console.log(erro)
                alert(`Erro ao trazer os parceiros: ${erro.message}`);
            });
    };
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

                            <h6>
                                Ordenar Por <br />
                                <select className="select-feed-servico" name="" id=""></select>
                            </h6>

                        </div>
                    </div>

                </div>
                <CardParceiro
                    servicoWalker={prestador.servicoWalker}
                    servicoSitter={prestador.servicoSitter}
                    nome={prestador.nome}
                    endereco={prestador.endereco}
                    descricao={prestador.descricao}
                    avaliacao={prestador.avaliacao}
                />

            </div>

        </>
    );
}
export default FeedServico;