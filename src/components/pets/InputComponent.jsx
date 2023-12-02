import React from 'react';
import "../../css/cadastro-pet.css"

function InputComponent() {
  return (
    <div className='cadastro-pet-input-component-container'>
      <div className='cadastro-pet-input-component'>
        <input className='cadastro-pet-input-campo input-component' type="text" placeholder='Tipo de Convênio'/>
      </div>
      <div className='cadastro-pet-input-component'>
        <input className='cadastro-pet-input-campo input-component' type="text" placeholder='N° do Convênio'/>
      </div>

    </div>
  );
}

export default InputComponent;
