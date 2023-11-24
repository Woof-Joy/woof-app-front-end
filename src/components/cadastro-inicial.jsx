import "../css/cadastro-inicial.css"
import customEnv from "../process";

import imgBgTop from '../imgs/cadastro-inicial/bg-top-cadastro-inicial.png'
import imgIconCliente from '../imgs/cadastro-inicial/icon-cliente.png'
import imgIconParceiro from '../imgs/cadastro-inicial/icon-parceiro.png'
import imgBgBot from '../imgs/cadastro-inicial/bg-bot-cadastro-inicial.png'

import { Link } from 'react-router-dom';

function setEnvVar(name, value) {
    customEnv[name] = value;
  }
  
  function CadastroInicial() {
  
    function EscolherTipo(numero) {
      setEnvVar("tipo", numero);
      console.log(customEnv.tipo);
    };
  
    return (
      <>
  
        <body>

          <section className="grid grid-row-1">
            <div className="item item-1">
              <p className="texto-menor">No Woof Joy, você pode ser o <b>cliente</b> ou nosso <b>parceiro</b>.</p>
              <p className="texto-maior">Criar conta como...</p>
            </div>
            <div className="item item-2">
              <img className="img-bg-top" src={imgBgTop} alt="" />
            </div>
          </section>

          <section className="grid grid-row-2">
            <Link to="/cadastro" className="item item-3"  onClick={() => EscolherTipo(0)}>
              <div className="container-card">
                <img className="icon" src={imgIconCliente} alt="" />
                <div className="card-login-cadastro-inicial">
                  <div className="card-border">
                    <p className="title">Cliente</p>
                    <p className="content">Quero encontrar os melhores dog walkers e pet sitters para cuidar do meu
                      cachorro.</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/cadastro" className="item item-4" onClick={() => EscolherTipo(1)}>
              <div className="container-card">
                <img className="icon" src={imgIconParceiro} alt="" />
                <div className="card-login-cadastro-inicial">
                  <div className="card-border">
                    <p className="title">Parceiro</p>
                    <p className="content">Quero me conectar a donos de cães que precisam dos meus serviços.</p>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          <section className="grid grid-row-3">
            <div className="item item-5">
              <img className="img-bg-bot" src={imgBgBot} alt="" />
            </div>
          </section>
        </body>
      </>
    );
  }
  export default CadastroInicial;

  