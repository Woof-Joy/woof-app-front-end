import React, { useState } from 'react';
import "../../../css/meu-perfil.css"
import ExemploFotoPerfilPet from "../../../imgs/meu-perfil/foto-perfil-pet-exemplo.png"


function CardMeusPets() {
    return (
        <>
            <section className="card-meus-pets">
                <img className='card-meus-pets-foto-perfil' src={ExemploFotoPerfilPet} alt="" />
                <div className='card-meus-pets-conteudo'>
                    <p className='card-meus-pets-nome'>Fred</p>
                    <p className='card-meus-pets-idade'>Idade: <span>3</span> anos</p>
                </div>
            </section>
        </>
    )
}
export default CardMeusPets;