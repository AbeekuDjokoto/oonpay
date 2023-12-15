import React from "react";

import classes from "./Button.module.scss";

const ButtonLoader = ({ color }) => {
  return (
    <div className={classes.ldsRing}>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
    </div>
  );
};

export default ButtonLoader;
