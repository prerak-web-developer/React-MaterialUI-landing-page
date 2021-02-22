import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  BackgroundImage: {
    content: "",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    zIndex: 0
  }
});

function BackgroundImage(props) {
  const { image, opacity, ...otherProps } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.BackgroundImage}
      style={{
        backgroundImage: `url(${image})`,
        opacity: opacity
      }}
      {...otherProps}
    />
  );
}

BackgroundImage.propTypes = {
  image: PropTypes.string,
  opacity: PropTypes.number
};

export default BackgroundImage;
