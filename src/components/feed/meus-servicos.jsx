import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/meus-servicos.css";
import AguardandoConfirmacao from "../aguardando-confirmacao";

function MeusServicos() {

    // const userId = sessionStorage.getItem("userId");
    const userId = 2;
    const token = sessionStorage.getItem("token");

    const [servicosParceiroList, setServicosList] = useState([]);
    const [filtro, setFiltro] = useState("todos");

    useEffect(() => {
        listarServicos();

        const intervalId = setInterval(() => {
            listarServicos();
        }, 1 * 60 * 2000); // minutos em milisegundos (O número primário determina, exemplo: Se 1 então 1 minuto)   

        return () => clearInterval(intervalId);
    }, []);

    function listarServicos() {
        woofJoyApi
            .get(`/ficha/parceiro/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(response.data);
                setServicosList(response.data);
            })
            .catch((erroOcorrido) => {
                console.log(userId);
                console.log("Servicos:" + erroOcorrido);
            });
    }

    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    const filtrarServicos = (servicos) => {
        if (filtro === "todos") {
            return servicos;
        }
        return servicos.filter(servico => servico.status === filtro);
    };

    const servicosFiltrados = servicosParceiroList.flatMap(ficha => 
        filtrarServicos(ficha.servicos).map(servico => ({
            ...servico,
            tipoServico: ficha.tipoServico
        }))
    );

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
                                <select
                                    className="select-meus-servicos"
                                    name="filtro"
                                    value={filtro}
                                    onChange={handleFiltroChange}
                                >
                                    <option value="todos">Todos</option>
                                    <option value="Aguardando Confirmação">Aguardando Confirmação</option>
                                    <option value="Em andamento">Em andamento</option>
                                    <option value="Concluído">Concluído</option>
                                </select>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="container-card-meus-servicos">
                    {servicosFiltrados.length === 0 ? (
                        <p>Nenhum serviço encontrado para o status selecionado.</p>
                    ) : (
                        servicosFiltrados.map((servicoFicha) => (
                            <AguardandoConfirmacao
                                key={servicoFicha.id}
                                servico={servicoFicha.tipoServico}
                                dataHoraInicio={servicoFicha.dataHoraInicio}
                                dataHoraFim={servicoFicha.dataHoraFim}
                                clienteNome={servicoFicha.cliente}
                                status={servicoFicha.status}
                                idServico={servicoFicha.id}
                                relatorio={servicoFicha.relatorio}
                            />
                        ))
                    )}
                </div>

            </div>

        </>
    );
}

export default MeusServicos;
