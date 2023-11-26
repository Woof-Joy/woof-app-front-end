import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/feed-servicos.css"
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png"
import point from "../../imgs/feed-parceiro/point-localizacao.png"
import CardParceiro from "./card-parceiro-feed";


function FeedServico() {


    const [listaParceiros, setParceiros] = useState([])


    useEffect(() => {
        // Chama a função listar() imediatamente
        listar();

        // Define um intervalo para chamar a função listar() 
        const intervalId = setInterval(() => {
            listar();
        }, 1 * 60 * 1000);//minutos em milisegundos(O numero primario determina, exemplo: Se 1 então 1 minuto)   

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []);

    function listar() {
        woofJoyApi
            .get('/parceiros')
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

                            <h6>
                                Ordenar Por <br />
                                <select className="select-feed-servico" name="" id=""></select>
                            </h6>

                        </div>
                    </div>

                </div>
                <div className="container-card-feed-servico">
                    {listaParceiros?.map((parceiro) => (
                        <>
                            <CardParceiro
                                key={parceiro.id}
                                servicoWalker={parceiro.servicoWalker}
                                servicoSitter={parceiro.servicoSitter}
                                nome={parceiro.nome}
                                endereco={parceiro.endereco}
                                descricao={parceiro.descricao}
                                avaliacao={parceiro.avaliacao}
                            />

                        </>
                    ))}

                </div>

            </div>

        </>
    );
}
export default FeedServico;