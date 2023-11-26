import React, { useState } from 'react';
import "../../../css/meu-perfil.css"
import ModalCardDogWalker from "./ModalCardDogWalker"
import ModalCardDogSitter from './ModalCardDogSitter';


function ModalMeusServicos() {
    return (
        <>
            <section className="modal-meus-servicos-container">
                <p className='modal-meus-servicos-titulo'>Serviços</p>
                <p className='modal-meus-servicos-subtitulo-qtd'>
                    Qtd. Serviços Prestados: <span>20</span>
                </p>
                <div className='modal-meus-servicos-tipo-prestado'>
                    <ModalCardDogWalker />
                    <ModalCardDogSitter/>
                </div>
            </section>
        </>
    )
}
export default ModalMeusServicos;