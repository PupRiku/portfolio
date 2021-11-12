import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function Theater() {
  return (
    <Grid container>
      <Head>
        <title key="title">
          Theater Experiences & Work | Chris Diorio
        </title>
      </Head>
      <p>Theater</p>
    </Grid>
  );
}