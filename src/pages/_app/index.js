import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../theme";
import Navbar from "../../components/Navbar";
import HomePage from "../home";
import AboutPage from "../about";
import FaqPage from "./../faq";
import PricingPage from "./../pricing";
import ContactPage from "../contact";
import DashboardPage from "../dashboard";
import SigninPage from "../signin";
import SignupPage from "../signup";
import ForgotpassPage from "../forgotpass";
import ChangepassPage from "../changepass";
import { Switch, Route, Router } from "../../util/router.js";
import Footer from "../../components/Footer";
import "../../util/analytics.js";
import { ProvideAuth } from "../../util/auth.js";
import logo from "../../images/logo.png";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar spaced={true} logo={logo} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/faq" component={FaqPage} />
            <Route exact path="/pricing" component={PricingPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/forgotpass" component={ForgotpassPage} />
            <Route exact path="/changepass" component={ChangepassPage} />
            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>
          <Footer
            color="background.alternate"
            size="normal"
            logo={logo}
            copyright="© 2020 Company"
          />
        </ThemeProvider>
      </Router>
    </ProvideAuth>
  );
}

export default App;
