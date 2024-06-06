import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/feed-doacao.css"
import lupa from "../../imgs/feed-parceiro/lupa-pesquisa.png"
import chat from "../../imgs/meus-servicos/icon-chat.png"
import perfil from "../../imgs/meus-servicos/image 204.png"
import ItemFeed from "./item-feed";
import Button from "../componentes-gerais/button";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function FeedDocao() {

    const navigate = useNavigate();

    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")
    const enderecoLogado = sessionStorage.getItem("endereco");

    const [listaItens, setParceiros] = useState([])

    function guardarIdParaCaminhoFeedParceiro(IdDonoItem, nomeDonoItem) {
        sessionStorage.setItem("contatoId", IdDonoItem)
        sessionStorage.setItem("contatoName", nomeDonoItem)
    }


    useEffect(() => {
        listar();
        const intervalId = setInterval(() => {
            listar();
        }, 1 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    function listar() {
        woofJoyApi
            .get('/itens', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
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

            <div className="container-feed-doacao">

                <div className="header-feed-doacao">
                    <div className="titulo-feed-doacao">
                        <h1>Doação</h1> <br />
                        <h3>Doe, receba doações e faça</h3>
                        <h3>um cãozinho feliz!</h3>
                    </div>
                    <div className="entradas-feed-doacao">

                        <div className="barra-pesquisa-feed-doacao">
                            <img className="img-pesquisa-feed-doacao" src={lupa} alt="ícone de pesquisa" />
                            <input className="input-pesquisa-feed-doacao" type="text" placeholder="pesquisar" />
                        </div>
                        <div className="filtros-feed-doacao">

                            <h6>
                                Sua Localização <br />
                                <p>📍{enderecoLogado}</p>
                            </h6>


            
                            <h6 className="button-doar-feed-doacao">
                                <Button
                                    displayOn="flex"
                                    buttonBackColor="#DB4B90"
                                    fontColor="white"
                                    buttonName="Doar"
                                    buttonHeigth="60%"
                                    onClick={() => navigate("/cadastra-edita-doacao")}
                                />
                            </h6>

                        </div>
                    </div>
                    

                </div>
                {listaItens && listaItens.length > 0 ? (
                    listaItens.map((item) => (
                        <Link
                            to={"/chat"}
                            onClick={() => guardarIdParaCaminhoFeedParceiro(
                                item.idDonoItem,
                                item.nomeDonoItem
                            )}
                            className="container-card-feed-doacao"
                            key={item.id} // Adicione uma chave única para cada item
                        >
                            <ItemFeed
                                titulo={item.titulo}
                                categoria={item.categoria}
                                logradouro={item.endereco.logradouro}
                                descricao={item.descricao}
                                uf={item.endereco.uf}
                            />
                        </Link>
                    ))
                ) : (
                    <div>Nenhum item disponível no momento</div>
                )}



            </div>

        </>
    );
}
export default FeedDocao;