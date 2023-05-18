import React from "react";
import classes from "./About.module.css";
import CircularCarousel from "./CircularCarousel";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

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
      <h1 className={classes.mainText}>
        The iconic SL has been transformed from 'super-light' to 'superb
        luxurious', and in SL55 form, packs plenty of firepower, too.
        <br />
        <br />
        Electric cars, EVs, zero emissions, sustainability, eco-friendliness.
        We're constantly bombarded with terms like these that we're literally
        drowning in eco-consciousness. Internal combustion engines and fossil
        fuels are bad and must be phased out.
        <br />
        <br />
        The intentions are good, but they are becoming suffocating.
        Ever-tightening emission regulations have quietened the voices of
        high-performance machines. Driving and admiring 'traditional' sports
        cars feels like a crime. But every now and then, a car like the
        Mercedes-Benz SL comes along.
        <br />
        <br />
        savings. In SL55 form, it is the first brand-new SL in Singapore that
        costs over $1 million ($1,002,888 to be exact), its price inflated by
        the heftier taxes levied on super-luxury cars.
        <br />
        <br />
        Price tag and vehicle dynamics are just the tip of the iceberg, though.
        It is no ordinary sports car, for the SL's true purpose is to refresh a
        petrolhead's soul.
      </h1>
      <div data-aos="roll-left" className={classes.rollInElement}>
        <CircularCarousel handleImageChange={handleImageChange} />

        {currentImage === 0 && (
          <>
            <img
              className={classes.whiteDot1}
              data-aos="dot"
              data-aos-delay="1000"
              data-aos-duration="500"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne1}
              data-aos="dot"
              data-aos-delay="1500"
              data-aos-duration="500"
            />
            <div
              className={classes.lineTwo1}
              data-aos="dot"
              data-aos-delay="2000"
              data-aos-duration="500"
            />
            <img
              className={classes.bubbleOne1}
              src="bubble1.png"
              data-aos="dot"
              data-aos-delay="2500"
              data-aos-duration="500"
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
              data-aos-duration="500"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne2}
              data-aos="dot"
              data-aos-delay="1500"
              data-aos-duration="500"
            />
            <div
              className={classes.lineTwo2}
              data-aos="dot"
              data-aos-delay="2000"
              data-aos-duration="500"
            />
            <img
              className={classes.bubbleOne2}
              src="bubble2.png"
              data-aos="dot"
              data-aos-delay="2500"
              data-aos-duration="500"
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
              data-aos-duration="500"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne3}
              data-aos="dot"
              data-aos-delay="1500"
              data-aos-duration="500"
            />
            <div
              className={classes.lineTwo3}
              data-aos="dot"
              data-aos-delay="2000"
              data-aos-duration="500"
            />
            <img
              className={classes.bubbleOne3}
              src="bubble3.png"
              data-aos="dot"
              data-aos-delay="2500"
              data-aos-duration="500"
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
              data-aos-duration="500"
              src="whiteDot.png"
              alt=""
            />
            <div
              className={classes.lineOne4}
              data-aos="dot"
              data-aos-delay="1500"
              data-aos-duration="500"
            />
            <div
              className={classes.lineTwo4}
              data-aos="dot"
              data-aos-delay="2000"
              data-aos-duration="500"
            />
            <img
              className={classes.bubbleOne4}
              src="bubble4.png"
              data-aos="dot"
              data-aos-delay="2500"
              data-aos-duration="500"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default About;
