import React, { useState } from "react";
import "../css/cadastra-edita-doacao.css";
import Textarea from "../components/cadastro-servico-textarea";
import Menu from "./componentes-gerais/MenuCliente";
import UpdateImg from "./componentes-gerais/BotaoUpload";
import SimNao from "./cadastro-servico-sim-nao";
import woofJoyApi from "../woof-joy-api";
import Button from "./componentes-gerais/button";
import { useNavigate } from 'react-router-dom';



//import foto from "../../imgs/mock/semfoto.jpg";


function CadastraEditaDoacao() {

  const token = sessionStorage.getItem("token")
  const userId = sessionStorage.getItem("userId")

  const navigate = useNavigate()

  const [item, setItem] = useState({
    titulo: "",
    imgItemDoacao: "",
    descricao: "",
    entrega: false,
    marcaPontoEncontro: false,//
    estado: "",
    enviaCorreio: false,
    cobraTaxa: false,
    necessarioRetirada: false,//
    categoria: ""

  });




  // http://localhost:8080/itens/1

  function postarItem() {
    woofJoyApi
      .post(`/itens/${userId}`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setItem(item)
        console.log(response.data);
        alert("item publicado com sucesso")
        navigate("/doacao")
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido.mensagem);
        alert("erro ao publicar item")

      });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value
    });
  };

  //   const handleTipoServicoChange = (event) => {
  //     setTipoServico(event.target.value);
  //     setServicoBody({
  //         ...servicoBody,
  //         tipoServico: event.target.value
  //     });
  // };


  return (
    <>
      <div className="conteudo-edita-cadastra-servico">
        <Menu />
        <div className="titulo-cadastra">
          <span className="titulo-publicacao-doacao">Publicação</span>
          <p className="sub-doacao">Doação</p>
        </div>
        <div className="titulo-input">
          <span>Título</span>
        </div>
        <div className="objeto-doacao">
          <input
            className="o-nome-obj-doacao"
            type="text"
            placeholder="Item a ser doado"
            name="titulo"
            value={item.titulo}
            onChange={handleInputChange}
          />
        </div>
        <div className="textarea-e-estado-categoria">
          <div className="caixa-doacao">
            <Textarea
              name={"descricao"}
              onChange={handleInputChange}
            />
          </div>

          <div className="categoria-estado">

            <select className="categoria-doacao" id="categoria-doacao" onChange={handleInputChange} name="categoria">
              <option className="txt-selected" selected disabled>Categoria</option>
              <option value="brinquedo">brinquedo</option>
              <option value="higiêne">higiêne</option>
              <option value="acessórios">acessórios</option>
              <option value="alimentar">alimentar</option>
              <option value="passeio">passeio</option>
            </select>

            <select className="categoria-doacao" id="estado-doacao" onChange={handleInputChange} name="estado">
              <option className="txt-selected" selected disabled>Estado</option>
              <option value="novo">novo</option>
              <option value="usado">usado</option>
            </select>

          </div>
        </div>

        <div className="upload-img-doacao">
          <div class="enviar-img-doacao">
            <p className="enviar-img-doacao-txt">Imagens</p>
            <UpdateImg />
          </div>
        </div>
        <div className="formulario-de-retirada-doacao">
          <div className="perguntas-retirada-primeira-parte">
            <p className="txt-retirada">Retirada:</p>
            <div className="primeira-parte-perguntas">
              <div className="perguntas-retirada-um">
                <div className="selecoes-cadastro-doacao">
                  <p className="p-das-selecoes-cadastro-doacao">Leva o produto até o receptor?</p>
                  <SimNao
                    name={"entrega"}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="selecoes-cadastro-doacao">
                  <p className="p-das-selecoes-cadastro-doacao">Envia pelo correio?</p>
                  <SimNao
                    name={"enviaCorreio"}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="selecoes-cadastro-doacao">
                  <p className="p-das-selecoes-cadastro-doacao">Cobra taxa?</p>
                  <SimNao
                    name={"cobraTaxa"}
                    onChange={handleInputChange}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="buttons-edita-doacao">
          <Button
            displayOn="flex"
            buttonBackColor="#DB4B90"
            fontColor="white"
            buttonName="Publicar"
            buttonHeigth="60%"
            buttonWidth="60%"
            onClick={() => postarItem()}
          />
        </div>
      </div>
    </>
  );
}
export default CadastraEditaDoacao;
