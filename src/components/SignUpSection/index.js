import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SignUp from "../SignUp";
import { useRouter } from "../../util/router.js";

function SignUpSection(props) {
  const { buttonText, color, size, subtitle, title, ...otherProps } = props;
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push("/dashboard");
  };

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
        />
        <SignUp
          buttonText={buttonText}
          parentColor={color}
          onSignup={onSignup}
        />
      </Container>
    </Section>
  );
}

SignUpSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default SignUpSection;
