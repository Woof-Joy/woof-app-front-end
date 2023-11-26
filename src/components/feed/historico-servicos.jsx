import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuCliente";
import "../../css/historico-servicos.css"
import AguardandoConfirmacao from "../aguardando-confirmacao";
import chat from "../../imgs/meus-servicos/icon-chat.png"
import perfil from "../../imgs/meus-servicos/image 204.png"


function HistoricoServico() {

    const parametrosComponentCard = {
        displayOn: "flex",
        fontColor: "#DB4B90",
        divFontColor: "white",
        buttonBackColor: "white",
        cardBackColor: "#DB4B90",
        buttonName: "Ver relatório",
        status: "Finalizado",
        servico: "Nome do Serviço",
        dataHoraAgendamento: "2023-11-05T12:00:00",
        clienteNome: "Nome do Cliente",
        petNome: "Nome do Pet",
        textShadow: "black"
      };


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

            <div className="container-historico-servicos">

                <div className="header-historico-servicos">
                    <div className="titulo-historico-servicos">
                        <h1>Histórico de Serviços</h1>
                        <h4>Consulte os serviços solicitados.</h4>

                        <div className="filtros-historico-servicos">
                            

                        </div>
                    </div>

                    <div className="entradas-historico-servicos">
                        <img className="icon-chat-historico-servicos" src={chat} alt="icon-chat" />

                        <img className="foto-perfil-historico-servicos" src={perfil} alt="foto do cara" />
                    </div>

                </div>
                <div className="container-card-historico-servicos">
                    {listaParceiros?.map((parceiro) => (
                        <>
                        <AguardandoConfirmacao {...parametrosComponentCard}  />

                        </>
                    ))}

                </div>

            </div>

        </>
    );
}
export default HistoricoServico;