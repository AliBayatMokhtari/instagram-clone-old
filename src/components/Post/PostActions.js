import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(({ isLiked }) => {
  return {
    actionsContainer: {
      display: "flex",
      padding: 10,
      width: 100 + "%",
    },
    likeCommentDirectContainer: {
      flex: 1,
    },
    likeCommentDirectContainerActionItem: {
      margin: "0px .8rem",
      "&:first-child": {
        marginLeft: 0,
      },
      "&:hover": {
        cursor: "pointer",
      },
    },
    likedPost: {
      color: "red",
    },
    saveContainer: {
      flex: 2,
      display: "flex",
      justifyContent: "flex-end",
    },
    saveActionItem: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
});

const PostActions = props => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const classes = useStyles({ isLiked });

  const likePost = async () => {
    setIsLiked(prevState => !prevState);
  };

  const commentOnPost = () => {};

  const shareInDirect = () => {};

  const savePost = () => {
    setIsSaved(prevState => !prevState);
  };

  return (
    <div className={classes.actionsContainer}>
      <div className={classes.likeCommentDirectContainer}>
        <span onClick={likePost}>
          {!isLiked ? (
            <i
              className={`fa fa-heart-o ${classes.likeCommentDirectContainerActionItem}`}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className={`fa fa-heart ${classes.likeCommentDirectContainerActionItem} ${classes.likedPost} `}
              aria-hidden="true"
            ></i>
          )}
        </span>
        <span onClick={commentOnPost}>
          <i
            className={`fa fa-comment-o ${classes.likeCommentDirectContainerActionItem}`}
            aria-hidden="true"
          ></i>
        </span>
        <span onClick={shareInDirect}>
          <i
            className={`fa fa-location-arrow ${classes.likeCommentDirectContainerActionItem}`}
            aria-hidden="true"
          ></i>
        </span>
      </div>
      <div className={classes.saveContainer}>
        <span onClick={savePost}>
          {!isSaved ? (
            <i
              className={`fa fa-bookmark-o ${classes.saveActionItem} `}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className={`fa fa-bookmark ${classes.saveActionItem} `}
              aria-hidden="true"
            ></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default PostActions;
