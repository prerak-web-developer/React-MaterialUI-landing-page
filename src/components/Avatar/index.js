import React from "react";
import PropTypes from "prop-types";
import MuiAvatar from "@material-ui/core/Avatar";

function Avatar(props) {
  const { image, size, ...otherProps } = props;

  return (
    <MuiAvatar
      src={image}
      style={{ width: size, height: size }}
      {...otherProps}
    />
  );
}

Avatar.propTypes = {
  image: PropTypes.string,
  size: PropTypes.number
};

export default Avatar;
