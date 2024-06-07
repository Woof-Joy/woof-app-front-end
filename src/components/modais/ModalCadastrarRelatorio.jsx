import React, { useState } from 'react';
import "../../css/modal-cadastrar-relatorio.css"
import woofJoyApi from "../../woof-joy-api";

function ModalCadastrarRelatorio(props) {
    const {
        idServico,
        onClose
    } = props;

    const token = sessionStorage.getItem("token");

    const [relatorioBody, setRelatorioBody] = useState({
        relatorioTxt: ""
    });

    const handleTextareaChange = (event) => {
        const { value } = event.target;
        setRelatorioBody(prevState => ({
            ...prevState,
            relatorioTxt: value
        }));
    };

    function putRelatorio() {
        woofJoyApi
            .put(`/servicos/relatorio/${idServico}`, relatorioBody,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            .then((response) => {
                console.log(response.data);
                alert("Relatório enviado com sucesso");
                window.location.reload();
                onClose();
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
                console.log(idServico);
                alert("Preencha o relatório");
            });
    }

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
                    <textarea
                        className='modal-relatorio-textarea'
                        value={relatorioBody.relatorioTxt}
                        onChange={handleTextareaChange}
                    ></textarea>
                </div>
                <p className='modal-relatorio-texto-guia'>* O preenchimento do relatório é obrigatório! Lembre-se que pode fazer toda a diferença na avaliação do seu serviço.</p>
                <div className='modal-relatorio-btn-container'>
                    <button onClick={putRelatorio} className='modal-relatorio-btn-enviar'>
                        Enviar
                    </button>
                    <button onClick={onClose} className='modal-relatorio-btn-enviar'>
                        Fechar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ModalCadastrarRelatorio;
