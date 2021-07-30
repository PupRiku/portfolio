import { createTheme } from "@material-ui/core/styles";

const diorioOrange = "#C16200";
const diorioPurple = "#40356F";
const diorioBlue = "#69E9F5";
const diorioGrey = "#4D4D4D";
const diorioBlack = "#0F0F0F";
const diorioWhite = "#EBEBEB";

const theme = createTheme({
  palette: {
    common: {
      orange: diorioOrange,
      purple: diorioPurple,
      blue: diorioBlue,
      grey: diorioGrey,
      black: diorioBlack,
      white: diorioWhite,
    },
    primary: {
      main: diorioOrange,
    },
    secondary: {
      main: diorioPurple,
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: diorioWhite,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: diorioWhite,
    },
    h1: {
      color: diorioOrange,
    },
    h2: {
      fontSize: '2.5rem',
      color: diorioOrange,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      color: diorioOrange,
      fontWeight: 700,
    },
    h4: {
      color: diorioPurple,
    },
    subtitle1: {
      color: diorioGrey,
      fontWeight: 300,
      fontStyle: "italic"
    },
    body1: {
      color: diorioBlack,
    },
    caption: {
      color: diorioGrey,
    },
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
