import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green } from "@material-ui/core/colors";

const STATUS_TYPES = ["error", "info", "success", "warning"];

const variantIcon = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const { className, message, onClose, variant, ...other } = props;
  const classes = useStyles1();
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(STATUS_TYPES).isRequired
};

function FormStatus(props) {
  const { snackbarProps, status, ...other } = props;
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (status && STATUS_TYPES.includes(status.type)) {
      setSnackbarOpen(true);
    }
  }, [status]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  }

  return (
    <div {...other}>
      {status && STATUS_TYPES.includes(status.type) ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbarOpen}
          onClose={handleClose}
          autoHideDuration={6000}
          {...snackbarProps}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant={status.type}
            message={status.message}
          />
        </Snackbar>
      ) : null}
    </div>
  );
}

FormStatus.propTypes = {
  snackbarProps: PropTypes.object,
  status: PropTypes.object
};

export default FormStatus;
