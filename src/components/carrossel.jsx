import React from "react";
/*import { Carousel } from "react-bootstrap";*/
import img1 from "../imgs/feed-parceiro/img-carrossel-colaborador.png";
import img2 from "../imgs/feed-parceiro/img-carrossel-colaborador.png";
import img3 from "../imgs/feed-parceiro/img-carrossel-colaborador.png";

function Carrossel() {
  return (
      <>
  
  <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="01"/>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="02"/>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="03"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carrossel();