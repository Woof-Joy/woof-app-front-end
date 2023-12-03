import React, { useState } from 'react';
import "../../css/modal-leitura-relatorio.css"
import { Link } from 'react-router-dom';
import ModalCadastrarAvaliacao from './ModalCadastrarAvaliacao';

function ModalLeituraRelatorio() {
    return (
        <section className='modal-leitura-relatorio-container'>
            <div className='modal-leitura-relatorio-conteudo-container'>
                <div className='modal-leitura-relatorio-txt'>
                    <p className='modal-leitura-relatorio-txt-titulo'>
                        Relatório
                    </p>
                    <p className='modal-leitura-relatorio-txt-subtitulo'>
                        Serviço: <span>Dog Walker</span>
                    </p>
                    <p className='modal-leitura-relatorio-txt-texto'>
                        <b>Início do Serviço:</b> <span>28/11/2023</span> - <span>13:00</span> |
                        <b> Fim do Serviço:</b> <span>28/11/2023</span> - <span>14:00</span>
                    </p>
                    <div className='space'></div>
                    <p className='modal-leitura-relatorio-txt-texto'>
                        <b>Parceiro:</b> <span>José</span>
                    </p>
                    <p className='modal-leitura-relatorio-txt-texto'>
                        <b>Pet:</b> <span>Pipoca</span>
                    </p>
                </div>
                <div className='modal-leitura-relatorio-caixa-texto'>
                    <textarea readOnly className='modal-leitura-relatorio-textarea'></textarea>
                </div>
                <div className='modal-leitura-relatorio-btn-container'>
                    <Link to="/cadastrar-avaliacao">
                        <button className='modal-leitura-relatorio-btn-enviar' >
                            Fechar
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default ModalLeituraRelatorio;