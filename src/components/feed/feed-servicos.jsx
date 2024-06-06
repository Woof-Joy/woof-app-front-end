import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/feed-servicos.css";
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png";
import CardParceiro from "./card-parceiro-feed";
import { Link } from 'react-router-dom';
import foto from "../../imgs/mock/semfoto.jpg";

function FeedServico() {
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");
    const enderecoLogado = sessionStorage.getItem("endereco");

    const [listaParceiros, setParceiros] = useState([]);
    const [termoPesquisa, setTermoPesquisa] = useState("");
    const [tipoServico, setTipoServico] = useState("Todos");

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
                console.log(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    const parceirosFiltrados = listaParceiros.filter(parceiro => {
        const nome = parceiro.nome ? parceiro.nome.toLowerCase() : "";
        const sobrenome = parceiro.sobrenome ? parceiro.sobrenome.toLowerCase() : "";
        const cidade = parceiro.cidade ? parceiro.cidade.toLowerCase() : "";
        const uf = parceiro.uf ? parceiro.uf.toLowerCase() : "";
        const descricao = parceiro.descricao ? parceiro.descricao.toLowerCase() : "";
        const termo = termoPesquisa.toLowerCase();

        const tipoServicoWalker = parceiro.servicos.length > 0 ? parceiro.servicos[0].tipoServico : "";
        const tipoServicoSitter = parceiro.servicos.length > 1 ? parceiro.servicos[1].tipoServico : "";

        const matchServico = tipoServico === "Todos" ||
            tipoServicoWalker.toLowerCase() === tipoServico.toLowerCase() ||
            tipoServicoSitter.toLowerCase() === tipoServico.toLowerCase();

        return (
            matchServico && (
                nome.includes(termo) ||
                sobrenome.includes(termo) ||
                cidade.includes(termo) ||
                uf.includes(termo) ||
                descricao.includes(termo)
            )
        );
    });

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
                            <input 
                                className="input-pesquisa-feed-servico" 
                                type="text" 
                                placeholder="pesquisar" 
                                value={termoPesquisa}
                                onChange={(e) => setTermoPesquisa(e.target.value)}
                            />
                        </div>
                        <div className="filtros-feed-servico">
                            <h6>
                                Serviço desejado <br />
                                <select
                                    className="select-meus-servicos"
                                    value={tipoServico}
                                    onChange={(e) => setTipoServico(e.target.value)}
                                >
                                    <option value="Todos">Todos</option>
                                    <option value="Dog Walker">Dog Walker</option>
                                    <option value="Dog Sitter">Dog Sitter</option>
                                </select>
                            </h6>

                            <h6>
                                Sua Localização: <br />
                                <p>📍{enderecoLogado}</p>
                            </h6>

                        </div>
                    </div>

                </div>
                {parceirosFiltrados.length > 0 ? (
                    parceirosFiltrados.map((parceiro) => (
                        <Link
                            to={"/feed-parceiro"}
                            onClick={() => guardarIdParaCaminhoFeedParceiro(
                                parceiro.idParceiro,
                                parceiro.nome,
                                parceiro.cidade,
                                parceiro.uf,
                                parceiro.estrelas,
                                parceiro.qtdServicosPrestados,
                                parceiro.descricao,
                                parceiro.servicos,
                                parceiro.dataEntrada
                            )}
                            className="container-card-feed-servico"
                            key={parceiro.idUsuario}
                        >
                            <CardParceiro
                                servicoWalker={
                                    parceiro.servicos.length > 0 ? parceiro.servicos[0].tipoServico : ""
                                }
                                servicoSitter={
                                    parceiro.servicos.length > 1 ? parceiro.servicos[1].tipoServico : ""
                                }
                                nome={parceiro.nome}
                                sobrenome={parceiro.sobrenome}
                                logradouro={parceiro.cidade}
                                uf={parceiro.uf}
                                descricao={parceiro.descricao}
                                avaliacao={parceiro.estrelas}
                                imagem={foto}
                                idParceiro={parceiro.idParceiro}
                            />
                        </Link>
                    ))
                ) : (
                    <div>Nada por aqui</div>
                )}

            </div>
        </>
    );
}

export default FeedServico;
