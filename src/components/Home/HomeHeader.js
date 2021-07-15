import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  homeHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#e2e2e2",
    padding: "5px 10px 15px 10px",
    width: "100%",
  },
  instagramTypography: {
    marginLeft: "5px",
  },
  directIcon: {},
});

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeHeaderContainer}>
      <div>
        <i class="fa fa-camera" aria-hidden="true"></i>
        <span className={classes.instagramTypography}>
          Instagram
        </span>
      </div>
      <i
        className={`fa fa-location-arrow ${classes.directIcon}`}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default HomeHeader;
