import React, { useState } from 'react';
import "../../css/modal-cadastrar-avaliacao.css"
import { Link } from 'react-router-dom';
import TextBoxCharacterCounter from '../componentes-gerais/TextBoxCharacterCounter';

function ModalCadastrarAvaliacao({ onClose }) {

    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        // Lógica para enviar a avaliação (pode ser implementada conforme necessário)
        console.log(`Avaliação: ${rating}`);
        onClose(); // Fechar o modal após a avaliação
    };

    return (
        <section className='modal-avaliacao-container'>
            <div className="modal-avaliacao-container-conteudo">
                <div className='modal-avaliacao-chamativo'>
                    <p className='modal-avaliacao-titulo'>Por favor, avalie o serviço!</p>
                    <p className='modal-avaliacao-subtitulo'>Sua avaliação é muito importante para nós</p>
                </div>
                <div className='modal-avalicao-stars'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`star ${value <= rating ? 'filled' : ''}`}
                            onClick={() => handleStarClick(value)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <div className='modal-avaliacao-caixa-texto'>
                    <TextBoxCharacterCounter />
                </div>
                <div className='modal-avaliacao-btn'>
                    <button className='modal-avaliacao-btn-enviar' onClick={handleSubmit}>Enviar</button>
                    <Link className='modal-avaliacao-btn-voltar' to="/meus-servicos">Não, obrigado(a)!</Link>
                </div>
            </div>
        </section>
    );
}

export default ModalCadastrarAvaliacao;