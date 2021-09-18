import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

export default function Presentations() {
  return (
    <Grid container>
      <Head>
        <title key="title">
          Conference Presentaions & Educational Sessions | Chris Diorio
        </title>
      </Head>
      <p>Presentations</p>
    </Grid>
  );
}