import React from "react";
import classes from "./Interior.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Interior = () => {
  return (
    <div className={classes.main}>
      <div className={classes.rectangleLeftContainer} data-aos="fade-right">
        <img
          className={classes.rectangleLeft}
          src="interior-rectangle-left.png"
          alt=""
        />
        <h1 className={classes.rectangleLeftTitle}>
          Different interior approach
        </h1>
      </div>
      <div className={classes.rectangleRightContainer} data-aos="fade-left">
        <img
          className={classes.rectangleRight}
          src="interior-rectangle-right.png"
          alt=""
        />
        <h4 className={classes.rectangleRightTitle}>
          Modern Mercedes models have interiors designed to elicit wows from the
          moment you lay eyes on the cockpit, but the SL is going with a
          'hyperanalogue' approach.
        </h4>
      </div>
      <div className={classes.centeredElement}>
        <div className={classes.mainText}>
          Yes, there are still screens. But instead of the usual MBUX
          (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel
          is housed under a cowl, reflecting the SL's sporty roots.
          <br />
          <br />
          Dominating the dashboard is the tablet-like 11.9-inch infotainment
          display, whose tilt angle can be adjusted from 12 degrees to 32
          degrees at a touch of a button. It helps minimise screen glare when
          driving with the top down.
        </div>
        <img
          className={classes.whiteDot}
          src="whiteDot.png"
          alt="dot"
          data-aos="fade-right"
        />
        <div
          className={classes.lineOne}
          data-aos="dot"
          data-aos-delay="1300"
          data-aos-duration="300"
        />
        <div
          className={classes.lineTwo}
          data-aos="dot"
          data-aos-delay="1600"
          data-aos-duration="500"
        />
        <img
          className={classes.bubbleOne}
          src="bubbleInterior.png"
          data-aos="dot"
          data-aos-delay="1900"
          data-aos-duration="300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Interior;
