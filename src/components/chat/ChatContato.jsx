import React from "react";
import ExemploFotoContato from "../../imgs/chat/exemplo-foto-contato.png";
import "../../css/chat.css";

function ContatoChat(props) {
  const { 
    id = "",nome = "teste", imagem } = props;

  function contatoDados(props) {
    sessionStorage.setItem("contatoName", props.nome);
    sessionStorage.setItem("contatoId", props.id);
    // window.location.reload();
  }

  return (
    <>
      <section
        onClick={() => contatoDados(props)}  
        className="contato-chat-container"
      >
        <img className="contato-chat-foto" src={ExemploFotoContato} alt="hist-chat-foto-contato" />
        <p className="contato-chat-nome">{nome}</p>
      </section>
    </>
  );
}

export default ContatoChat;
