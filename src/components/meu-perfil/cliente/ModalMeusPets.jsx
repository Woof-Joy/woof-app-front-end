import React, { useState } from 'react';
import "../../../css/meu-perfil.css"
import CardMeusPets from './ModalCardMeusPets';


function ModalMeusPets() {
    return (
        <>
            <section className="modal-meus-pets-container">
                <p className='modal-meus-pets-titulo'>Meus pets</p>
                <div className='modal-meus-pets-area-cards'>
                    <CardMeusPets />
                    <CardMeusPets />
                    <CardMeusPets />
                    <CardMeusPets />
                    <CardMeusPets />
                    <CardMeusPets />
                    <CardMeusPets />
                </div>
            </section>
        </>
    )
}
export default ModalMeusPets;
