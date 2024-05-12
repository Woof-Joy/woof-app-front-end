import React, { useState } from "react";
import "../../css/chat.css";
import foto from "../../imgs/mock/semfoto.jpg";

function ContatoChat(props) {
  const { id, nome } = props;
  const [backGraundColor, setBackGraundColor] = useState("#E5E5E5"); 
  const [color, setColor] = useState("black"); 

  function contatoDados(nome, id) {
    sessionStorage.setItem("contatoName", nome);
    sessionStorage.setItem("contatoId", id);
    setBackGraundColor("#DB4B90");
    setColor("white") 
  }

  const sectionStyle = {
    backgroundColor: backGraundColor,
    color: color
  };

  return (
    <>
      <section
        onClick={() => contatoDados(nome, id)}
        style={sectionStyle}
        className="contato-chat-container"
      >
        <img className="contato-chat-foto" src={foto} alt="hist-chat-foto-contato" />
        <p className="contato-chat-nome">{nome}</p>
      </section>
    </>
  );
}

export default ContatoChat;
