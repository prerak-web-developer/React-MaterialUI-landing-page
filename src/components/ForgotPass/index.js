import React, { useState } from "react";
import PropTypes from "prop-types";
import Auth from "../Auth";
import { useAuth } from "../../util/auth.js";

function ForgotPass(props) {
  const { buttonText, parentColor, ...otherProps } = props;
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email }) => {
    setStatus({ type: "pending" });
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setStatus({
          type: "success",
          message: "Password reset email sent"
        });
      })
      .catch(error => {
        setStatus({
          type: "error",
          message: error.message
        });
      });
  };

  return (
    <Auth
      mode="forgotpass"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
      {...otherProps}
    />
  );
}

ForgotPass.propTypes = {
  buttonText: PropTypes.string,
  parentColor: PropTypes.string
};

export default ForgotPass;
