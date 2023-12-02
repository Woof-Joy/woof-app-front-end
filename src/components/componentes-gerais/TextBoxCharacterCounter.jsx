import React, { useState } from 'react';

function TextBoxCharacterCounter() {
    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 500) {
            setTexto(inputValue);
        }
    };

    return (
        <section className='modal-avaliacao-txt-area-container'>
            <textarea className='modal-avaliacao-textarea'
                value={texto}
                onChange={handleChange}
                maxLength={500}
            />
            <p className='modal-avaliacao-txt-counter'>{texto.length} de 500 caracteres.</p>
        </section>
    );
}

export default TextBoxCharacterCounter;
