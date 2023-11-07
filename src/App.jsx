import React from 'react';

import { Outlet } from "react-router-dom";
import FeedServico from './components/feed/feed-servicos';

function App() {
  return (
    <>
      <FeedServico />
    </>
  );
}
export default App;