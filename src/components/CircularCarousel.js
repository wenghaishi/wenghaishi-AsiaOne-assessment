import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CircularCarousel.module.css";

const CircularCarousel = ({ images }) => {
  return (
    <Carousel className={classes.main} showThumbs={false} >
      <div>
        <img src="carousel1.png" />
      </div>
      <div>
        <img src="carousel2.png" />
      </div>
      <div>
        <img src="carousel3.png" />
      </div>
      <div>
        <img src="carousel4.png" />
      </div>
    </Carousel>
  );
};

export default CircularCarousel;
