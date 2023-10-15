import React from "react";
import logo from "../imgs/logo-branca-footer.png"
import MenuStyle from "../css/menu.css"


function Menu() {
    return (
        <>
            <body>
                <header>
                    <nav class="cabecalho-menu">
                        <ul class="menu-navbar">

                            <div class="btn-lateral-menu">
                                <i class="bi bi-list"></i>
                                <img class="logo-img-navbar" src={logo} alt="logo branca da Woof Joy"></img>
                            </div>
                            <div class="space-menor"></div>
                            <div class="todos-menu-item">
                                <li class="menu-item">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-house-heart-fill"></i></span>
                                        <span class="txt-link">Feed</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-chat-dots-fill"></i></span>
                                        <span class="txt-link">Chat</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-bag-heart-fill"></i></span>
                                        <span class="txt-link">Doação</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-clock-history"></i></span>
                                        <span class="txt-link">Histórico</span>
                                    </a>
                                </li>
                            </div>
                            <div class="space"></div>
                            <div class="menu-item-meu-perfil">
                                <a href="#">
                                    <span class="icon"><i class="bi bi-person-circle"></i></span>
                                    <span class="txt-link">Meu Perfil</span>
                                </a>
                            </div>
                            <div class="space-menor"></div>
                            <hr></hr>
                                <div class="space"></div>
                                <div class="menu-item-sair">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-box-arrow-left"></i></span>
                                        <span class="txt-link">Sair</span>
                                    </a>
                                </div>
                                <div class="space"></div>
                        </ul>
                    </nav>
                </header>
            </body>
        </>
    );
}
export default Menu;