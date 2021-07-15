import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    backgroundColor: "#e2e2e2",
    padding: "10px",
  },
  signalIcon: {
    marginRight: "3px",
  },
  batteryIcon: {
    marginLeft: "3px",
  },
});

const PhoneTop = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>10:30</div>
      <div>
        <i className={`fa fa-signal ${classes.signalIcon}`}></i>
        <i
          className={`fa fa-battery-full ${classes.batteryIcon}`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default PhoneTop;
