import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import Menu from "../componentes-gerais/MenuParceiro";
import "../../css/meus-servicos.css"
import AguardandoConfirmacao from "../aguardando-confirmacao";
import chat from "../../imgs/meus-servicos/icon-chat.png"
import perfil from "../../imgs/meus-servicos/image 204.png"


function MeusServicos() {


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

            <div className="container-meus-servicos">

                <div className="header-meus-servicos">
                    <div className="titulo-meus-servicos">
                        <h1>Meus Serviços</h1>
                        <h4>Consulte as solicitações dos seus clientes e os serviços prestados.</h4>

                        <div className="filtros-meus-servicos">
                            <h6>
                                Status <br />
                                <select className="select-meus-servicos" name="" id=""></select>
                            </h6>

                        </div>
                    </div>

                    <div className="entradas-meus-servicos">
                        <img className="icon-chat-meus-servicos" src={chat} alt="icon-chat" />

                        <img className="foto-perfil-meus-servicos" src={perfil} alt="foto do cara" />
                    </div>

                </div>
                <div className="container-card-meus-servicos">
                    {listaParceiros?.map((parceiro) => (
                        <>
                        <AguardandoConfirmacao/>

                        </>
                    ))}

                </div>

            </div>

        </>
    );
}
export default MeusServicos;