import React from "react"
import "../css/menu.css"

import ImgLogoWoofJoy from "../imgs/logo-branca-footer.png"

import { Link } from 'react-router-dom';


function Menu() {
    const cleanSessionStorage = () => {
        sessionStorage.clear()

    }
    return (
        <>
            <header>
                <nav class="cabecalho-menu">
                    <ul class="menu-navbar">
                        <div class="btn-lateral-menu">
                            <i class="bi bi-list"></i>
                            <img class="logo-img-navbar" src={ImgLogoWoofJoy} alt="logo branca da Woof Joy"></img>
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
                            <Link to="/chat">
                                <a href="#">
                                    <span class="icon"><i class="bi bi-chat-dots-fill"></i></span>
                                    <span class="txt-link">Chat</span>
                                </a>
                            </Link>
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
                            <li className="menu-item">
                            <a href="#">
                                <span class="icon"><i class="bi bi-person-circle"></i></span>
                                <span class="txt-link">Meu Perfil</span>
                            </a>
                            </li>
                        </div>
                        <div class="space-menor"></div>
                        <hr className="line"></hr>
                        <div class="space-menor"></div>
                        <Link to="/" class="menu-item-sair" onClick={cleanSessionStorage}>
                            <a href="#">
                                <span class="icon"><i class="bi bi-box-arrow-left"></i></span>
                                <span class="txt-link" >Sair</span>
                            </a>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Menu;