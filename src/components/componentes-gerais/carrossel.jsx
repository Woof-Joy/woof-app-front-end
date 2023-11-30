import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/react-feed-parceiro.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/img-dog-4.png";
import img2 from "../../imgs/img-dog-1.png";
import img3 from "../../imgs/img-dog-6.png";
import { useNavigate } from "react-router-dom";

const BootstrapCarousel = () => {
  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  };


  const navigate = useNavigate();

  function irAteAlgo(navegacao) {
    navigate(navegacao);
  }

//   function logar() {
    // const objetoParaLogar = {
    //     nome: "braian",
    //     email: "braian.braga@gmail.com"
    // }

    // "api".post("/parceiro")({
    //     nome: "Braian",
    //     email: "braian.braga@sptech.school"
    // }).then((resposta) => {
    //     console.log("ele fez o login")
    //     navigate("/doacao");
    // }).catch((error) => {
    //     console.error(error);
    // })
//   }

  return (
    <div className="container-carrossel">
        {/* <button style={{cursor: "pointer"}} onClick={() => navigate("/historico")}>ir para outro lugar</button> */}
      <Carousel>
        <Carousel.Item>
          <img style={imageStyle} src={img1} alt="Imagem 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={imageStyle} src={img2} alt="Imagem 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={imageStyle} src={img3} alt="Imagem 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;