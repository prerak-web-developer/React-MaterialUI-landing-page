import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ChangePass from "../ChangePass";

function ChangePassSection(props) {
  const { buttonText, color, size, subtitle, title, ...otherProps } = props;

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
        />
        <ChangePass buttonText={buttonText} parentColor={color} />
      </Container>
    </Section>
  );
}

ChangePassSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default ChangePassSection;
