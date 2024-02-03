import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/feed-servicos.css"
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png"
import CardParceiro from "./card-parceiro-feed";
import { Link } from 'react-router-dom';
import foto from "../../imgs/mock/semfoto.jpg";

function FeedServico() {
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");
    const enderecoLogado = sessionStorage.getItem("endereco");

    const [listaParceiros, setParceiros] = useState([]);
    const [endereco, setEndereco] = useState({ cidade: "", uf: "" });

    function guardarIdParaCaminhoFeedParceiro(parceiroId, nome, cidade, estado, estrelas, qtdServicos, descricao, servicos, dataEntrada) {
        sessionStorage.setItem("idParceiroFeed", parceiroId);
        sessionStorage.setItem("cidadeParceiroFeed", cidade);
        sessionStorage.setItem("estadoParceiroFeed", estado);
        sessionStorage.setItem("nomeParceiroFeed", nome);
        sessionStorage.setItem("estrelasParceiroFeed", estrelas);
        sessionStorage.setItem("qtdServicosParceiroFeed", qtdServicos);
        sessionStorage.setItem("descricaoParceiroFeed", descricao);
        sessionStorage.setItem("servicosParceiroFeed", servicos);
        sessionStorage.setItem("dataEntradaParceiroFeed", dataEntrada);
    }

    useEffect(() => {
        listar();

        const intervalId = setInterval(() => {
            listar();
        }, 10 * 60 * 1000); // Ajuste para 10 minutos
        return () => clearInterval(intervalId);
    }, []);

    function listar() {
        woofJoyApi
            .get('/parceiros', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setParceiros(response.data);
                console.log(response.data)
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    function getById(userId, endereco) {
        woofJoyApi
            .get(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                const novoEndereco = {
                    cidade: response.data.endereco.localidade,
                    uf: response.data.endereco.uf
                };

                setEndereco(novoEndereco);
            })
            .catch((erro) => {
                console.log(erro);
            });

        return endereco;
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
                                Sua Localização: <br />
                                <b className="feed-servicos-localidade">
                                    📍 <p>{enderecoLogado}</p>
                                </b>
                            </h6>

                            <h6>
                                Tipo de Serviço <br />
                                <select className="select-feed-servico" name="" id="">
                                    <option value="T">Todos</option>
                                    <option value="W">Dog Walker</option>
                                    <option value="S">Dog Sitter</option>
                                </select>
                            </h6>

                        </div>
                    </div>

                </div>
                {listaParceiros?.map((parceiro) => {
                    const enderecoIndex = getById(parceiro.userId, endereco);

                    return (
                        <Link to={"/feed-parceiro"} onClick={() => guardarIdParaCaminhoFeedParceiro(
                            parceiro.idUsuario,
                            parceiro.nome,
                            "São Bernardo do Campo",
                            "SP",
                            parceiro.estrelas,
                            parceiro.qtdServicosPrestados,
                            parceiro.descricao,
                            parceiro.servicos,
                            parceiro.dataEntrada
                        )} className="container-card-feed-servico">
                            {enderecoIndex && parceiro.servicos.length > 0 && (
                                <CardParceiro
                                    key={parceiro.id}
                                    servicoWalker={parceiro.servicos[0].tipoServico}
                                    servicoSitter={parceiro.servicos[1].tipoServico}
                                    nome={parceiro.nome}
                                    sobrenome={parceiro.sobrenome}
                                    logradouro={enderecoIndex.cidade}
                                    uf={enderecoIndex.uf}
                                    descricao={parceiro.descricao}
                                    avaliacao={parceiro.estrelas}
                                    imagem={foto}
                                />
                            )}
                        </Link>
                    );
                })}


            </div>
        </>
    );
}

export default FeedServico;
