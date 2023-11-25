import React from 'react';

import { Outlet } from "react-router-dom";
import ChatCliente from './components/chat/ChatCliente';
import Login from './components/login';
import Topicos from './components/chat/topicos';
import TelaProvisoria from './components/chat/topicos';
function App() {
  return (
    <>
      <ChatCliente />
    </>
  );
}
export default App;