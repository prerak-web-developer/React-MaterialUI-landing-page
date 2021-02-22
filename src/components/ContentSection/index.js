import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";

function ContentSection(props) {
  const {
    backgroundImage,
    backgroundImageOpacity,
    color,
    fontColor,
    size,
    subtitle,
    title,
    ...otherProps
  } = props;

  return (
    <Section
      color={color}
      fontColor={fontColor}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
      {...otherProps}
    >
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          titleColor="inherit"
          subtitleColor="inherit"
          centered={true}
          size={3}
        />
      </Container>
    </Section>
  );
}

ContentSection.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundImageOpacity: PropTypes.number,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default ContentSection;
