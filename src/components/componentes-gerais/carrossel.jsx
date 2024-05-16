import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/react-feed-parceiro.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/carrossel/hannah-lim-U6nlG0Y5sfs-unsplash.jpg";
import img2 from "../../imgs/carrossel/darinka-kievskaya-ff221Bu56mI-unsplash.jpg";
import img3 from "../../imgs/carrossel/matt-nelson-aI3EBLvcyu4-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const BootstrapCarousel = (props) => {
  const imageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  };
  console.log("PROPS: "+props)
    return (
      <div className="container-carrossel">
        <Carousel>
          {props.imagens.map((imagem) => (
            <Carousel.Item>
              <img style={imageStyle} src={imagem} alt="Imagem carrossel" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }

export default BootstrapCarousel;