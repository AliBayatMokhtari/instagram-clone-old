import React from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  postContainer: {},
});

const Post = props => {
  const classes = useStyles();
  return (
    <div className={classes.postContainer}>
      <PostHeader
        userName={props.userName}
        avatarUrl={props.avatarUrl}
      />
      <PostImage imageUrl="https://picsum.photos/500/500" />
      <PostActions />
    </div>
  );
};

export default Post;
