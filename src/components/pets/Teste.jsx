import React, { useState } from 'react';

function TelaComInputRadio() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [valorInput, setValorInput] = useState('');

  const handleRadioChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="opcao"
          value="sim"
          onChange={handleRadioChange}
          checked={opcaoSelecionada === 'sim'}
        />
        Sim
      </label>

      <label>
        <input
          type="radio"
          name="opcao"
          value="nao"
          onChange={handleRadioChange}
          checked={opcaoSelecionada === 'nao'}
        />
        Não
      </label>

      {opcaoSelecionada === 'sim' && (
        <div>
          <label>Digite algo:</label>
          <input
            type="text"
            value={valorInput}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default TelaComInputRadio;