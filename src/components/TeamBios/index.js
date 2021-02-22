import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from "./../Avatar";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  avatar: {
    paddingTop: 32,
    margin: "auto"
  },
  role: {
    textTransform: "uppercase"
  },
  bio: {
    flexGrow: 1
  },
  actions: {
    paddingBottom: 32,
    justifyContent: "center",
    "& a": {
      color: theme.palette.grey[700],
      lineHeight: 1,
      "&:hover": {
        opacity: 0.8
      },
      "&:not(:first-of-type)": {
        marginLeft: 20
      }
    }
  }
}));

function TeamBios(props) {
  const { people, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={4} {...otherProps}>
      {people.map(person => (
        <Grid item xs={12} md={4} key={person.name}>
          <Card className={classes.card}>
            <CardContent className={classes.avatar}>
              <Avatar image={person.avatar} size={128} alt={person.name} />
            </CardContent>
            <CardContent>
              <Typography variant="h6" color="textSecondary" align="center">
                {person.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="center"
                className={classes.role}
              >
                {person.role}
              </Typography>
            </CardContent>
            <CardContent className={classes.bio}>
              <Typography color="textSecondary" variant="body1" align="center">
                {person.bio}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <a
                href={person.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href={person.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

TeamBios.propTypes = {
  people: PropTypes.object
};

export default TeamBios;
