import api from "./woof-joy-api";
import { useState } from "react";
import "./css/index.css";
import "./css/responsivo.css";
import Index from "./components/indexComponent";
import CardParceiro from "./components/feed/card-parceiro-feed";
import ItemFeed from "./components/feed/item-feed";
import AguardandoConfirmacao from "./components/aguardando-confirmacao";
function App() {
  const [musicas, setMusicas] = useState([]);
  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        console.log(respostaObtida.data);
        setMusicas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

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