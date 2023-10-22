import "../css/cadastro-inicial.css"
import customEnv from "../process";

function setEnvVar(name, value) {
  customEnv[name] = value;
}

  
function LoginInicial() {
  
    function EscolherTipo(numero) {
      setEnvVar("role", numero);
      console.log(customEnv.role);
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
              <img className="img-bg-top" src="../src/imgs/cadastro-inicial/bg-top-cadastro-inicial.png" alt="" />
            </div>
          </section>
          <section className="grid grid-row-2">
            <div className="item item-3">
              <div className="container-card">
                <img className="icon" src="../src/imgs/cadastro-inicial/icon-cliente.png" alt="" />
                <div className="card">
                  <div className="card-border" onClick={() => EscolherTipo("C")}>
                    <p className="title">Cliente</p>
                    <p className="content">Logar como cliente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-4">
  
              <div className="container-card">
                <img className="icon" src="../src/imgs/cadastro-inicial/icon-parceiro.png" alt="" />
                <div className="card">
                  <div className="card-border" onClick={() => EscolherTipo("P")}>
                    <p className="title">Parceiro</p>
                    <p className="content">Logar como parceiro</p>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
          <section className="grid grid-row-3">
            <div className="item item-5">
              <img className="img-bg-bot" src="../src/imgs/cadastro-inicial/bg-bot-cadastro-inicial.png" alt="" />
            </div>
          </section>
        </body>
      </>
    );
  }
  export default LoginInicial;

  