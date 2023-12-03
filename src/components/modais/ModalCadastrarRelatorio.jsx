import React, { useState } from 'react';
import "../../css/modal-cadastrar-relatorio.css"

function ModalCadastrarRelatorio() {
    return (
        <section className='modal-relatorio-container'>
            <div className='modal-relatorio-conteudo-container'>
                <div className='modal-relatorio-txt'>
                    <p className='modal-relatorio-txt-titulo'>
                        Relatório
                    </p>
                    <p className='modal-relatorio-txt-subtitulo'>Faça um relatório sobre o serviço.</p>
                    <p className='modal-relatorio-txt-subtitulo'>Tente descrever o que foi feito, atividades com o pet e seus comportamentos.</p>
                </div>
                <div className='modal-relatorio-caixa-texto'>
                    <textarea className='modal-relatorio-textarea'></textarea>
                </div>
                <p className='modal-relatorio-texto-guia'>* O preenchimento do relatório é obrigatório! Lembre-se que pode fazer toda a diferença na avaliação do seu serviço.</p>
                <div className='modal-relatorio-btn-container'>
                    <button className='modal-relatorio-btn-enviar'>
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ModalCadastrarRelatorio;