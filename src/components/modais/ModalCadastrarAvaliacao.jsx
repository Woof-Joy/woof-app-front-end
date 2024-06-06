import React, { useState, useEffect } from 'react';
import woofJoyApi from "../../woof-joy-api";
import "../../css/modal-cadastrar-avaliacao.css"
import TextBoxCharacterCounter from '../componentes-gerais/TextBoxCharacterCounter';

function ModalCadastrarAvaliacao(props) {

    const {
        idServico,
        idParceiro,
        clienteNome,
        idCliente,
        onClose
    } = props;

    const [rating, setRating] = useState(0);

    const [avaliacaoBody, setAvaliacaoBody] = useState({
        nota: 0,
        comentario: "",
        idCliente: idCliente,
        nomeCliente: clienteNome,
        idServico: idServico
    });

    useEffect(() => {
        setAvaliacaoBody(prevState => ({
            ...prevState,
            idCliente: idCliente,
            nomeCliente: clienteNome,
            idServico: idServico
        }));
    }, [idCliente, clienteNome, idServico]);

    const handleStarClick = (value) => {
        setRating(value);
        setAvaliacaoBody(prevState => ({
            ...prevState,
            nota: value
        }));
    };

    const handleCommentChange = (comment) => {
        setAvaliacaoBody(prevState => ({
            ...prevState,
            comentario: comment
        }));
    };

    function postAvaliacao() {
        const token = sessionStorage.getItem("token");

        woofJoyApi
            .post(`/avaliacoes/${idParceiro}`, avaliacaoBody,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            .then((response) => {
                console.log(clienteNome);
                alert("Avaliação enviada com sucesso!");
                onClose();
            })
            .catch((erroOcorrido) => {
                console.log(avaliacaoBody);
                alert("É necessário inserir uma nota");
            });
    }

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
                    <TextBoxCharacterCounter onInputChange={handleCommentChange} />
                </div>
                <div className='modal-avaliacao-btn'>
                    <button className='modal-avaliacao-btn-enviar' onClick={() => postAvaliacao()}>Enviar</button>
                    <button className='modal-avaliacao-btn-enviar' onClick={() => onClose()}>Não, obrigado(a)!</button>
                </div>
            </div>
        </section>
    );
}

export default ModalCadastrarAvaliacao;
