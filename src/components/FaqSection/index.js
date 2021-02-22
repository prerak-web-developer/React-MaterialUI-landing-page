import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Faq from "./../Faq";

function FaqSection(props) {
  const { color, size, subtitle, title, ...otherProps } = props;
  return (
    <Section color={color} size={size}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={3}
          {...otherProps}
        />
        <Faq
          items={[
            {
              question: "What purpose is this software used for?",
              answer:
                "This software is designed for tutors, educational institutes, small enterprises which have little technical resources or limited budget, wish to own a easy-use training platform."
            },
            {
              question: "Can I use it for free?",
              answer:
                "Absolutely, if you're teacher/students/NGO members, you'd get full tech support totally with no fee. Ultronele's mission is to help as manay people as possible to access knowledge in the easiest way and the lowest cost."
            },
            {
              question: "What if I made some custom development and want to sell to my client?",
              answer:
                "It's OK, this product use MIT license, so you should include LICENSE file of this product."
            },
            {
              question: "Our company need commercial support, can you provide?",
              answer:
                "Sure, we recommend you purchase our Premium membership, and if you have more requirements we can talk in depth."
            }
          ]}
        />
      </Container>
    </Section>
  );
}

FaqSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default FaqSection;
