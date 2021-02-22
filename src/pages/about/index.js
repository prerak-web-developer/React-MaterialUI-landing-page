import React from "react";
import ContentSection from "./../../components/ContentSection";
import TeamBiosSection from "./../../components/TeamBiosSection";

function AboutPage() {
  return (
    <>
      <ContentSection
        color="primary.main"
        fontColor="white"
        size="large"
        title="We help you make huge progress"
        subtitle="My desire is to be a revolutionary elearning product featured with Speed, Usability, Enjoyment, Costlessness, Richness, Scalability, all these goals are reachable in the same time."
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet My Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
