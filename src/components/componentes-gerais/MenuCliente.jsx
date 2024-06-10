import React from "react"
import "../../css/menu.css"
import IconServicos from "../../imgs/iconServicos.png";
import ImgLogoWoofJoy from "../../imgs/logo-branca-footer.png";

import { Link } from 'react-router-dom';


function Menu() {
    const role = sessionStorage.getItem("role");
    const pathPerfil = role === "C" ? "/perfil-cliente" : "/feed-parceiro-edit";

    const cleanSessionStorage = () => {
        sessionStorage.clear();
    };

    return (
        <>
            <nav className="cabecalho-menu">
                <ul className="menu-navbar">
                    <div class="btn-lateral-menu">
                        <i class="bi bi-list"></i>
                        <img class="logo-img-navbar" src={ImgLogoWoofJoy} alt="logo branca da Woof Joy"></img>
                    </div>

                    {/* Feed */}
                    {role === "C" && (
                        <div className="todos-menu-item">
                            <li className="menu-item">
                                <Link to="/home-cliente">
                                    <a href="#">
                                        <span className="icon">
                                            <i className="bi bi-house-heart-fill"></i>
                                        </span>
                                        <span className="txt-link">Feed</span>
                                    </a>
                                </Link>
                            </li>
                        </div>
                    )}

                    {/* Chat
                    <div className="todos-menu-item">
                        <li className="menu-item">
                            <Link to="/chat">
                                <a href="#">
                                    <span className="icon">
                                        <i className="bi bi-chat-dots-fill"></i>
                                    </span>
                                    <span className="txt-link">Chat</span>
                                </a>
                            </Link>
                        </li>
                    </div> */}

                    {/* Doação
                    <div className="todos-menu-item">
                        <li className="menu-item">
                            <Link to="/doacao">
                                <a href="#">
                                    <span className="icon">
                                        <i className="bi bi-bag-heart-fill"></i>
                                    </span>
                                    <span className="txt-link">Doação</span>
                                </a>
                            </Link>
                        </li>
                    </div> */}

                    {/* Serviços */}
                    {role === "P" && (
                        <div className="todos-menu-item">
                            <li className="menu-item">
                                <Link to="/meus-servicos">
                                    <a href="#">
                                        <span className="icon">
                                            <img src={IconServicos} alt="" />
                                        </span>
                                        <span className="txt-link">Serviços</span>
                                    </a>
                                </Link>
                            </li>
                        </div>
                    )}
                        {/* Historico Servicos Cliente */}
                        {role === "C" && (
                        <div className="todos-menu-item">
                            <li className="menu-item">
                                <Link to="/historico-servicos-cliente">
                                    <a href="#">
                                        <span className="icon">
                                            <img src={IconServicos} alt="" />
                                        </span>
                                        <span className="txt-link">Histórico de Serviços</span>
                                    </a>
                                </Link>
                            </li>
                        </div>
                    )}   

                    {/* Meu Perfil */}
                        <div className="todos-menu-item">
                            <li className="menu-item">
                                <Link to={pathPerfil}>                                    
                                    <a href="#">
                                        <span className="icon">
                                            <i className="bi bi-person-circle"></i>
                                        </span>
                                        <span className="txt-link">Meu Perfil</span>
                                    </a>
                                </Link>
                            </li>
                        </div>

                    {/* Sair */}
                    <hr className="line"></hr>
                    <div className="space-menor"></div>
                        <Link to="/" className="menu-item-sair" onClick={cleanSessionStorage}>
                            <a href="#">
                                <span className="icon"><i className="bi bi-box-arrow-left"></i></span>
                                <span className="txt-link">Sair</span>
                            </a>
                        </Link>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
