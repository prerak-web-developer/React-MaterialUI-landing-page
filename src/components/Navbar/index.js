import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "../../util/router.js";
import { useAuth } from "../../util/auth.js";

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "1.0rem 1.5rem 0"
  },
  toolBar: {
    height: 84
  },
  link: {
    lineHeight: 1
  },
  image: {
    height: "48px",
    marginRight: theme.spacing(2)
  },
  spacer: {
    flexGrow: 1
  },
  dialog: {
    width: "calc(100% - 32px)",
    maxWidth: "calc(100% - 32px)",
    margin: 0,
    position: "absolute",
    top: "80px"
  },
  button: {
    textTransform: "none"
  },
  buttonIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function Navbar(props) {
  const { logo, spaced, ...otherProps } = props;
  const classes = useStyles();
  const auth = useAuth();
  const theme = useTheme();
  const xSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorEl(null);
  }

  function handleSignout(event) {
    event.preventDefault();
    auth.signout();
    handleCloseMenu();
  }

  const menuItems = [
    <MenuItem
      component={Link}
      to="/dashboard"
      onClick={handleCloseMenu}
      key="dashboard"
    >
      Dashboard
    </MenuItem>,
    <MenuItem
      component={Link}
      to="/signin"
      onClick={handleSignout}
      key="signin"
    >
      Signout
    </MenuItem>
  ];

  return (
    <div className={classes.wrapper} {...otherProps}>
      <Container component="nav">
        <Toolbar variant={spaced ? "regular" : "dense"} disableGutters>
          <Link to="/" className={classes.link}>
            <img className={classes.image} src={logo} alt="Logo" />
          </Link>
          <div className={classes.spacer} />
          {!auth.user && (
            <Button component={Link} to="/signin" className={classes.button}>
              Sign in
            </Button>
          )}
          {auth.user && (
            <div>
              <Hidden smUp implementation="css">
                <IconButton
                  aria-label="User account"
                  aria-controls="appbar-menu"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Button
                  aria-label="User account"
                  aria-controls="appbar-menu"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                  className={classes.button}
                >
                  Account
                  <ExpandMoreIcon className={classes.buttonIcon} />
                </Button>
              </Hidden>
              {xSmall ? (
                <Dialog
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  id="appbar-menu"
                  PaperProps={{ className: classes.dialog }}
                >
                  <DialogContent>{menuItems}</DialogContent>
                </Dialog>
              ) : (
                <Menu
                  id="appbar-menu"
                  anchorEl={anchorEl}
                  getContentAnchorEl={undefined}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  {menuItems}
                </Menu>
              )}
            </div>
          )}
        </Toolbar>
      </Container>
    </div>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string,
  spaced: PropTypes.bool
};

export default Navbar;
