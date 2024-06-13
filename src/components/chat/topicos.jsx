import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";
import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';

const Topicos = () => {


    const [listaTopicos, setTopicos] = useState([])
    const [mensagemBody, setMensagemBody] = useState({
        message: "front",
        idRemetente: 22,
        idDestinatario: 20,
        tipo: "doacao"
    })
    const userIdLogado = 22
    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGF0ZUBlbWFpbC5jb20iLCJyb2xlIjoiQyIsImlhdCI6MTcwMDUxMDkyMCwiZXhwIjoxNzA0MTEwOTIwfQ.zUJ0ofjvljd0bDxmUaGtrWXGvqnlh72e9p0EUrSp-wZ2c35CODa2AewD1eSGmxe6"


    useEffect(() => {
        listar();

        const intervalId = setInterval(() => {
            listar();
        }, 20 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    function listar() {
        woofJoyApi
            .get(`/notification/topicos/${userIdLogado}`)
            .then((response) => {
                console.log(response.data);
                console.log(response.mensagem);
                console.log(response.status);
                setTopicos(response.data);

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    function sendMensage() {
        woofJoyApi
            .post(`/notification`, mensagemBody,
            {
                headers: {
                  Authorization:` Bearer ${token}`
                }
            } )
            .then((response) => {
                console.log(response.data);
                console.log(response.mensagem);
                console.log(response.status);
                setTopicos(response.data);

            })
            .catch((erroOcorrido) => {
              
                console.log(erroOcorrido.mensagem);
            });
    }





    const sendMensageAlert = () => {
        const socketStatus = document.getElementById('status');
        const listaMensagem = document.getElementById('mensagens');

        const socket = new SockJS('http://localhost:8080/websocket');
        const stompClient = Stomp.over(socket);

        stompClient.webSocketFactory = () => {
            return socket;
        };

        stompClient.onConnect = (frame) => {
            socketStatus.innerHTML = frame.command;
            socketStatus.className = 'open';

            //   console.log("Connected");
            //   stompClient.subscribe("/topic/doacao/22/20", function (message) {
            //     showMessage(message.body);

            // Inscrever-se no tópico
            var subscription = stompClient.subscribe('/topic/doacao/22/20', function (message) {
                console.log('Mensagem recebida do tópico:', message.body);
            });

            // Enviar uma mensagem para o tópico (para teste)
            stompClient.send('/topic/doacao/22/20', {}, JSON.stringify({ 'message': mensagemBody.message }));

            //   });
        };

        stompClient.activate();

        function showMessage(mensagem) {
            console.log("asfsafsasaf", mensagem);
            listaMensagem.innerHTML += '<li class="recebida"><span>Recebido: </span>' + mensagem + '</li>';
            // Aqui, você precisará definir ou importar a variável mensagemTexto, dependendo de como ela é utilizada no seu código
            // mensagemTexto.value = '';
        }
    };

    return (
        <>
            <div id="page-wrapper">
                <h1>Client</h1>
                <div id="status">Conectando a aplicação...
                    <button onClick={sendMensageAlert}>SEND MERDA</button>
                </div>
                <ul id="mensagens"></ul>
            </div>
        </>
    );
};

export default Topicos;
