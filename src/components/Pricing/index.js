import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SectionButton from "../SectionButton";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  pricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  },
  description: {
    flexGrow: 1
  }
});

function Pricing(props) {
  const { buttonText, items, onChoosePlan, ...otherProps } = props;
  const classes = useStyles();

  function handleClick(event) {
    onChoosePlan(event);
  }

  return (
    <Grid container spacing={4} {...otherProps}>
      {items.map(item => (
        <Grid item xs={12} sm={6} key={item.id}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" color="textPrimary" align="center">
                {item.timespan}
              </Typography>
            </CardContent>
            <CardContent className={classes.pricing}>
              <Typography variant="h4" color="textSecondary">
                $
              </Typography>
              <Typography component="h1" variant="h3" color="textPrimary">
                {item.price}
              </Typography>
              <Typography variant="h5" color="textSecondary">
                /m
              </Typography>
            </CardContent>
            <CardContent className={classes.description}>
              <Typography color="textSecondary">{item.description}</Typography>
            </CardContent>
            <CardContent>
              <SectionButton
                size="large"
                fullWidth
                onClick={() => handleClick(item.id)}
              >
                {buttonText}
              </SectionButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

Pricing.propTypes = {
  buttonText: PropTypes.string,
  items: PropTypes.object,
  onChoosePlan: PropTypes.func
};

export default Pricing;
