import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios from "./../TeamBios";
import Person1 from "../../images/person1.JPG";
import Person2 from "../../images/person2.JPG";
import Person3 from "../../images/person3.JPG";


function TeamBiosSection(props) {
  const { color, size, subtitle, title, ...otherProps } = props;

  return (
    <Section color={color} size={size}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={4}
          style={{ color: "white" }}
          {...otherProps}
        />
        <TeamBios
          people={[
            {
              avatar: `${Person1}`,
              name: "John Smith",
              role: "Software Engineer",
              bio:
                "I love playing basketball and have represented my school in many competitions. My active participation in sports has taught me many skills. I am also an active member of my school alumni club and take initiative in organizing alumni meets.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: `${Person2}`,
              name: "Lisa Zinn",
              role: "Software Engineer",
              bio:
                "I have moved to this city three months ago. I love the street food here. On weekends, I explore new eating joints. This way, I get to learn the routes of this city and prepare myself professionally. Being a sales professional, my profile requires a lot of traveling.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: `${Person3}`,
              name: "Diana Low",
              role: "Designer",
              bio:
                "Being an IT professional, I enjoy learning about the breakthrough in technology. I attended a professional workshop about ‘new technologies’ last year, where I learned about a new tool in the market, and I used it in my last project.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            }
          ]}
        />
      </Container>
    </Section>
  );
}

TeamBiosSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default TeamBiosSection;
