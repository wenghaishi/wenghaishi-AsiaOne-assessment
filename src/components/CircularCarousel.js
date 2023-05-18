import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CircularCarousel.module.css";


const CircularCarousel = (props) => {


  return (
    <Carousel
      className={classes.main}
      showThumbs={false}
      onChange={props.handleImageChange}
    >
      <div>
        <img src="carousel1.png" id="carousel1" alt="" />
      </div>
      <div>
        <img src="carousel2.png" id="carousel2" alt="" />
      </div>
      <div>
        <img src="carousel3.png" id="carousel3" alt="" />
      </div>
      <div>
        <img src="carousel4.png" id="carousel4" alt="" />
      </div>
    </Carousel>
  );
};

export default CircularCarousel;
