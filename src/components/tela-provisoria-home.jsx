import React, { useState } from "react";

import MenuCliente from "../components/MenuCliente"
import ImgTelaProvisoria from "../imgs/img-tela-provisoria-home.png"

import "../css/tela-provisoria.css"

function TelaProvisoria() {
    return (
        <>
            <div className="principal">
                <MenuCliente className="menu" />
                <div className="img">
                    <img src={ImgTelaProvisoria} alt="" />
                </div>
            </div>
        </>
    );
}

export default TelaProvisoria;