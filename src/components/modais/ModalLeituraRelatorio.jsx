import React, { useState } from 'react';
import "../../css/modal-leitura-relatorio.css"
import { Link } from 'react-router-dom';
import ModalCadastrarAvaliacao from './ModalCadastrarAvaliacao';

function ModalLeituraRelatorio(props) {
    const token = sessionStorage.getItem("token");

    const {
        idServico,
        servico,
        parceiroNome,
        idParceiro,
        idClienteServico,
        relatorio,
        onClose
    } = props;
    return (
        <section className='modal-leitura-relatorio-container'>
            <div className='modal-leitura-relatorio-conteudo-container'>
                <div className='modal-leitura-relatorio-txt'>
                    <p className='modal-leitura-relatorio-txt-titulo'>
                        Relatório
                    </p>
                    <p className='modal-leitura-relatorio-txt-subtitulo'>
                        Serviço: <span>{servico}</span>
                    </p>
                   
                    <div className='space'></div>
                    <p className='modal-leitura-relatorio-txt-texto'>
                        <b>Parceiro:</b> <span>{parceiroNome}</span>
                    </p>
                    
                </div>
                <div className='modal-leitura-relatorio-caixa-texto'>
                    <textarea readOnly className='modal-leitura-relatorio-textarea'>
                    {relatorio}
                    </textarea>
                </div>
                <div className='modal-leitura-relatorio-btn-container'>
                        <button className='modal-leitura-relatorio-btn-enviar' onClick={() => onClose()} >
                            Fechar
                        </button>
                </div>
            </div>
        </section>
    );
}

export default ModalLeituraRelatorio;