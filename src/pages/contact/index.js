import React from "react";
import ContactSection from "../../components/ContactSection";

function ContactPage() {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Contact Us"
      subtitle=""
      showNameField={true}
      buttonText="Send message"
    />
  );
}

export default ContactPage;
