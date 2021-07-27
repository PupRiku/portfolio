import { createTheme } from "@material-ui/core/styles";

const diorioOrange = "#C16200";
const diorioBlue = "#00546E";
const diorioGrey = "#4D4D4D";
const diorioBlack = "#0F0F0F";
const diorioWhite = "#EBEBEB";

const theme = createTheme({
  palette: {
    common: {
      orange: `${diorioOrange}`,
      blue: `${diorioBlue}`,
    },
    primary: {
      main: `${diorioOrange}`,
    },
    secondary: {
      main: `${diorioBlue}`,
    },
    error: {
      main: "#B00020",
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    h1: {
      color: diorioBlack,
    },
    h2: {
      color: diorioOrange,
    },
    subtitle: {
      color: diorioGrey,
    },
    p: {
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
