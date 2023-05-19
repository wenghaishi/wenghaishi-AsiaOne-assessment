import React from "react";
import classes from "./About.module.css";
import CircularCarousel from "./CircularCarousel";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
import content from "../content.json";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleImageChange = (index) => {
    setCurrentImage(index);
    console.log(currentImage);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className={classes.main}>
      <h1 className={classes.mainText}>{content[0].about}</h1>
      <div data-aos="roll-left" className={classes.rollInElement}>
        <CircularCarousel handleImageChange={handleImageChange} />

        {currentImage === 0 && (
          <>
            <img
              className={classes.whiteDot1}
              data-aos="dot"
              data-aos-delay="1000"
              data-aos-duration="300"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne1}
              data-aos="dot"
              data-aos-delay="1300"
              data-aos-duration="300"
            />
            <div
              className={classes.lineTwo1}
              data-aos="dot"
              data-aos-delay="1600"
              data-aos-duration="300"
            />
            <img
              className={classes.bubbleOne1}
              src="bubble1.png"
              data-aos="dot"
              data-aos-delay="1900"
              data-aos-duration="300"
              alt=""
            />
          </>
        )}

        {currentImage === 1 && (
          <>
            <img
              className={classes.whiteDot2}
              data-aos="dot"
              data-aos-delay="1000"
              data-aos-duration="300"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne2}
              data-aos="dot"
              data-aos-delay="1300"
              data-aos-duration="300"
            />
            <div
              className={classes.lineTwo2}
              data-aos="dot"
              data-aos-delay="1600"
              data-aos-duration="500"
            />
            <img
              className={classes.bubbleOne2}
              src="bubble2.png"
              data-aos="dot"
              data-aos-delay="1900"
              data-aos-duration="300"
              alt=""
            />
          </>
        )}

        {currentImage === 2 && (
          <>
            <img
              className={classes.whiteDot3}
              data-aos="dot"
              data-aos-delay="1000"
              data-aos-duration="300"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne3}
              data-aos="dot"
              data-aos-delay="1300"
              data-aos-duration="300"
            />
            <div
              className={classes.lineTwo3}
              data-aos="dot"
              data-aos-delay="1600"
              data-aos-duration="300"
            />
            <img
              className={classes.bubbleOne3}
              src="bubble3.png"
              data-aos="dot"
              data-aos-delay="1900"
              data-aos-duration="300"
              alt=""
            />
          </>
        )}

        {currentImage === 3 && (
          <>
            <img
              className={classes.whiteDot4}
              data-aos="dot"
              data-aos-delay="1000"
              data-aos-duration="300"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne4}
              data-aos="dot"
              data-aos-delay="1300"
              data-aos-duration="300"
            />
            <div
              className={classes.lineTwo4}
              data-aos="dot"
              data-aos-delay="1600"
              data-aos-duration="300"
            />
            <img
              className={classes.bubbleOne4}
              src="bubble4.png"
              data-aos="dot"
              data-aos-delay="1900"
              data-aos-duration="300"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default About;
