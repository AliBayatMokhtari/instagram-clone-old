import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  postHeaderContainer: {
    padding: ".6rem",
    paddingRight: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  avatarUrlUsernameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50 + "%",
  },
  userName: {
    marginLeft: "0.3rem",
  },
  moreIcon: {
    padding: 12,
    borderRadius: "50%",
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
});

const PostHeader = props => {
  const classes = useStyles();
  return (
    <div className={classes.postHeaderContainer}>
      <div className={classes.avatarUrlUsernameContainer}>
        <img
          src={props.avatarUrl}
          alt=""
          className={classes.avatarImage}
        />
        <span className={classes.userName}>
          {props.userName}
        </span>
      </div>
      <span className={classes.moreIcon}>
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default PostHeader;
