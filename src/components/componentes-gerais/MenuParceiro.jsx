import React from "react";
import "../../css/menu.css";

import ImgLogoWoofJoy from "../../imgs/logo-branca-footer.png";
import IconServicos from "../../imgs/iconServicos.png";
import IconMinhaPagina from "../../imgs/icon-minha-pagina.png";

import { Link } from "react-router-dom";

function Menu() {
  const cleanSessionStorage = () => {
    sessionStorage.clear();
  };
  return (
    <>
      <header>
        <nav class="cabecalho-menu">
          <ul class="menu-navbar">
            <div class="btn-lateral-menu">
              <i class="bi bi-list"></i>
              <img
                class="logo-img-navbar"
                src={ImgLogoWoofJoy}
                alt="logo branca da Woof Joy"
              ></img>
            </div>
            <div class="space-menor"></div>
            <div class="todos-menu-item">
              <li class="menu-item">
                <Link to="/chat-parceiro">
                  <a href="#">
                    <span class="icon">
                      <i class="bi bi-chat-dots-fill"></i>
                    </span>
                    <span class="txt-link">Chat</span>
                  </a>
                </Link>
              </li>
              
                <li class="menu-item">
                <Link to="/feed-doacao">
                  <a href="#">
                    <span class="icon">
                      <i class="bi bi-bag-heart-fill"></i>
                    </span>
                    <span class="txt-link">Doação</span>
                  </a>
                  </Link>
                </li>
              
              
              <li class="menu-item">
              <Link to="/meus-servicos">
                <a href="#">
                  <span class="icon">
                    <img src={IconServicos} alt="" />
                  </span>
                  <span class="txt-link">Serviços</span>
                </a>
                </Link>
              </li>
              
              
              <li class="menu-item">
              <Link to="/feed-parceiro">
                <a href="#">
                  <span class="icon">
                    <img src={IconMinhaPagina} alt="" />
                  </span>
                  <span class="txt-link">Minha Página</span>
                </a>
                </Link>
              </li>
              
              
              <li className="menu-item">
              <Link to="/MeuPerfilParceiro">
                  <a href="#">
                    <span class="icon">
                      <i class="bi bi-person-circle"></i>
                    </span>
                    <span class="txt-link">Meu Perfil</span>
                  </a>
                  </Link>
              </li>
              
            </div>
            <div class="space"></div>
            <div class="space-menor"></div>
            <hr className="line"></hr>
            <div class="space-menor"></div>
            <Link to="/" class="menu-item-sair" onClick={cleanSessionStorage}>
              <a href="#">
                <span class="icon">
                  <i class="bi bi-box-arrow-left"></i>
                </span>
                <span class="txt-link">Sair</span>
              </a>
            </Link>
            <div class="space"></div>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Menu;
