import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Newsletter from "../Newsletter";

function NewsletterSection(props) {
  const {
    buttonText,
    color,
    inputLabel,
    inputPlaceholder,
    size,
    subscribedMessage,
    subtitle,
    title,
    ...otherProps
  } = props;

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <Grid
          container
          direction="row"
          // justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <SectionHeader size={4} title={title} subtitle={subtitle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Newsletter
              parentColor={color}
              buttonText={buttonText}
              inputLabel={inputLabel}
              inputPlaceholder={inputPlaceholder}
              subscribedMessage={subscribedMessage}
              size="medium"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

NewsletterSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  size: PropTypes.number,
  subscribedMessage: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default NewsletterSection;
