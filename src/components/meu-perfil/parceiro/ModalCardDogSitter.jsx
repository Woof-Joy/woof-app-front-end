import React, { useState } from 'react';
import "../../../css/meu-perfil.css"
import IconDogSitter from '../../../imgs/feed-parceiro/icon-dog-sitter.png'

function ModalCardDogSitter() {
    return (
        <>
            <section className="card-modal-meus-servicos-container">
                <div className='card-modal-meus-servicos-tipo-servico'>
                    <img className='card-modal-meus-servicos-icon' src={IconDogSitter} alt="" />
                    <p className='card-modal-meus-servicos-tipo-servico-p'>Dog Sitter</p>
                </div>
                <div className='card-modal-meus-servicos-conteudo'>
                    <p className='card-modal-meus-servicos-preco'>
                        R$ <span>60,00</span> / Hora
                    </p>
                    <p className='card-modal-meus-servicos-adicional'>
                        {/* Recebe ou não o pet na residência */}
                        <span>Recebe o pet na residência</span>
                    </p>
                </div>
            </section>
        </>
    )
}
export default ModalCardDogSitter;