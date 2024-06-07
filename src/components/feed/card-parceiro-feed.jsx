import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import "../../css/card-parceiro-feed.css";
import point from "../../imgs/feed-parceiro/point-localizacao.png";

function CardParceiro(props) {
    const {
        servicoWalker,
        servicoSitter,
        nome,
        sobrenome,
        logradouro,
        uf,
        descricao,
        avaliacao,
        imagem,
        idParceiro
    } = props;

    const [avaliacaoMedia, setAvaliacaoMedia] = useState("");
    const [listaAvaliacoes, setListaAvaliacoes] = useState([]);

    useEffect(() => {
        listar();

        const intervalId = setInterval(() => {
            listar();
        }, 10 * 60 * 1000); // Ajuste para 10 minutos
        return () => clearInterval(intervalId);
    }, []);

    function listar() {
        const token = sessionStorage.getItem("token");

        woofJoyApi
            .get(`/avaliacoes/parceiro/${idParceiro}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setListaAvaliacoes(response.data);
                if (response.data.length > 0) {
                    const somaNotas = response.data.reduce((soma, avaliacao) => soma + avaliacao.nota, 0);
                    setAvaliacaoMedia((somaNotas / response.data.length).toFixed(2));
                } else {
                    setAvaliacaoMedia("0");
                }
                console.log(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }

    return (
        <>
            <div className="card-servico cards">
                <div className="container-foto" style={{ backgroundImage: `url("${imagem}")` }}></div>
                <div className="container-dados">
                    <div className="informacoes-parceiro">
                        <section className="servicos">
                            {servicoWalker !== "" && (
                                <strong className="servico-nome">🐕‍🦺{servicoWalker}</strong>
                            )}
                            {servicoSitter !== "" && (
                                <strong className="servico-nome">🐶{servicoSitter}</strong>
                            )}
                        </section>

                        <label className="nome-prestador">{nome} {sobrenome}</label>
                        <section className="endereco">
                            <img className="imagem-localizacao" src={point} alt="ponto de localização" />
                            <label className="cidade">{logradouro},{uf}</label>
                        </section>
                    </div>
                    <label className="descricao">
                        <strong className="descricao-texto-card-parceiro">
                            {descricao}
                        </strong>
                    </label>
                </div>

                <div className="container-estrelas">
                    <div className="avaliacao">{avaliacaoMedia} ★</div>
                </div>
            </div>
        </>
    );
}

export default CardParceiro;
