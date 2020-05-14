import React from 'react';
import { Carousel, ResponsiveEmbed } from "react-bootstrap"

function Slideshow() {


  return (


<div className={"container"}>
  <ResponsiveEmbed aspectRatio="16by9">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/900x500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/900x500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/900x500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </ResponsiveEmbed>
</div>


 
  );
}

export default Slideshow;