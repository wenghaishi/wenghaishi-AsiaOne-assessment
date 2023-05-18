import React from "react";
import classes from "./Hero.module.css";
import backgroundVideo from "./background-video.mov";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Hero = () => {
  const dispatch = useDispatch();
  const dropdown = useSelector((state) => state.showDropdown);
  const showBottomElement = useSelector((state) => state.showBottomElement);

  const toggleDropdown = () => {
    dispatch({ type: "toggleDropdown" });
  };

  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: "toggleBottomElement" });
      console.log("scrolled");
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.hero}>
      <video className={classes.video} autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <h1 className={classes.title}>Mercedes-Benz SL55 AMG</h1>
      <div className={classes.share}>
        <img className={classes.menuItem} src="menu.png" alt="menu icon" />
        {!dropdown && (
          <img
            onClick={toggleDropdown}
            className={classes.menuShare}
            src="share1.png"
            alt="share menu"
          />
        )}
      </div>

      {dropdown && (
        <div className={classes.dropdown}>
          <img
            className={classes.dropdownImg}
            src="whatsapp.png"
            alt="menu icon"
          />
          <img
            className={classes.dropdownImg}
            src="instagram.png"
            alt="menu icon"
          />
          <img
            className={classes.dropdownImg}
            src="telegram.png"
            alt="menu icon"
          />
          <img
            className={classes.dropdownImg}
            src="facebook.png"
            alt="menu icon"
          />
          <img
            className={classes.dropdownImg}
            src="twitter.png"
            alt="menu icon"
          />
          <img
            className={classes.dropdownClose}
            onClick={toggleDropdown}
            src="close.png"
            alt="menu icon"
          />
        </div>
      )}
      <div
        className={`${classes.container} ${
          showBottomElement ? classes.active : classes.inactive
        }`}
      >
        <img className={classes.prompt} src="prompt.png" alt="prompt" />
      </div>
    </div>
  );
};

export default Hero;
