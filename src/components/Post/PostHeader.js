import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  postHeaderContainer: {},
});

const PostHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.postHeaderContainer}>
      this is post header
    </div>
  );
};

export default PostHeader;
