import React from "react";
import ImgInicioPata from "../imgs/img-inicio-pata.jpg";


function Index({ nome }) {
    return (
        <>
            <body>
                <header>
                    <nav>
                        <img class="logo-img-navbar" src="./imgs/logo-preta.png" alt="logo preta da Woof Joy"></img>
                        <ul class="menu-navbar">
                            <li><a class="menu-item" href="index.html" value ={nome}></a></li>
                            <li><a class="menu-item" href="index.html#servicos">Serviços</a></li>
                            <li><a class="menu-item" href="index.html#trabalhe-conosco">Vire um Parceiro</a></li>
                            <li><a class="menu-item" href="index.html#quem-somos">Sobre Nós</a></li>
                        </ul>
                        <div class="menu-item-login-cadastro">
                            <button class="btn-entrar" onclick="window.location.href='./login.html'">Entrar</button>
                            <button class="btn-cadastrar" onclick="window.location.href='./cadastro.html'">Criar Conta</button>
                        </div>
                    </nav>
                </header>

                <main>
                    <section class="inicio">
                        <div class="banner">
                            <div class="banner-texto-apresentacao">
                                <p class="rosa"><strong>#DogWalker &nbsp #DogSitter</strong></p>
                                <h1 class="texto-preto">Seu cão feliz :) </h1>
                                <h1 class="texto-rosa">em boas mãos</h1>
                                <p class="texto-menor">
                                    Descubra cuidadores apaixonados por <strong>pets</strong> como você ou <strong>seja um</strong>.
                                </p>
                                <button class="btn-confira" type="button">Confira</button>
                            </div>
                            <img class="img-inicio-pata" src={ImgInicioPata} alt="imagem logo pata com pet"></img>
                        </div>
                    </section>

                    <section class="servicos1" id="servicos">
                        <div class="servicos-img-e-texto">
                            <img class="img-servicos-inicial" src="./imgs/img-servicos.png" alt="imagem principal de servicos"></img>
                            <div class="servicos-texto">
                                <h1>Dias corridos, cafunés adiados?</h1>
                                <p>Nossos cuidadores estão aqui para preencher essa lacuna!</p>
                                <img class="servico-texto-img-conteudo" src="./imgs/img-descricao-servicos.png" alt="descricao do servico"></img>
                            </div>
                        </div>
                    </section>

                    <section class="servicos2">
                        <div class="servicos-informacoes">
                            <h2 class="texto-servicos-informacoes">
                                Conectamos patinhas a corações cuidadosos com uma plataforma completa!
                            </h2>
                            <div class="servicos-agenda-seguranca-doacao">
                                <div class="agenda">
                                    <img class="icon-agenda" src="./imgs/icon-calendario.png" alt="icone de calendario"></img>
                                    <h2 class="servico-titulo-agenda">Agendamento online</h2>
                                    <p>
                                        Encontre o profissional ideal para o seu pet, chame-o para uma
                                        conversa e agende o compromisso sem enrolação!
                                    </p>
                                </div>
                                <div class="seguranca">
                                    <img class="icon-seguranca" src="./imgs/icon-seguranca.png" alt="icone de seguranca"></img>
                                    <h2 class="servico-titulo-seguranca">Segurança</h2>
                                    <p>
                                        Avalie o serviço e leia os depoimentos realizados. Se necessário, denuncie! Segurança em primeiro lugar
                                        para proteger você e seu pet.
                                    </p>
                                </div>
                                <div class="doacao">
                                    <img class="icon-doacao" src="./imgs/icon-osso.png" alt="icone de osso"></img>
                                    <h2 class="servico-titulo-doacao">Sistema de doação</h2>
                                    <p>
                                        Sabe aquele acessório ou brinquedo que seu pet não usa mais? Você pode doar aqui, ajudar um cuidador e
                                        outros cães!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="trabalhe-conosco" id="trabalhe-conosco">
                        <div class="container-trabalhe-conosco">
                            <div class="fundo-parceiro">
                                <img class="img-fundo-parceiro" src="./imgs/fundo-parceiro.png" alt=""></img>
                            </div>
                        </div>
                        <div class="container-conteudo-parceiro">
                            <div class="trabalhe-conosco-texto">
                                <p class="texto-menor-trabalhe-conosco">
                                    Você pode ser o cliente ou um parceiro Woof Joy
                                </p>
                                <h3 class="texto-pricipal-trabalhe-conosco">
                                    Cadastre-se na nossa plataforma como um profissional de pet, encontre clientes e ganhe dinheiro fazendo o
                                    que
                                    ama!
                                </h3>
                                <div class="link-e-icon-trabalhe-conosco">
                                    <a class="link-trabalhe-conosco" href="./cadastro.html">Faça seu cadastro</a>
                                    <a href="./cadastro.html" class="icon-link-faca-seu-cadastro"><img class="icon-texto-trabalhe-conosco"
                                        src="./imgs/icon-faca-seu-cadastro.png" alt="icone faca seu cadastro"></img></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="quem-somos-section" id="quem-somos">
                        <div class="quem-somos">
                            <div class="container-quem-somos">
                                <div class="mural-img-dogs">
                                    <div class="column-imgs">
                                        <div class="column-1">
                                            <img class="img-dog" src="./imgs/img-dog-1.png" alt="" width="158px"></img>
                                            <img class="img-dog" src="./imgs/img-dog-3.png" alt="" width="158px"></img>
                                        </div>
                                        <div class="column-2">
                                            <img class="img-dog" src="./imgs/img-dog-2.png" alt="" width="126px"></img>
                                            <img class="img-dog" src="./imgs/img-dog-4.png" alt="" width="126px"></img>
                                            <img class="img-dog" src="./imgs/img-dog-5.png" alt="" width="126px"></img>
                                        </div>
                                    </div>
                                    <div class="line-img">
                                        <img class="img-dog" src="./imgs/img-dog-6.png" alt="" width="292px"></img>
                                    </div>
                                </div>
                                <div class="missao-visao-valores">
                                    <div class="fundo-quem-somos">
                                        <img class="img-fundo-quem-somos" src="./imgs/fundo-quem-somos.png" alt=""></img>
                                    </div>
                                    <div class="container-conteudo-missao-visao-valores">
                                        <img class="img-conteudo-fundo-quem-somos" src="./imgs/texto-quem-somos-m-v-v.png" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="titulo-quem-somos">
                            <p>Somos Woof Joy</p>
                        </div>
                    </section>
                </main>

                <footer class="footer">
                    <div class="footer-informacoes">
                        <img class="logo-branca-footer" src="./imgs/logo-branca-footer.png" alt="logo banca do Woof Joy"></img>
                        <p class="footer-texto">© 2023 Woof Joy. Todos os direitos reservados.</p>
                        <img class="icon-footer-redes" src="./imgs/icon-footer-redes.png" alt="nossas redes sociais"></img>
                    </div>
                </footer>
            </body>
        </>
    )
}
export default Index;
