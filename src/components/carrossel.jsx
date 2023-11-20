import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/react-feed-parceiro.css";
import { Carousel } from "react-bootstrap";
import img1 from "../imgs/img-dog-4.png";
import img2 from "../imgs/img-dog-1.png";
import img3 from "../imgs/img-dog-6.png";

const BootstrapCarousel = () => {
  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  };

  return (
    <div className="container-carrossel">
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