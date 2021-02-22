import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  buttonProgress: {
    color: "white",
    position: "absolute",
    left: "50%",
    marginTop: 14,
    marginLeft: -16
  },
  button: {
    height: "100%",
    boxShadow: "none",
    textTransform: "none",
    color: "white"
  }
});

function SectionButton(props) {
  const { children, className, parentColor, state, ...otherProps } = props;

  const classes = useStyles();

  return (
    <div {...otherProps}>
      <Button
        variant="contained"
        // color={parentColor}
        color="primary"
        type="submit" // TODO: Check this
        disabled={state === "loading"}
        className={clsx(className, classes.button)}
        {...otherProps}
      >
        {children}
      </Button>
      {state === "loading" && (
        <CircularProgress size={32} className={classes.buttonProgress} />
      )}
    </div>
  );
}

SectionButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  parentColor: PropTypes.string,
  state: PropTypes.string,
};

export default SectionButton;
