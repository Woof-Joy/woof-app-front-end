import React from "react";
import "./css/index.css";
import "./css/responsivo.css";
import "./css/styleAll.css";


import Index from "./components/indexComponent";
import CardParceiro from "./components/feed/card-parceiro-feed";
import ItemFeed from "./components/feed/item-feed";
import AguardandoConfirmacao from "./components/aguardando-confirmacao";
function App() {

  return (
    <>
    <Index/>
    <CardParceiro/>
    <ItemFeed/>
    <AguardandoConfirmacao/>
    </>
  );
}
export default App;