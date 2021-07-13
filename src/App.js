import React from "react";
import PhoneTop from "./components/public/PhoneTop";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  bodyContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  AppContainer: {
    maxWidth: "500px",
    width: "500px",
    minWidth: "500px",
    backgroundColor: "#e2e2e2",
    padding: "10px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bodyContainer}>
      <div className={classes.AppContainer}>
        <PhoneTop />
      </div>
    </div>
  );
}

export default App;
