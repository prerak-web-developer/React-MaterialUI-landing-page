import React from "react";
import PropTypes from "prop-types";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import Fast from "../../images/fast.svg";
import Easy from "../../images/easy.svg";
import Funny from "../../images/funny.svg";
import Scale from "../../images/scale.svg";

function FeaturesSection(props) {
  const { color, size, subtitle, title, ...otherProps } = props;
  return (
    <Section color={color} size={size} {...otherProps}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={4}
      />
      <Features
        items={[
          {
            title: "Fast",
            description:
              "By the virtue of GatsbyJS, I deliver web content with an amazing speed.",
            image: `${Fast}`
          },
          {
            title: "Easy",
            description:
              "Using content generator, you can create everything with one command.",
            image:
              `${Easy}`
          },
          {
            title: "Funny",
            description:
              "Learning could be boring, but what if youd encounter surprise and bonus in the process?",
            image: `${Funny}`
          },
          {
            title: "Scale",
            description:
              "By means of the plugin design from GatsbyJS, it is also scalable to any new functionalities both in front-end and back-end.",
            image: `${Scale}`
          }
        ]}
      />
    </Section>
  );
}

FeaturesSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default FeaturesSection;
