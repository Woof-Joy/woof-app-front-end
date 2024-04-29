import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/react-feed-parceiro.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/carrossel/hannah-lim-U6nlG0Y5sfs-unsplash.jpg";
import img2 from "../../imgs/carrossel/darinka-kievskaya-ff221Bu56mI-unsplash.jpg";
import img3 from "../../imgs/carrossel/matt-nelson-aI3EBLvcyu4-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const BootstrapCarousel = () => {
  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  };

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