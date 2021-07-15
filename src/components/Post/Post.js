import React from "react";
import PostHeader from "./PostHeader";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  postContainer: {},
});

const Post = () => {
  const classes = useStyles();
  return (
    <div className={classes.postContainer}>
      <PostHeader />
    </div>
  );
};

export default Post;
