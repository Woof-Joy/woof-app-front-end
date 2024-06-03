// import React, { useEffect, useState } from "react";
// import { LocalDateTime } from "js-joda"; // Importe LocalDate corretamente
// import woofJoyApi from "../woof-joy-api";
// import Menu from "./componentes-gerais/MenuCliente";
// import "../../css/meus-servicos.css"
// import AguardandoConfirmacao from "./aguardando-confirmacao";
// import chat from "../../imgs/meus-servicos/icon-chat.png"
// import perfil from "../../imgs/meus-servicos/image 204.png"


function HistoricoClienteServicos() {

    // const userId = sessionStorage.getItem("userId");
    const userId = 2;
    const token = sessionStorage.getItem("token");

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
                setServicosList(response.data)
            })
            .catch((erroOcorrido) => {
                console.log(userId);
                console.log("Servicos:" + erroOcorrido);
            });
    }


    return (
        <>
            <Menu />

            <div className="container-meus-servicos">

                <div className="header-meus-servicos">
                    <div className="titulo-meus-servicos">
                        <h1>Historico de Serviços</h1>
                        <h4>Aqui você pode ver todos os serviçõs que voce agendou.</h4>

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
                    {servicosParceiroList.map((ficha) =>
                        ficha.servicos.map((servicoFicha) => (
                            <AguardandoConfirmacao
                                key={ficha.id}
                                servico={ficha.tipoServico}
                                dataHoraInicio={servicoFicha.dataHoraInicio}
                                dataHoraFim={servicoFicha.dataHoraFim}
                                clienteNome={servicoFicha.cliente}
                                status={servicoFicha.status}
                                idServico={servicoFicha.id}
                            />
                        ))
                    )}
                </div>

            </div>

        </>
    );
}
export default HistoricoClienteServicos;