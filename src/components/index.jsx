import React from "react"
import "../css/index.css"
import "../css/responsivo.css"

import imgNavLogoWoofJoy from "../imgs/logo-preta.png"
import imgInicioChamativo from "../imgs/img-inicio-pata.jpg"
import imgServicosChamativo from "../imgs/img-servicos.png"
import imgServicosDescricao from "../imgs/img-descricao-servicos.png"
import imgServicosIconAgendamento from "../imgs/icon-calendario.png"
import imgServicosIconSeguranca from "../imgs/icon-seguranca.png"
import imgServicosIconDoacao from "../imgs/icon-osso.png"
import imgParceiroFundo from "../imgs/fundo-parceiro.png"
import imgParceiroIconBtn from "../imgs/icon-faca-seu-cadastro.png"
import imgSobreNosDog1 from "../imgs/img-dog-1.png"
import imgSobreNosDog2 from "../imgs/img-dog-2.png"
import imgSobreNosDog3 from "../imgs/img-dog-3.png"
import imgSobreNosDog4 from "../imgs/img-dog-4.png"
import imgSobreNosDog5 from "../imgs/img-dog-5.png"
import imgSobreNosDog6 from "../imgs/img-dog-6.png"
import imgSobreNosFundoVMV from "../imgs/fundo-quem-somos.png"
import imgSobreNosQuadroVMV from "../imgs/texto-quem-somos-m-v-v.png"
import imgFooterLogoWoofJoy from "../imgs/logo-branca-footer.png"
import imgFooterIconsRedesSociais from "../imgs/icon-footer-redes.png"

import { Link } from 'react-router-dom';

function Index({ nome }) {
    return (
        <>
            <body className="index">
                <header className="index-header">
                    <nav className="index-nav">
                        <img className="index-logo-img-navbar" src={imgNavLogoWoofJoy} alt="logo preta da Woof Joy"></img>
                        <ul className="index-menu-navbar">
                            <li><a className="index-menu-item" href="#" value ={nome}>Início</a></li>
                            <li><a className="index-menu-item" href="#servicos">Serviços</a></li>
                            <li><a className="index-menu-item" href="#trabalhe-conosco">Vire um Parceiro</a></li>
                            <li><a className="index-menu-item" href="#quem-somos">Sobre Nós</a></li>
                        </ul>
                        <div class="index-menu-item-login-cadastro">
                            <Link to="/login-inicial" className="index-btn-entrar">Entrar</Link>
                            <Link to="/cadastro-inicial" className="index-btn-cadastrar">Criar Conta</Link>
                        </div>
                    </nav>
                </header>

                <main className="index-main">
                    <section class="index-inicio">
                        <div class="index-banner">
                            <div class="index-banner-texto-apresentacao">
                                <p class="index-txt-hashtag-rosa"><strong>#DogWalker #DogSitter</strong></p>
                                <h1 class="index-texto-preto">Seu cão feliz :) </h1>
                                <h1 class="index-texto-rosa">em boas mãos</h1>
                                <p class="index-texto-menor">
                                    Descubra cuidadores apaixonados por <strong>pets</strong> como você ou <strong>seja um</strong>.
                                </p>
                                <button class="index-btn-confira" type="button">Confira</button>
                            </div>
                            <img class="index-img-inicio-pata" src= {imgInicioChamativo}  alt="imagem logo pata com pet"></img>
                        </div>
                    </section>

                    <section class="index-servicos1" id="servicos">
                        <div class="index-servicos-img-e-texto">
                            <img class="index-img-servicos-inicial" src={imgServicosChamativo} alt="imagem principal de servicos"></img>
                            <div class="index-servicos-texto">
                                <h1>Dias corridos, cafunés adiados?</h1>
                                <p>Nossos cuidadores estão aqui para preencher essa lacuna!</p>
                                <img class="index-servico-texto-img-conteudo" src={imgServicosDescricao} alt="descricao do servico"></img>
                            </div>
                        </div>
                    </section>

                    <section class="index-servicos2">
                        <div class="index-servicos-informacoes">
                            <h2 class="index-texto-servicos-informacoes">
                                Conectamos patinhas a corações cuidadosos com uma plataforma completa!
                            </h2>
                            <div class="index-servicos-agenda-seguranca-doacao">
                                <div class="index-agenda">
                                    <img class="index-icon-agenda" src={imgServicosIconAgendamento} alt="icone de calendario"></img>
                                    <h2 class="index-servico-titulo-agenda">Agendamento online</h2>
                                    <p>
                                        Encontre o profissional ideal para o seu pet, chame-o para uma
                                        conversa e agende o compromisso sem enrolação!
                                    </p>
                                </div>
                                <div class="index-seguranca">
                                    <img class="index-icon-seguranca" src={imgServicosIconSeguranca} alt="icone de seguranca"></img>
                                    <h2 class="servico-titulo-seguranca">Segurança</h2>
                                    <p>
                                        Avalie o serviço e leia os depoimentos realizados. Se necessário, denuncie! Segurança em primeiro lugar
                                        para proteger você e seu pet.
                                    </p>
                                </div>
                                <div class="index-doacao">
                                    <img class="index-icon-doacao" src={imgServicosIconDoacao} alt="icone de osso"></img>
                                    <h2 class="index-servico-titulo-doacao">Sistema de doação</h2>
                                    <p>
                                        Sabe aquele acessório ou brinquedo que seu pet não usa mais? Você pode doar aqui, ajudar um cuidador e
                                        outros cães!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="index-trabalhe-conosco" id="trabalhe-conosco">
                        <div class="index-container-trabalhe-conosco">
                            <div class="index-fundo-parceiro">
                                <img class="index-img-fundo-parceiro" src={imgParceiroFundo} alt=""></img>
                            </div>
                        </div>
                        <div class="index-container-conteudo-parceiro">
                            <div class="index-trabalhe-conosco-texto">
                                <p class="index-texto-menor-trabalhe-conosco">
                                    Você pode ser o cliente ou um parceiro Woof Joy
                                </p>
                                <h3 class="index-texto-pricipal-trabalhe-conosco">
                                    Cadastre-se na nossa plataforma como um profissional de pet, encontre clientes e ganhe dinheiro fazendo o
                                    que ama!
                                </h3>
                                <div class="index-link-e-icon-trabalhe-conosco">
                                    <a class="index-link-trabalhe-conosco" href="./cadastro.html">Faça seu cadastro</a>
                                    <a href="./cadastro.html" class="index-icon-link-faca-seu-cadastro"><img class="icon-texto-trabalhe-conosco"
                                        src={imgParceiroIconBtn} alt="icone faca seu cadastro"></img></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="index-quem-somos-section" id="quem-somos">
                        <div class="index-quem-somos">
                            <div class="index-container-quem-somos">
                                <div class="index-mural-img-dogs">
                                    <div class="index-column-imgs">
                                        <div class="index-column-1">
                                            <img class="index-img-dog" src={imgSobreNosDog1} alt="" width="158px"></img>
                                            <img class="index-img-dog" src={imgSobreNosDog3} alt="" width="158px"></img>
                                        </div>
                                        <div class="index-column-2">
                                            <img class="index-img-dog" src={imgSobreNosDog2} alt="" width="126px"></img>
                                            <img class="index-img-dog" src={imgSobreNosDog4} alt="" width="126px"></img>
                                            <img class="index-img-dog" src={imgSobreNosDog5} alt="" width="126px"></img>
                                        </div>
                                    </div>
                                    <div class="index-line-img">
                                        <img class="index-img-dog" src={imgSobreNosDog6} alt="" width="292px"></img>
                                    </div>
                                </div>
                                <div class="index-missao-visao-valores">
                                    <div class="index-fundo-quem-somos">
                                        <img class="index-img-fundo-quem-somos" src={imgSobreNosFundoVMV} alt=""></img>
                                    </div>
                                    <div class="index-container-conteudo-missao-visao-valores">
                                        <img class="index-img-conteudo-fundo-quem-somos" src={imgSobreNosQuadroVMV} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="index-titulo-quem-somos">
                            <p>Somos Woof Joy</p>
                        </div>
                    </section>
                </main>

                <footer class="index-footer">
                    <div class="index-footer-informacoes">
                        <img class="index-logo-branca-footer" src={imgFooterLogoWoofJoy} alt="logo banca do Woof Joy"></img>
                        <p class="index-footer-texto">© 2023 Woof Joy. Todos os direitos reservados.</p>
                        <img class="icon-footer-redes" src={imgFooterIconsRedesSociais} alt="nossas redes sociais"></img>
                    </div>
                </footer>
            </body>
        </>
    )
}
export default Index;
