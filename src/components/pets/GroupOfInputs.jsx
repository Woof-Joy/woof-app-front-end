import React, { useState } from 'react';

function GroupOfInputs() {
    const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

    const handleInputChange = (id, value) => {
        setInputs((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, value } : input
            )
        );
    };

    const handleAddInput = () => {
        setInputs((prevInputs) => [
            ...prevInputs,
            { id: prevInputs.length + 1, value: '' },
        ]);
    };

    const handleRemoveInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
    };

    return (
        <div>
            {inputs.map((input) => (
                <div key={input.id}>
                    <input className="cadastro-pet-input-campo"
                        type="text"
                        value={input.value}
                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                    />
                    <button onClick={() => handleRemoveInput(input.id)}>Remover</button>
                </div>
            ))}
            <button onClick={handleAddInput}>Adicionar Input</button>
        </div>
    );
}

export default GroupOfInputs;
