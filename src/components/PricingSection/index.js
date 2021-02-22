import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Pricing from "./../Pricing";

function PricingSection(props) {
  const { title, subtitle, size, color, ...otherProps } = props;

  return (
    <Section color={color} size={size} id="pricing" {...otherProps}>
      <Container maxWidth="md">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={3}
        />
        <Pricing
          buttonText="Choose"
          onChoosePlan={planId => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`);
          }}
          items={[
            {
              id: "HONOR",
              timespan: "HONOR MBR",
              price: "0",
              description:
                "We provide free service based on Ultronele product, with flexible payment options."
            },
            {
              id: "Golden",
              timespan: "Golden MBR",
              price: "30",
              description:
                "According to your choice, we'll deliver corresponding service to meet your requirements."
            }
          ]}
        />
      </Container>
    </Section>
  );
}

PricingSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default PricingSection;
