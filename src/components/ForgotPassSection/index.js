import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ForgotPass from "../ForgotPass";

function ForgotPassSection(props) {
  const { buttonText, color, size, subtitle, title, ...otherProps } = props;

  return (
    <Section color={color} size={size}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
          {...otherProps}
        />
        <ForgotPass buttonText={buttonText} parentColor={color} />
      </Container>
    </Section>
  );
}

ForgotPassSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default ForgotPassSection;
