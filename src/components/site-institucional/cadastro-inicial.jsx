import React from "react";
import "../css/cadastro-inicial.css"


function CadastroInicial() {
    return (
        <>
        
<body>
    <section class="grid grid-row-1">
        <div class="item item-1">
            <p class="texto-menor">No Woof Joy, você pode ser o <b>cliente</b> ou nosso <b>parceiro</b>.</p>
            <p class="texto-maior">Criar conta como...</p>
        </div>
        <div class="item item-2">
            <img class="img-bg-top" src="../src/imgs/cadastro-inicial/bg-top-cadastro-inicial.png" alt=""/>
        </div>
    </section>
    <section class="grid grid-row-2">
        <div class="item item-3">
            <a href="./cadastro.html">
                <div class="container-card">
                    <img class="icon" src="../src/imgs/cadastro-inicial/icon-cliente.png" alt=""/>
                    <div class="card">
                        <div class="card-border">
                            <p class="title">Cliente</p>
                            <p class="content">Quero encontrar os melhores dog walkers e pet sitters para cuidar do meu
                                cachorro.</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="item item-4">
            <a href="./cadastro.html">
                <div class="container-card">
                    <img class="icon" src="../src/imgs/cadastro-inicial/icon-parceiro.png" alt=""/>
                    <div class="card">
                        <div class="card-border">
                            <p class="title">Parceiro</p>
                            <p class="content">Quero me conectar a donos de cães que precisam dos meus serviços.</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <section class="grid-row-3">
        <div class="item item-5">
            <img class="img-bg-bot" src="../src/imgs/cadastro-inicial/bg-bot-cadastro-inicial.png" alt=""/>
        </div>
    </section>
</body>
        </>
    )
}
export default CadastroInicial;