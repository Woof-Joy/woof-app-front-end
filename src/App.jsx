import React from 'react';

import { Outlet } from "react-router-dom";
import MeusServicos from './components/feed/meus-servicos';
function App() {
  return (
    <>
      <MeusServicos />
    </>
  );
}
export default App;