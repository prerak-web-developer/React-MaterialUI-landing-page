import React, { useState } from "react";
import PropTypes from "prop-types";
import Auth from "../Auth";
import { useAuth } from "../../util/auth.js";

function SignIn(props) {
  const { buttonText, onSignin, parentColor, ...otherProps } = props;
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }) => {
    setStatus({ type: "pending" });
    auth
      .signin(email, pass)
      .then(user => {
        onSignin && onSignin();
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
      mode="signin"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
      {...otherProps}
    />
  );
}

SignIn.propTypes = {
  buttonText: PropTypes.string,
  onSignin: PropTypes.func,
  parentColor: PropTypes.string
};

export default SignIn;
