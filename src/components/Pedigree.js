import React from "react";
import classes from "./Pedigree.module.css";
import content from "../content.json";

const Pedigree = () => {
  return (
    <div className={classes.main}>
      <h1>Pedigree</h1>
      <div className={classes.container}>
        <p>{content[1].pedigree}</p>
        <img className={classes.image} src="pedigree.png" alt="" />
        <div
          className={classes.lineOne}
          data-aos="dot"
          data-aos-delay="1300"
          data-aos-duration="300"
        />
      </div>
    </div>
  );
};

export default Pedigree;
