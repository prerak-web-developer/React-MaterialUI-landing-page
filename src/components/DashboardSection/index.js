import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

function DashboardSection(props) {
  const { color, size, subtitle, title, ...otherProps } = props;

  return (
    <Section color={color} size={size} {...otherProps}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
        />
      </Container>
    </Section>
  );
}

DashboardSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default DashboardSection;
