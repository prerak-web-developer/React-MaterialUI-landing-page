import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactForm from "../ContactForm";
import contact from "../../util/contact.js";

function Contact(props) {
  const { buttonText, parentColor, showNameField, ...otherProps } = props;
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });

    contact.submit({ name, email, message }).then(() => {
      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you soon."
      });
    });
  };
  return (
    <ContactForm
      parentColor={parentColor}
      showNameField={showNameField}
      buttonText={buttonText}
      onSubmit={onSubmit}
      status={status}
      {...otherProps}
    />
  );
}

Contact.propTypes = {
  buttonText: PropTypes.string,
  parentColor: PropTypes.string,
  showNameField: PropTypes.bool
};

export default Contact;
