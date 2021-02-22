import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "3rem",
    // Remove margin if nothing after header
    "&:last-child": {
      marginBottom: 0
    }
  },
  subtitle: {
    maxWidth: 700,
    display: "inline-block"
  }
});

function SectionHeader(props) {
  const {
    align,
    centered,
    size,
    subtitle,
    subtitleColor,
    title,
    titleColor,
    ...otherProps
  } = props;

  const classes = useStyles();

  return (
    <header className={classes.header} {...otherProps}>
      {title && (
        <Typography
          color={titleColor || "textPrimary"}
          variant={`h${size}`}
          align={centered ? "center" : align}
          gutterBottom
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          color={subtitleColor || "textSecondary"}
          variant={`h${size > 3 ? "6" : `${size + 3}`}`}
          align={centered ? "center" : align}
          className={classes.subtitle}
        >
          {subtitle}
        </Typography>
      )}
    </header>
  );
}

SectionHeader.propTypes = {
  align: PropTypes.string,
  buttonText: PropTypes.string,
  centered: PropTypes.bool,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string
};

export default SectionHeader;
