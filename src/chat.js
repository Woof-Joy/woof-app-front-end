// Importe as bibliotecas necessárias
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

window.onload = () => {
  const socketStatus = document.getElementById('status');
  const listaMensagem = document.getElementById('mensagens');

  const socket = new SockJS('http://localhost:8080/websocket');
  const stompClient = Stomp.over(socket);

  stompClient.connect({}, function (frame) {
    socketStatus.innerHTML = frame.command;
    socketStatus.className = 'open';

    console.log("Connected");
    stompClient.subscribe('/topic/{id}', function (greeting) {
      showMessage(greeting.body);
    });
  });

  function showMessage(mensagem) {
    console.log("asfsafsasaf", mensagem);
    listaMensagem.innerHTML += '<li class="recebida"><span>Recebido: </span>' + mensagem + '</li>';
    // Aqui, você precisará definir ou importar a variável mensagemTexto, dependendo de como ela é utilizada no seu código
    // mensagemTexto.value = '';
  }
};
