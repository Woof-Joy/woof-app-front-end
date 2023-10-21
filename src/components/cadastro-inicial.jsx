import React from "react";
import "../css/cadastro-inicial.css"


function CadastroInicial() {
    return (
        <>
        
<body>
    <section className="grid grid-row-1">
        <div className="item item-1">
            <p className="texto-menor">No Woof Joy, você pode ser o <b>cliente</b> ou nosso <b>parceiro</b>.</p>
            <p className="texto-maior">Criar conta como...</p>
        </div>
        <div className="item item-2">
            <img className="img-bg-top" src="../src/imgs/cadastro-inicial/bg-top-cadastro-inicial.png" alt=""/>
        </div>
    </section>
    <section className="grid grid-row-2">
        <div className="item item-3">
            <a href="./cadastro.html">
                <div className="container-card">
                    <img className="icon" src="../src/imgs/cadastro-inicial/icon-cliente.png" alt=""/>
                    <div className="card">
                        <div className="card-border">
                            <p className="title">Cliente</p>
                            <p className="content">Quero encontrar os melhores dog walkers e pet sitters para cuidar do meu
                                cachorro.</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div className="item item-4">
            <a href="./cadastro.html">
                <div className="container-card">
                    <img className="icon" src="../src/imgs/cadastro-inicial/icon-parceiro.png" alt=""/>
                    <div className="card">
                        <div className="card-border">
                            <p className="title">Parceiro</p>
                            <p className="content">Quero me conectar a donos de cães que precisam dos meus serviços.</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <section className="grid-row-3">
        <div className="item item-5">
            <img className="img-bg-bot" src="../src/imgs/cadastro-inicial/bg-bot-cadastro-inicial.png" alt=""/>
        </div>
    </section>
</body>
        </>
    )
}
export default CadastroInicial;