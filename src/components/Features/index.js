import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  features: {
    maxWidth: 900,
    margin: "80px auto 0 auto"
  },
  columns: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse"
    },
    "&:not(:last-of-type)": {
      paddingBottom: "1.5rem",
      "@media screen and (min-width: 960px)": {
        paddingBottom: "2.5rem"
      }
    }
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto"
  },
  image: {
    height: "auto",
    maxWidth: "100%"
  }
});

function Features(props) {
  const { items, ...otherProps } = props;
  const classes = useStyles();

  return (
    <div className={classes.features} {...otherProps}>
      {items.map((item, index) => (
        <Grid
          container
          alignItems="center"
          spacing={4}
          className={classes.columns}
          key={index}
        >
          <Grid item xs={12} sm={6}>
            <Typography color="textPrimary" variant="h5" gutterBottom>
              {item.title}
            </Typography>
            <Typography color="textSecondary" variant="h6">
              {item.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <figure className={classes.figure}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.image}
              />
            </figure>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

Features.propTypes = {
  items: PropTypes.object
};

export default Features;
