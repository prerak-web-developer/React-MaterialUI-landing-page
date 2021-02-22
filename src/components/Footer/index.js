import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Container from "@material-ui/core/Container";
import Section from "../Section";
import { Link } from "../../util/router.js";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    "@media screen and (min-width: 600px)": {
      flex: "50%"
    }
  },
  brand: {
    display: "block",
    height: 48
  },
  social: {
    alignItems: "flex-end"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8
    },
    "&:not(:first-of-type)": {
      marginLeft: 20
    }
  },
  left: {
    "@media screen and (min-width: 600px)": {
      justifyContent: "flex-start"
    }
  },
  right: {
    "@media screen and (min-width: 600px)": {
      justifyContent: "flex-end"
    }
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    "@media screen and (min-width: 600px)": {
      order: 1
    }
  }
});

const socialSites = [
  {
    url: "https://twitter.com",
    icon: <TwitterIcon />
  },
  {
    url: "https://facebook.com",
    icon: <FacebookIcon />
  },
  {
    url: "https://instagram.com",
    icon: <InstagramIcon />
  }
];

function Footer(props) {
  const { copyright, logo, ...otherProps } = props;
  const classes = useStyles();
  const leftClasses = clsx(classes.item, classes.left);
  const rightClasses = clsx(classes.item, classes.right);

  return (
    <Section {...otherProps}>
      <Container>
        <div className={classes.wrapper}>
          <div className={leftClasses}>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.brand} />
            </Link>
          </div>
          <div className={clsx(rightClasses, classes.smallLinks)}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <a
              target="_blank"
              href="https://medium.com"
              rel="noopener noreferrer"
              className={classes.link}
            >
              Blog
            </a>
          </div>
          <div className={clsx(rightClasses, classes.social)}>
            {socialSites.map(site => (
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
                key={site.url}
              >
                {site.icon}
              </a>
            ))}
          </div>
          <div className={clsx(leftClasses, classes.copyright)}>
            {copyright}
          </div>
        </div>
      </Container>
    </Section>
  );
}

Footer.propTypes = {
  copyright: PropTypes.string,
  logo: PropTypes.string
};

export default Footer;
