import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/meus-servicos.css";
import CardHistorico from "../card-historico";


function HistoricoClienteServicos() {
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");

    const [servicosParceiroList, setServicosList] = useState([]);
    const [filtroStatus, setFiltroStatus] = useState("todos");

    useEffect(() => {
        listarServicos();

        const intervalId = setInterval(() => {
            listarServicos();
        }, 1 * 60 * 2000);

        return () => clearInterval(intervalId);
    }, []);

    function listarServicos() {
        woofJoyApi
            .get(`/servicos/cliente/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setServicosList(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(userId);
                console.log("Servicos:" + erroOcorrido);
            });
    }

    const handleFiltroChange = (event) => {
        setFiltroStatus(event.target.value);
    };

    const servicosFiltrados = servicosParceiroList.filter((servicos) => {
        if (filtroStatus === "todos") return true;
        if (filtroStatus === "agendados") return servicos.status === "Aguardando Confirmação" 
        if (filtroStatus === "andamento") return servicos.status === "Em andamento";
        if (filtroStatus === "realizados") return servicos.status === "Concluído";
        return false;
    });

    return (
        <>
            <Menu />

            <div className="container-meus-servicos">
                <div className="header-meus-servicos">
                    <div className="titulo-meus-servicos">
                        <h1>Historico de Serviços</h1>
                        <h4>Aqui você pode ver todos os serviços que voce agendou.</h4>

                        <div className="filtros-meus-servicos">
                            <h6>
                                Status <br />
                                <select
                                    className="select-meus-servicos"
                                    name="filtro"
                                    value={filtroStatus}
                                    onChange={handleFiltroChange}
                                >
                                    <option value="todos">Todos</option>
                                    <option value="agendados">Aguardando Confirmação</option>
                                    <option value="andamento">Em andamento</option>
                                    <option value="realizados">Concluído</option>
                                </select>
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="container-card-meus-servicos">
                    {servicosFiltrados.length > 0 ? (
                        servicosFiltrados.map((servicos) => (
                            <CardHistorico
                                key={servicos.id}
                                servico={servicos.tipoServico}
                                dataHoraInicio={servicos.inicioDoServico}
                                dataHoraFim={servicos.fimDoServico}
                                clienteNome={servicos.cliente}
                                status={servicos.status}
                                relatorio={servicos.relatorio}
                                parceiroNome={servicos.nomeParceiro}
                                idParceiro={servicos.idParceiro}
                                idServico={servicos.id}
                            />
                        ))
                    ) : (
                        <p> Você ainda não tem serviços agendados.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default HistoricoClienteServicos;
