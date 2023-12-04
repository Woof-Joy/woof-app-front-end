import React from "react";
import ExemploFotoContato from "../../imgs/chat/exemplo-foto-contato.png";
import "../../css/chat.css";
import foto from "../../imgs/mock/semfoto.jpg";

function ContatoChat(props) {
  const { 
    id = "",nome = "teste", imagem } = props;

  function contatoDados(props) {
    sessionStorage.setItem("contatoName", props.nome);
    sessionStorage.setItem("contatoId", props.id);
  }

  return (
    <>
      <section
        onClick={() => contatoDados(props)}  
        className="contato-chat-container"
      >
        <img className="contato-chat-foto" src={foto} alt="hist-chat-foto-contato" />
        <p className="contato-chat-nome">{nome}</p>
      </section>
    </>
  );
}

export default ContatoChat;
