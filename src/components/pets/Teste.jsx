import React, { useState } from 'react';

function GrupoDeRadioButtons({ id }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const handleRadioChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <div>
      <p>Grupo {id} - Opção Selecionada: {opcaoSelecionada}</p>
      <label>
        <input
          type="radio"
          name={`opcao-${id}`}
          value="sim"
          onChange={handleRadioChange}
          checked={opcaoSelecionada === 'sim'}
        />
        Sim
      </label>

      <label>
        <input
          type="radio"
          name={`opcao-${id}`}
          value="nao"
          onChange={handleRadioChange}
          checked={opcaoSelecionada === 'nao'}
        />
        Não
      </label>
    </div>
  );
}

function Teste() {
  return (
    <div>
      <GrupoDeRadioButtons id={1} />
      <GrupoDeRadioButtons id={2} />
      <GrupoDeRadioButtons id={3} />
    </div>
  );
}

export default Teste;
