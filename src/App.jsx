import React from 'react';

import { Outlet } from "react-router-dom";
import HistoricoServico from './components/feed/historico-servicos';
function App() {
  return (
    <>
      <HistoricoServico />
    </>
  );
}
export default App;