import React, { useState } from "react";
import PropTypes from "prop-types";
import Auth from "../Auth";
import { useAuth } from "../../util/auth.js";

function SignUp(props) {
  const { buttonText, onSignup, parentColor, ...otherProps } = props;
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }) => {
    setStatus({ type: "pending" });
    auth
      .signup(email, pass)
      .then(user => {
        onSignup && onSignup();
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
      mode="signup"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
      {...otherProps}
    />
  );
}

SignUp.propTypes = {
  buttonText: PropTypes.string,
  onSignin: PropTypes.func,
  parentColor: PropTypes.string
};

export default SignUp;
