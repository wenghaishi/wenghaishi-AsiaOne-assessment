import React from "react";
import classes from "./Pedigree.module.css";

const Pedigree = () => {
  return (
    <div className={classes.main}>
      <h1>Pedigree</h1>
      <div className={classes.container}>
        <p>
          When one thinks of a German sports car with heritage, chances are the
          Porsche 911 , which was first launched in 1963, immediately pops into
          mind. 
          <br />
          <br />
          There's another model with an even longer history though: It's
          the Mercedes-Benz SL, which first debuted as a racecar in 1952. 
          <br />
          <br />
          The SL
          has racecar heritage, but over seven decades, its sportiness was
          blended with cruising ability. SL, which stands for 'sport-light',
          continually evolved into a topless grand tourer.
        </p>
        <img className={classes.image} src="pedigree.png" alt=""/>
      </div>
    </div>
  );
};

export default Pedigree;
