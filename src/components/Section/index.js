import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import makeStyles from "@material-ui/styles/makeStyles";
import Box from "@material-ui/core/Box";
import BackgroundImage from "../BackgroundImage";

const useStyles = makeStyles({
  normal: {
    padding: "3rem 1.5rem",
    borderTop: "1px solid rgb(245, 245, 245)"
  },
  medium: {
    "@media screen and (min-width: 960px)": {
      padding: "6rem 1.5rem"
    }
  },
  large: {
    "@media screen and (min-width: 960px)": {
      padding: "9rem 1.5rem"
    }
  }
});

function Section(props) {
  const {
    children,
    className,
    color,
    fontColor,
    backgroundImage,
    backgroundImageOpacity,
    size = "normal",
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <Box
      component="section"
      bgcolor={color}
      color={fontColor}
      fontFamily="fontFamily"
      className={clsx(classes[size], className)}
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
        />
      )}

      {children}
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundImageOpacity: PropTypes.number
};

export default Section;
