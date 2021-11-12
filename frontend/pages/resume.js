import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    },
  },
  heroImage: {
    marginLeft: 0,
    borderRadius: 30,
    boxShadow: theme.shadows[10],
  },
  inlineLink: {
    color: theme.palette.common.orange,
    fontWeight: 400,
    WebkitTransition: "all .1s ease-in-out",
    "&:hover": {
      color: theme.palette.common.purple,
      fontWeight: 700,
    },
  },
  title: {
    [theme.breakpoints.down("md")]: {
      fontSize: "4.25rem",
    },
  },
  header: {
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
  },
  resumeButton: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.1rem",
    paddingLeft: 25,
    paddingRight: 25,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  highlight: {
    color: theme.palette.common.purple,
    fontWeight: 700,
  },
  summaryCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    maxWidth: 1300,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 800,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 500,
    },
  },
  expertiseItem: {
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.secondary,
  },
}));

export default function Resume() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">Résumé | Chris Diorio</title>
        <meta
          name="description"
          key="description"
          content="Learn more about Chris Diorio's work and education experience in his resume!"
        />
        <meta
          property="og:title"
          content="Résumé | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/resume"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/resume"
        />
      </Head>
      <Grid item md style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Typography variant="h1" align="center" className={classes.title}>
          Chris's Résumé
        </Typography>
        <Grid item container style={{ marginBottom: "5em", marginTop: "2em" }}>
          <Grid item container justifyContent="center">
            <Grid item>
              <Button
                component={Link}
                href="/files/chris_diorio_resume.pdf"
                target="_blank"
                variant="contained"
                className={classes.resumeButton}
              >
                Download my résumé (.pdf)
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ height: "5em" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card className={classes.summaryCard}>
            <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Grid
                item
                container
                style={{
                  paddingLeft: matchesSM ? "1em" : "3em",
                  paddingRight: matchesSM ? "1em" : "3em",
                }}
              >
                <Grid item>
                  <Typography variant="body1" align="center">
                    Goal driven and ambitious{" "}
                    <span className={classes.highlight}>UX Design</span>{" "}
                    professional with extensive experience across{" "}
                    <span className={classes.highlight}>QA</span> and{" "}
                    <span className={classes.highlight}>usability testing</span>
                    . Dynamic leader with track record in developing and
                    directing{" "}
                    <span className={classes.highlight}>high-performing</span>{" "}
                    teams to drive{" "}
                    <span className={classes.highlight}>innovation</span> using
                    creative methods. Compelling communicator well versed in{" "}
                    <span className={classes.highlight}>
                      engaging key stakeholders, collaborating
                      cross-functionally, and coaching junior members
                    </span>
                    . Strong aptitude for leveraging{" "}
                    <span className={classes.highlight}>
                      innovative thinking
                    </span>{" "}
                    across various projects while driving{" "}
                    <span className={classes.highlight}>
                      user-focused experiences
                    </span>
                    .
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
