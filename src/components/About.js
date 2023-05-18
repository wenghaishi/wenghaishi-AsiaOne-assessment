import React from "react";
import classes from "./About.module.css";
import CircularCarousel from "./CircularCarousel";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

const About = () => {
  const dispatch = useDispatch();
  const rollInElement = useSelector((state) => state.rollInElement);

  useEffect(() => {
    Aos.init({ duration: 1500 });
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
        <CircularCarousel />
        <img
          className={classes.whiteDot}
          data-aos="dot"
          data-aos-delay="1500"
          data-aos-duration="500"
          src="whiteDot.png"
          alt=""
        />

        <div
          className={classes.lineOne}
          data-aos="dot"
          data-aos-delay="2000"
          data-aos-duration="500"
        />
        <div
          className={classes.lineTwo}
          data-aos="dot"
          data-aos-delay="2500"
          data-aos-duration="500"
        />
        <img
        className={classes.bubbleOne}
          src="bubble1.png"
          data-aos="dot"
          data-aos-delay="3000"
          data-aos-duration="500"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
