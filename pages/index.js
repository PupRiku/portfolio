import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Chris Diorio - UX Designer and Front-End Developer
        </title>
      </Head>
      <Grid item>
        <p>Home Page</p>
      </Grid>
    </Grid>
  );
}
