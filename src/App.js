import React from "react";
import "./css/index.css";
import "./css/responsivo.css";
import BootstrapCarousel from "./components/carrossel";
import FeedParceiro from "./components/feed-parceiro";

function App() {

  return (
    <>
    <Index/>
    <CadastroInicial/>
    <AguardandoConformacao/>
    <ItemFeed/>
    <FeedParceiro/>
    </>
  );
}
export default App;