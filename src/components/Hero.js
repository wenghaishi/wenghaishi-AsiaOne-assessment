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
        {!dropdown && <img onClick={toggleDropdown} className={classes.menuShare} src="share.png" alt="share menu" />}
      </div>

      {dropdown && (
        <div className={classes.dropdown}>
          <img className={classes.dropdownImg} src="whatsapp.png" alt="menu icon"/>
          <img className={classes.dropdownImg} src="instagram.png" alt="menu icon"/>
          <img className={classes.dropdownImg} src="telegram.png" alt="menu icon"/>
          <img className={classes.dropdownImg} src="facebook.png" alt="menu icon"/>
          <img className={classes.dropdownImg} src="twitter.png" alt="menu icon"/>
          <img className={classes.dropdownClose} onClick={toggleDropdown}src="close.png" alt="menu icon"/>
        </div>
      )}
    </div>
  );
};

export default Hero;
