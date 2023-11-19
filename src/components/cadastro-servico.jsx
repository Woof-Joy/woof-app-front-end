import React, { useState } from "react";
import Pag from '../components/cadastro-servico-pagina'
import Radio from '../components/cadastro-servico-sim-nao'
import Perguntas from '../components/cadastro-servico-perguntas'
import FormInfo from '../components/cadastro-servico-form-informacoes'
import Button from '../components/cadastro-servico-button'
import Menu from '../components/MenuCliente'



function CadastroServico(){
  const perguntasPadrao = [
    "Cuida de pets especiais?",
    "Aceita cachorros idosos?",
    "Aceita pet bravo?",
    "Aceita pet de grande porte?",
    "Aceita fêmeas no cio?"
  ];

  const perguntasPersonalizadas = [
    "Possui área externa?",
    "Tem animais?",
    "Tem crianças?",
    "Alguma rotas de fuga?",
    "O pet sobe em sofá/cama?"
  ];

  const opcoesQuantidadePetPadrao = ["1", "2", "3", "4", "toda família addams"];
  const opcoesQuantidadePetPersonalizado = ["Casa", "Apartamento"];


  const qtdPadrao =["Recebe quantos pets?"]
  const qtdPersonalizada =["Residência do tipo:"]

  const txtPadrao =["Informações sobre o Serviço(s)"]
  const txtPersonalizado =["Informações sobre Acomodação (Pet Sitter)"]



return (
    <>
    <div className="container">
        < Menu />
      <div className="teste-1">
        < Pag />

      </div>
      <div className="teste-2">
       <FormInfo
       qtdPet={qtdPadrao} 
       txt={txtPadrao}
       opcoesQuantidadePet={opcoesQuantidadePetPadrao}
       perguntas={perguntasPadrao}
  
       />
       <FormInfo 
       qtdPet={qtdPersonalizada}
       txt={txtPersonalizado}
       opcoesQuantidadePet={opcoesQuantidadePetPersonalizado}
       perguntas={perguntasPersonalizadas}

        />
     <div className="cadastro-servico-button">
       <Button/>
     </div>
      </div>
    </div>

    </>
)

}
export default CadastroServico