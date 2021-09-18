import React from "react";
import Head from "next/head";
import Typography from "@material-ui/core/Typography";

import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Blog({ posts }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Head>
        <title key="title">A Look Into My Life - Blog | Chris Diorio</title>
      </Head>
      <Typography variant="h2">Blog</Typography>
    </React.Fragment>
  );
}
