import React, { useState } from "react";
import "../css/radio-cadastro-servico.css";
import Radio from '../components/cadastro-servico-sim-nao' 
import Textarea from '../components/cadastro-servico-textarea'
import woofJoyApi from "../woof-joy-api";

function CadastroServicoPagina() {
  return (
    <>
      <div className="cadastro-servico-pagina">
        <div className="titulos">
          <div className="titulo-servico">
            <p className="txt-pagina-servico">
              Página de Serviço
            </p>
            <p className="txt-sub-titulo-servico">Configure aqui sua página de serviço</p>
          </div>

          <div className="sub-titulo-selecao-servico">
            <p className="txt-servico">
              Serviços
            </p>
            <p className="sub-txt-sercivo">
              Selecione o(s) serviço(s) que pretende prestar...
            </p>
          </div>
        </div>

        <div className="tipo-servicos-input">

          <div className="tipo-servicos-dog-walker-dog-siter">
            <div className="input-servico-walker">
            <input className="radio-dog-walker" type="checkbox" id="others" name="gender"></input>
            <label className="txt-dog-walker" for="others">
              Dog Walker
            </label>
            </div>

            <div className="input-servico-sitter">
            <input className="radio-dog-walker" type="checkbox" id="others" name="gender"></input>
            <label className="txt-dog-sitter" for="others">
              Dog Sitter
            </label>
            </div>
          </div>


          <div className="duracao-e-recebe-input">
            <div className="input-duracao-walker">
                <select className="selecao-pets-duracao" id="duracao">
                  <option value="30">30 min</option>
                  <option value="60">60 min</option>
                </select>
            </div>
            <div className="input-duracao-sitter">
                <p className="txt-residencia">Recebe o pet na residência?</p>
                <div className="radio-componente">
                < Radio />
                </div>
            </div>
          </div>
          <div className="passeio">
                    <div className="por-passeio">
                        <div className="valor-passeio">
                            <p className="sifrao">$</p>
                            <input className="input-passeio" type="text"name="por-passeio" id="por-passeio" placeholder="Valor" required></input>
                        </div>
                        <label className="txt-passeio">Por Passeio</label>
                    </div>

                    <div className="por-hora">
                        <div className="valor-hora">
                            <p className="sifrao">$</p>
                            <input className="input-passeio" type="text" name="por-hora" id="por-hora" placeholder="Valor" required></input>
                        </div>
                        <label className="txt-passeio"  for="txt-hora">Por Hora</label>
                    </div>
                </div>
                <div className="caixa-descricao">
                < Textarea/>
                </div>
                <div class="enviar-img">
                  <label className="txt-img" for="imagem" Name="custom-file-upload">
                    Imagens
                  </label>
                    <input className="file-img" type="file" id="imagem" accept="image/*"></input>
                </div>
        </div>
      </div>
    </>
  );
}
export default CadastroServicoPagina;
