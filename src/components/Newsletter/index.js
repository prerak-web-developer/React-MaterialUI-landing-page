import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SectionButton from "../SectionButton";
import FormField from "../FormField";
import newsletter from "../../util/newsletter.js";

const useStyles = makeStyles({
  button: {
    height: 56
  }
});

function Newsletter(props) {
  const {
    buttonOnClick,
    buttonText,
    inputLabel,
    inputPlaceholder,
    onSubscribed,
    parentColor,
    subscribedMessage,
    ...otherProps
  } = props;

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const classes = useStyles();

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
      // Parent component can optionally
      // find out when subscribed.
      onSubscribed && onSubscribed();
      // Subscribe them
      newsletter.subscribe({ email });
    }
  };

  return (
    <div {...otherProps}>
      {subscribed === false && (
        <form
          noValidate
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
          {...otherProps}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <FormField
                type="email"
                label={inputLabel}
                placeholder={inputPlaceholder}
                value={email}
                onChange={value => setEmail(value)}
                required
              />
            </Grid>
            <Grid item>
              <SectionButton
                parentColor={parentColor}
                size="large"
                onClick={buttonOnClick}
                className={classes.button}
              >
                {buttonText}
              </SectionButton>
            </Grid>
          </Grid>
        </form>
      )}

      {subscribed === true && <>{subscribedMessage}</>}
    </div>
  );
}

Newsletter.propTypes = {
  buttonOnClick: PropTypes.func,
  buttonText: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onSubscribed: PropTypes.func,
  parentColor: PropTypes.string,
  subscribedMessage: PropTypes.string
};

export default Newsletter;
