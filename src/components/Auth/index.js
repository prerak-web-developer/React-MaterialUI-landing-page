import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import { Link } from "../../util/router.js";
import FormStatus from "../FormStatus";
import FormField from "../FormField";
import SectionButton from "../SectionButton";

const useStyles = makeStyles(theme => ({
  submit: {
    marginBottom: theme.spacing(2)
  },
  link: {
    margin: "0 0.5rem"
  }
}));

function Auth(props) {
  const { buttonText, onSubmit, parentColor, mode, status } = props;

  // State for all inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const classes = useStyles();

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
  if (["signin", "signup", "forgotpass"].includes(mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Please enter an email"
      });
    }
  }

  // Add error if password empty
  if (["signin", "signup", "changepass"].includes(mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Please enter a password"
      });
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (["signup", "changepass"].includes(mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Please confirm password"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `This doesn't match your password`
      });
    }
  }

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with email/pass
      if (onSubmit) {
        onSubmit({
          email,
          pass
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <FormStatus status={status} />
      <form
        noValidate
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={2}>
          {["signup", "signin", "forgotpass"].includes(mode) && (
            <Grid item xs={12}>
              <FormField
                value={email}
                type="email"
                label="Email"
                placeholder="user@example.com"
                error={showErrors && getError("email")}
                onChange={value => setEmail(value)}
                required
              />
            </Grid>
          )}

          {["signup", "signin", "changepass"].includes(mode) && (
            <Grid item xs={12}>
              <FormField
                value={pass}
                type="password"
                label="Password"
                error={showErrors && getError("pass")}
                onChange={value => setPass(value)}
                required
              />
            </Grid>
          )}

          {["signup", "changepass"].includes(mode) && (
            <Grid item xs={12}>
              <FormField
                value={confirmPass}
                type="password"
                label="Confirm Password"
                error={showErrors && getError("confirmPass")}
                onChange={value => setConfirmPass(value)}
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <SectionButton
              className={classes.submit}
              parentColor={parentColor}
              size="large"
              fullWidth={true}
              state={status && status.type === "pending" ? "loading" : "normal"}
            >
              {buttonText}
            </SectionButton>
          </Grid>
          {["signup", "signin"].includes(mode) &&
            ((mode === "signup" && (
              <Grid item xs align="center">
                Have an account already?&nbsp;
                <MuiLink component={Link} to="/signin" className={classes.link}>
                  Sign in
                </MuiLink>
              </Grid>
            )) ||
              (mode === "signin" && (
                <Grid container>
                  <Grid item xs align="center">
                    <MuiLink component={Link} to="/signup">
                      Create an account
                    </MuiLink>
                  </Grid>
                  <Grid item xs align="center">
                    <MuiLink component={Link} to="/forgotpass">
                      Forgot password
                    </MuiLink>
                  </Grid>
                </Grid>
              )))}
        </Grid>
      </form>
    </Container>
  );
}

Auth.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  parentColor: PropTypes.string,
  mode: PropTypes.string,
  status: PropTypes.object
};

export default Auth;
