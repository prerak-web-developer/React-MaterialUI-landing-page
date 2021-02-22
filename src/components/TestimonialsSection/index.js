import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Testimonials from "./../Testimonials";
import Murray from "../../images/avatar1.JPG";
import Sara from "../../images/avatar2.JPG";
import Candy from "../../images/avatar3.JPG";

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              avatar: `${Murray}`,
              name: "Shawna Murray",
              role: "Software Engineer",
              bio:
                "Leveraging the power of GatsbyJS framework, archer gives me an extremely soomth visit experience, no need to wait loading, its optimized content deliver to me without any delay.",
              company: "Microsoft"
            },
            {
              avatar: `${Sara}`,
              name: "Sara Helen",
              role: "Designer",
              bio:
                "Being an elearning system, it is also a great CMS if not including test. Authors can create their tutorials/curriculums with the syntax of Markdown file, and built-in templates!",
              company: "Facebook"
            },
            {
              avatar: `${Candy}`,
              name: "Candy Elder",
              role: "Designer",
              bio:
                "By means of the plugin design from GatsbyJS, it is also scalable to any new functionalities both in front-end and back-end. The components, page templates, plugins make it extremely flexible.",
              company: "Amazon"
            }
          ]}
        />
      </Container>
    </Section>
  );
}

TestimonialsSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default TestimonialsSection;
