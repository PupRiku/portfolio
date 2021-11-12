import React from "react";
import Head from "next/head";
import Typography from "@mui/material/Typography";

export default function Blog() {

  return (
    <React.Fragment>
      <Head>
        <title key="title">A Look Into My Life - Blog | Chris Diorio</title>
      </Head>
      <Typography variant="h2">Blog</Typography>
    </React.Fragment>
  );
}
