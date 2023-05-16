import React from "react";
import classes from "./Hero.module.css";
import backgroundVideo from "./background-video.mov";
import { useSelector, useDispatch } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();
  const dropdown = useSelector((state) => state.showDropdown);

  const toggleDropdown = () => {
    dispatch({ type: "toggleDropdown" });
  };

  return (
    <div className={classes.hero}>
      <video className={classes.video} autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={classes.share}>
        <img className={classes.menuItem} src="menu.png" alt="menu icon" />
        <img onClick={toggleDropdown} className={classes.menuShare} src="share.png" alt="share menu" />
      </div>

      {dropdown && (
        <ul className={classes.dropdown}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Hero;
