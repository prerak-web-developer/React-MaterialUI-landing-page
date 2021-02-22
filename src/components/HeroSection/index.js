import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";

const useStyles = makeStyles({
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%"
  },
  spacer: {
    height: 48
  }
});

function HeroSection(props) {
  const {
    color,
    size,
    title,
    subtitle,
    buttonOnClick,
    buttonText,
    image,
    ...otherProps
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            container
            direction="column"
            alignItems={small ? "center" : undefined}
            xs={12}
            md={5}
          >
            <SectionHeader
              title={title}
              subtitle={subtitle}
              size={3}
              centered={small}
            />
            <Grid item>
              <SectionButton
                parentColor={color}
                size="large"
                onClick={buttonOnClick}
              >
                {buttonText}
              </SectionButton>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1} className={classes.spacer} />
          <Grid item xs={12} md>
            <figure>
              <img src={image} alt="Illustration" className={classes.image} />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

HeroSection.propTypes = {
  buttonOnClick: PropTypes.func,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default HeroSection;
