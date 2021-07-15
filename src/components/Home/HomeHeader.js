import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  homeHeaderContainer: {},
});

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeHeaderContainer}>
      <div>
        <i class="fa fa-camera" aria-hidden="true"></i>
        <img src="" alt="" />
      </div>
      <span></span>
    </div>
  );
};

export default HomeHeader;
