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
      color: "#B00020",
    },
  },
  typography: {
    h1: {
      color: diorioOrange,
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
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    type: "dark",
  },
});

export const lightTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    type: "light",
  },
});

export default theme;
