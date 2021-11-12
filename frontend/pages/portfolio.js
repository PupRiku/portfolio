import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function Portfolio() {
  return (
    <Grid container>
      <Head>
        <title key="title">
          Project Portfolio | Chris Diorio
        </title>
      </Head>
      <p>Portfolio</p>
    </Grid>
  );
}