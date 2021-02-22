import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Contact from "../Contact";

function ContactSection(props) {
  const {
    buttonText,
    color,
    showNameField,
    size,
    subtitle,
    title,
    ...otherProps
  } = props;

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container maxWidth="md">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
        />
        <Contact
          parentColor={color}
          showNameField={showNameField}
          buttonText={buttonText}
        />
      </Container>
    </Section>
  );
}

ContactSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  showNameField: PropTypes.bool,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default ContactSection;
