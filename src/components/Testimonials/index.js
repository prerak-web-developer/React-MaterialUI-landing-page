import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "./../Avatar";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  avatar: {
    paddingTop: 32,
    margin: "auto"
  },
  bio: {
    flexGrow: 1
  }
});

function Testimonials(props) {
  const { items, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={4} {...otherProps}>
      {items.map(item => (
        <Grid item xs={12} md={4} key={item.name}>
          <Card className={classes.card}>
            <CardContent className={classes.avatar}>
              <Avatar image={item.avatar} size={96} alt={item.name} />
            </CardContent>
            <CardContent className={classes.bio}>
              <Typography color="textSecondary" variant="body1" align="center">
                "{item.bio}"
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h6" color="textPrimary" align="center">
                {item.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="center"
              >
                {item.company}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

Testimonials.propTypes = {
  items: PropTypes.object
};

export default Testimonials;
