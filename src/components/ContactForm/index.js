import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormStatus from "../FormStatus";
import FormField from "../FormField";
import SectionButton from "../SectionButton";

function ContactForm(props) {
  const {
    buttonText,
    onSubmit,
    parentColor,
    showNameField,
    status,
    ...otherProps
  } = props;

  // State for input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors = [];

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = val => val.trim() === "";

  // Add error if email empty
  if (isEmpty(email)) {
    errors.push({
      field: "email",
      message: "Please enter an email"
    });
  }

  // Add error if message empty
  if (isEmpty(message)) {
    errors.push({
      field: "message",
      message: "Please enter a message"
    });
  }

  // Add error if name shown and empty
  if (showNameField) {
    if (isEmpty(name)) {
      errors.push({
        field: "name",
        message: "Please enter your name"
      });
    }
  }

  // Handle form submission
  const handleSubmit = e => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with form data
      if (onSubmit) {
        onSubmit({
          name,
          email,
          message
        });
      }
    }
  };

  return (
    <div {...otherProps}>
      {status && status.message && (
        <FormStatus type={status.type} message={status.message} />
      )}

      <form
        noValidate
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {showNameField && (
              <FormField
                value={name}
                type="text"
                label="Name"
                error={showErrors && getError("name")}
                onChange={value => setName(value)}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              value={email}
              type="email"
              label="Email"
              error={showErrors && getError("email")}
              onChange={value => setEmail(value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              value={message}
              type="textarea"
              rows={4}
              label="Message"
              error={showErrors && getError("message")}
              onChange={value => setMessage(value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <SectionButton
              parentColor={parentColor}
              size="large"
              state={status && status.type === "pending" ? "loading" : "normal"}
            >
              {buttonText}
            </SectionButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string,
  parentColor: PropTypes.string,
  onSubmit: PropTypes.func,
  showNameField: PropTypes.bool,
  status: PropTypes.object
};

export default ContactForm;
