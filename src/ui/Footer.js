import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "33em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(1)}
                href="/about"
                className={classes.link}
              >
                About Me
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                href="/process"
                className={classes.link}
              >
                My Process
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                href="/process"
                className={classes.link}
              >
                Philosophy
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(3);
                }}
                href="/experience"
                className={classes.link}
              >
                My Experience
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setExperienceIndex(0);
                }}
                href="/resume"
                className={classes.link}
              >
                Resumé
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setExperienceIndex(1);
                }}
                href="/portfolio"
                className={classes.link}
              >
                Project Portfolio
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setExperienceIndex(2);
                }}
                href="/presentations"
                className={classes.link}
              >
                Presentations
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(4);
                  props.setLifeIndex(0);
                }}
                href="/life"
                className={classes.link}
              >
                My Life
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(4);
                  props.setLifeIndex(1);
                }}
                href="/theater"
                className={classes.link}
              >
                Theater Work
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(4);
                  props.setLifeIndex(2);
                }}
                href="/blog"
                className={classes.link}
              >
                Blog
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(5)}
                href="/contact"
                className={classes.link}
              >
                Contact Me
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="purple and cyan decorative slash"
        src="/assets/footerAdornment.png"
        className={classes.adornment}
      />
    </footer>
  );
}
