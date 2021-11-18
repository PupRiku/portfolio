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
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

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
    boxShadow: theme.shadows[10],
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.common.white,
    minWidth: 245,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.purple,
      fontWeight: 700,
    },
  },
  apps: {
    width: 100,
    height: 100,
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
          style={{ marginTop: "5em", marginBottom: "5em" }}
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
                    . Dynamic leader with a track record in developing and
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
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item>
            <Typography variant="h2" className={classes.header}>
              Areas of Expertise
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "1.5em" }}
          >
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Paper className={classes.expertiseItem}>
                Project Management
              </Paper>
              <Paper className={classes.expertiseItem}>UX Design</Paper>
              <Paper className={classes.expertiseItem}>
                Accessibility Testing
              </Paper>
            </Stack>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "1.5em" }}
          >
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Paper className={classes.expertiseItem}>
                Persona & Scenario Development
              </Paper>
              <Paper className={classes.expertiseItem}>User Research</Paper>
              <Paper className={classes.expertiseItem}>Prototyping</Paper>
            </Stack>
          </Grid>
          <Grid item container direction="row" justifyContent="center">
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Paper className={classes.expertiseItem}>
                Storyboards & Wireframes
              </Paper>
              <Paper className={classes.expertiseItem}>Usability Testing</Paper>
              <Paper className={classes.expertiseItem}>QA Testing</Paper>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item>
            <Typography variant="h2" className={classes.header}>
              Technical Proficiencies
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item>
            <Typography variant="h3">Programming & Scripting</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "1.5em" }}
          >
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Tooltip title="HTML 5" arrow>
                <img
                  src="assets/HTML5.svg"
                  alt="html5 logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="CSS 3" arrow>
                <img
                  src="assets/CSS3_logo.svg"
                  alt="css3 logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Javascript" arrow>
                <img
                  src="assets/javascript.svg"
                  alt="javascript logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Python" arrow>
                <img
                  src="assets/Python-logo.svg"
                  alt="python logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="React" arrow>
                <img
                  src="assets/reactjs-icon.svg"
                  alt="react js logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Next.js" arrow>
                <img
                  src="assets/next-js.svg"
                  alt="next js logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Gatsby" arrow>
                <img
                  src="assets/Gatsby.svg"
                  alt="gatsby logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Strapi" arrow>
                <img
                  src="assets/strapi.svg"
                  alt="strapi logo"
                  className={classes.apps}
                />
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item>
            <Typography variant="h3">Tools</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "1.5em" }}
          >
            <Stack
              direction="row"
              spacing={4}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Tooltip title="Adobe XD" arrow>
                <img
                  src="assets/adobexd.svg"
                  alt="adobe xd logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Adobe InDesign" arrow>
                <img
                  src="assets/indesign.svg"
                  alt="adobe indesign logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="InVision" arrow>
                <img
                  src="assets/invision.svg"
                  alt="invision logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Mural" arrow>
                <img
                  src="/assets/muralco-icon.svg"
                  alt="mural logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Git" arrow>
                <img
                  src="/assets/git.svg"
                  alt="git logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="GitHub" arrow>
                <img
                  src="/assets/github-icon.svg"
                  alt="github logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Visual Studio Code" arrow>
                <img
                  src="/assets/vscode.svg"
                  alt="visual studio code logo"
                  className={classes.apps}
                />
              </Tooltip>
              <Tooltip title="Figma" arrow>
                <img
                  src="/assets/Figma-logo.svg"
                  alt="figma logo"
                  className={classes.apps}
                />
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
