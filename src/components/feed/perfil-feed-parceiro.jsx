/*import React from "react";
import Menu from "../menu";
import Carrossel from "../carrossel";

function FeedParceiro(){
    return(
        <>
<header class="footer-feed">
            <img
              src="/src/imgs/feed-parceiro/img-mini-foto-lateral.png"alt="imagem pequena feed"/>
    </header>
        <div class="container">

            <section class="container-info-parceiro">
        <img  src="/src/imgs/feed-parceiro/foto-colaborador.png"alt="foto do colaborador"/>
        <div class="conteudo-info-parceiro">
            <p class="nome-parceiro">Rafael Marcos</p>

            <div class="conteudo-local-data-avaliacao">
                <div class="local">
                    <span class="icon-local"><i class="bi bi-geo-alt"></i></span>
                    <span class="txt-local"><p><b>Zona Sul, São Paulo</b></p></span>
                </div>
                <div class="data">
                    <span class="icon-data"><i class="bi bi-calendar3"></i></span>
                    <span class="txt-data"><p><b>Desde 01/01/2023</b></p></span>
                </div>
                <div class="avaliacao">
                    <span class="icon-avaliacao"><i class="bi bi-star-fill"></i></span>
                    <span class="txt-avaliacao"><p><b>4,5(12)</b></p></span>
                </div>
            </div>
            <div class="txt-apresentacao">
                <p>
                    Lorem ipsum dolor sit amet. Sed nemo amet et quibusdam amet et iste voluptas. 
                    Ut earum labore non ratione velit et aliquid enim nam Quis perferendis 33 nemo perspiciatis!
                </p>
            </div>
            <button class="btn-agendar-servico" type="button">
                Agendar Serviço
            </button>
        </div>
            </section>

            <section class="carrossel-servicos">
                <div class="carrossel">
                    aqui contem um carrossel ;)
                </div>
                <div class="servicos">
                    <div class="info-servicos">
                        <img class="caixa-branca" src="/src/imgs/feed-parceiro/caixa-info-servico.png" alt="caixa info servicos"/>
                        <p class="txt-servico">Serviços</p>
                        <p class="txt-descricao-servico">Qtd. Serviços Prestados: 20</p>
                    </div>
                    <div class="tipo-servicos">
            
                        <div class="dog-walker">
                            <img src="/src/imgs/feed-parceiro/icon-dog-walker.png" alt="icon dog walker"/>
                            <div class="dog-walker-txt">
                                <div class="titulo">Dog Walker</div>
                                <p>R$ 60,00 / Passeio</p>
                                <p>Duração: 40min</p>
                            </div>
                        </div>

                        <div class="dog-sitter">
                            <img src="/src/imgs/feed-parceiro/icon-dog-sitter.png" alt="icon dog sitter"/>
                            <div class="dog-sitter-txt">
                            <div class="titulo">Dog Sitter</div>
                            <p>R$ 20,00 / Hora</p>
                            <p>Receber o Pet na Resid.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="observacoes">
                <p class="titulo-obs-acom">Observacões</p>
                    <p class="txt-obs-acom" >(vale para os dois serviços)</p>
                <div class="todas">
                    <div class="obs-1">
                        <div class="conteudo-obs-1">
                            <img class="img-icon-1" src="/src/imgs/feed-parceiro/icon-two-pet.png" alt="icon-two-pet"/>
                            <p>Recebe até 2 pets</p>
                        </div>
                        <div class="conteudo-obs-1">
                            <img class="img-icon-1" src="/src/imgs/feed-parceiro/icon-pet-especial.png" alt="icon-pet-especial"/>
                            <p>Cuida de pets especiais</p>
                        </div>
                    </div>

                    <div class="obs-2">
                        <div class="conteudo-obs-2">
                            <img class="img-icon-2" src="/src/imgs/feed-parceiro/icon-dog-idoso.png" alt="dog-idoso"/>
                            <p>Aceita pets idosos</p>
                        </div>
                
                        <div class="conteudo-obs-2">
                            <img class="img-icon-2" src="/src/imgs/feed-parceiro/icon-dog-bravo.png" alt="icon-pet-bravo"/>
                            <p>Aceita pet bravo</p>
                        </div>
                    </div>

                    <div class="obs-3">
                        <div class="conteudo-obs-3">
                            <img class="img-icon-3" src="/src/imgs/feed-parceiro/icon-dog-grande.png" alt="dog-grande"/>
                            <p>Aceita pets de grande porte</p>
                        </div>
                        <div class="conteudo-obs-3">
                            <img class="img-icon-3" src="/src/imgs/feed-parceiro/icon-dog-femea.png" alt="icon-pet-femea-cio"/>
                            <p>Não aceita fêmeas no cio</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="acomodacoes">
                <p class="titulo-obs-acom">Acomodação </p> 
                <p class="txt-obs-acom">(Só no caso de pet sitter)</p>
                    <div class="todas">
                        <div class="acom-4">
                            <div class="conteudo-anc-4">
                                <img class="img-icon-4" src="/src/imgs/feed-parceiro/icon-dog-mora-em-casa.png" alt="icon-dog-mora-em-casa"/>
                                <p>Mora em casa</p>
                            </div>
                            <div class="conteudo-anc-4">
                                <img class="img-icon-4" src="/src/imgs/feed-parceiro/dog-area-externa.png" alt="dog-area-externa"/>
                                <p>Possui área externa</p>
                            </div>
                        </div>

                        <div class="acom-5">
                            <div class="conteudo-anc-5">
                                <img class="img-icon-5" src="/src/imgs/feed-parceiro/icon-dog-tem-animal.png" alt="icon-dog-tem-animal"/>
                                <p>Tem animais</p>
                            </div>
                            <div class="conteudo-anc-5">
                                <img class="img-icon-5" src="/src/imgs/feed-parceiro/icon-dog-sem-crianca.png" alt="icon-sem-crinca"/>
                                <p>Não tem crianças</p>
                            </div>
                        </div>

                        <div class="acom-6">
                            <div class="conteudo-anc-6">
                                <img class="img-icon-6" src="/src/imgs/feed-parceiro/icon-dog-sem-fuga.png" alt="icon-dog-sem-fuga"/>
                                <p>Sem rotas de fuga</p>
                            </div>
                            <div class="conteudo-anc-6">
                                <img class="img-icon-6" src="/src/imgs/feed-parceiro/icon-dog-sobe-sofa.png" alt="icon-dog-sobe-sofa"/>
                                <p>Pode subir no sofá/cama</p>
                            </div>
                        </div>
                    </div>
            </section>
            <div class="avaliacoes">
                <p>Avaliações</p>
            </div>
            <footer class="footer">
            </footer>
        </div>
        </>
    )
}
export default FeedParceiro();*/
