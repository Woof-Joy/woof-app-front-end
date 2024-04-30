import React, { useEffect, useState } from "react";
import { LocalDate } from "js-joda"; // Importe LocalDate corretamente
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/meus-servicos.css"
import AguardandoConfirmacao from "../aguardando-confirmacao";
import chat from "../../imgs/meus-servicos/icon-chat.png"
import perfil from "../../imgs/meus-servicos/image 204.png"


function MeusServicos() {

    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");

    // const [servicosParceiro, setServicos] = useState({
    //     id: 1,
    //     tipoServico: "DogWalker",
    //     valor: 15.0,
    //     servico: null,
    //     qtdServico: 1,
    //     servicos: [
    // dataHoraFim: LocalDate.parse("2024-04-29"),
    //     dataHoraInicio: LocalDate.parse("2024-04-28"),
    //     cliente: "Filipe",
    // ]
    // })

    const [servicosParceiroList, setServicosList] = useState([])


    useEffect(() => {
        listarServicos();

        const intervalId = setInterval(() => {
            listarServicos();
        }, 1 * 60 * 2000);//minutos em milisegundos(O numero primario determina, exemplo: Se 1 então 1 minuto)   

        return () => clearInterval(intervalId);
    }, []);

    function listarServicos() {
        woofJoyApi
            .get(`/ficha/parceiro/ ${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(response.data);
                setServicosList(response.value)

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            });
    }


    return (
        <>
            <Menu />

            <div className="container-meus-servicos">

                <div className="header-meus-servicos">
                    <div className="titulo-meus-servicos">
                        <h1>Meus Serviços</h1>
                        <h4>Consulte as solicitações dos seus clientes e os serviços prestados.</h4>

                        <div className="filtros-meus-servicos">
                            <h6>
                                Status <br />
                                <select className="select-meus-servicos" name="filtro" id="">
                                    <option value="todos">Todos</option>
                                    <option value="agendados">Agendados</option>
                                    <option value="realizados">Realizados</option>
                                </select>
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="container-card-meus-servicos">
                    {servicosParceiroList?.map((ficha) =>
                        ficha?.map((servicoList) => (
                            <AguardandoConfirmacao
                                key={ficha.id} // Adicione uma chave única para cada item na lista
                                servico={ficha.tipoServico}
                                dataHoraInicio={servicoList?.dataHoraInicio.toString()}
                                dataHoraFim={servicoList?.dataHoraFim.toString()}
                                clienteNome={servicoList?.cliente}
                            />
                        ))
                    )}
                </div>

            </div>

        </>
    );
}
export default MeusServicos;