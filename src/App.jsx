import React from 'react';

import { Outlet } from "react-router-dom";
import CadastroServico from './components/cadastro-servico';
function App() {
  return (
    <>
      <CadastroServico />
    </>
  );
}
export default App;