import React, { useState } from 'react';
import IconRemoverInput from "../../imgs/cadastro-pet/IconRemoverInput.png"
import IconAdicionarInput from "../../imgs/cadastro-pet/IconAdicionarInput.png"

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
                <div className='cadastro-pet-group-of-inputs' key={input.id}>
                    <input className="cadastro-pet-input-campo"
                        type="text"
                        value={input.value}
                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                    />
                    <img src={IconRemoverInput} alt="" onClick={() => handleRemoveInput(input.id)} />
                </div>
            ))}
            <img onClick={handleAddInput} src={IconAdicionarInput} alt="" />
        </div>
    );
}

export default GroupOfInputs;
