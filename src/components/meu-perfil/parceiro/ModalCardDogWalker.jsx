import React, { useState } from 'react';
import "../../../css/meu-perfil.css"
import IconDogWalker from '../../../imgs/feed-parceiro/icon-dog-walker.png'

function ModalCardDogWalker() {
    return (
        <>
            <section className="card-modal-meus-servicos-container">
                <div className='card-modal-meus-servicos-tipo-servico'>
                    <img className='card-modal-meus-servicos-icon' src={IconDogWalker} alt="" />
                    <p className='card-modal-meus-servicos-tipo-servico-p'>Dog Walker</p>
                </div>
                <div className='card-modal-meus-servicos-conteudo'>
                    <p className='card-modal-meus-servicos-preco'>
                        R$ <span>60,00</span> / Passeio
                    </p>
                    <p className='card-modal-meus-servicos-adicional'>
                        Duração: <span>40</span>min
                    </p>
                </div>
            </section>
        </>
    )
}
export default ModalCardDogWalker;