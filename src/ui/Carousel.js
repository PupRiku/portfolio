import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import theme from "./theme";

export default function Carousel(props) {
  const theme = useTheme();
  const { backgroundImage, height } = props.content;

  const useStyles = makeStyles(theme => ({
    slide: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 5,
      height: height,
      width: 800,
      boxShadow: theme.shadows[10],
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.slide} />
  );
}
