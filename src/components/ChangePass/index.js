import React, { useState } from "react";
import PropTypes from "prop-types";
import Auth from "../Auth";
import { useAuth } from "../../util/auth.js";

function ChangePass(props) {
  const { buttonText, parentColor, ...otherProps } = props;
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ pass }) => {
    setStatus({ type: "pending" });
    auth
      .confirmPasswordReset(pass)
      .then(() => {
        setStatus({
          type: "success",
          message: "Your password has been changed"
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
      mode="changepass"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
      {...otherProps}
    />
  );
}

ChangePass.propTypes = {
  buttonText: PropTypes.string,
  parentColor: PropTypes.string
};

export default ChangePass;
