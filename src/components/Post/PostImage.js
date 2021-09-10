import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  postImageContainer: {
    width: 520,
    height: 520,
  },
  imageUrl: {
    width: 100 + "%",
    height: 100 + "%",
  },
});

const PostImage = props => {
  const classes = useStyles();
  return (
    <div className={classes.postImageContainer}>
      <img
        className={classes.imageUrl}
        src={props.imageUrl}
        alt=""
      />
    </div>
  );
};

export default PostImage;
