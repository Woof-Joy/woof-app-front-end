import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/react-feed-parceiro.css";
import { Carousel } from "react-bootstrap";

const BootstrapCarousel = ({ imagens }) => {
  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  };

  return (
    <div className="container-carrossel">
      <Carousel>
        {imagens && imagens.length > 0 ? (
          imagens.map((imagem, index) => (
            <Carousel.Item key={index}>
              <img style={imageStyle} src={imagem} alt={`Imagem ${index + 1}`} />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <img
              style={imageStyle}
              src="default-image-url.jpg"
              alt="Imagem padrão"
            />
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
