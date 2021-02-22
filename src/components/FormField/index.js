import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function FormField(props) {
  const {
    autoComplete,
    error,
    helperText,
    onChange,
    type,
    ...otherProps
  } = props;

  return (
    <TextField
      variant="outlined"
      multiline={type === "textarea"}
      type={type}
      onChange={e => onChange(e.target.value)}
      error={Boolean(error)}
      helperText={(Boolean(error) && error.message) || helperText}
      autoComplete={autoComplete}
      fullWidth
      {...otherProps}
    />
  );
}

FormField.propTypes = {
  autoComplete: PropTypes.bool,
  error: PropTypes.object,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
};

export default FormField;
