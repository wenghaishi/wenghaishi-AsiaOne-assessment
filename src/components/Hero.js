import React from "react";
import classes from "./Hero.module.css";
import backgroundVideo from "./background-video.mov";
import { useSelector } from "react-redux";

const Hero = () => {
  const dropdown = useSelector((state) => state.showDropdown);

  const toggleDropdown = () => {
    dispatchEvent({ type: "toggleDropdown" });
  };

  return (
    <div className={classes.hero}>
      <video className={classes.video} autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <img
        className={classes.share}
        onClick={toggleDropdown}
        src="share.png"
        alt="share menu"
      />
      {dropdown && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Hero;
