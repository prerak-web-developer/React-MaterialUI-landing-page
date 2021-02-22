import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import Clients from "./../Clients";
import Instagram from "../../images/logo-instagram.svg";
import Slack from "../../images/logo-slack.svg";
import Tinder from "../../images/logo-tinder.svg";
import Spotify from "../../images/logo-spotify.svg";

function ClientsSection(props) {
  const { color, size, ...otherProps } = props;

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <Clients
          items={[
            {
              name: "Instagram",
              image: `${Instagram}`,
              width: "150px"
            },
            {
              name: "Slack",
              image: `${Slack}`,
              width: "135px"
            },
            {
              name: "Tinder",
              image: `${Tinder}`,
              width: "90px"
            },
            {
              name: "Spotify",
              image: `${Spotify}`,
              width: "135px"
            }
          ]}
        />
      </Container>
    </Section>
  );
}

ClientsSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default ClientsSection;
