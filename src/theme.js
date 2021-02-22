import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00d1b2"
    },
    background: {
      default: "#FFFFFF",
      alternate: "#F5F5F5"
    },
    success: "#23D160",
    warning: "#FFDD57",
    danger: "#FF3860",
    info: "#209CEE"
  },
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",
      "-apple-system",
      '"Segoe UI"',
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(","),
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    }
  }
});

export default theme;
