import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SignIn from "../SignIn";
import { useRouter } from "../../util/router.js";

function SignInSection(props) {
  const { buttonText, color, size, subtitle, title, ...otherProps } = props;
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
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
        <SignIn
          buttonText={buttonText}
          parentColor={color}
          onSignin={onSignin}
        />
      </Container>
    </Section>
  );
}

SignInSection.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default SignInSection;
