import React from "react";
import Link from "../Link";
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "33em",
    verticalAlign: "bottom",
    [theme.breakpoints.down('lg')]: {
      width: "21em",
    },
    [theme.breakpoints.down('sm')]: {
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
    marginLeft: "3em",
    marginTop: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down('sm')]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down('sm')]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden lgDown>
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
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1536.19 662.26"
        className={classes.adornment}
      >
        <title>footerAdornment</title>
        <g>
          <path
            d="M277,346q-512.74,0-1025.5.09c-3.75,0-4.6-.84-4.59-4.59q.15-326.5,0-653c0-3.75.84-4.59,4.59-4.59q729.75.15,1459.5.09-26.14,39.87-52.3,79.75Q605.14-154.62,551.54-73L402.74,153.72q-48,73.1-96,146.19C296.76,315.21,286.3,330.23,277,346Z"
            transform="translate(753.09 316.16)"
            style={{ fill: "#40356f" }}
          />
          <path
            d="M783-314q-19.75,30-39.49,60.08Q668.11-138.49,592.75-23,530.89,71.72,469.08,166.5L352,346H277c9.3-15.77,19.76-30.79,29.78-46.09q47.89-73.14,96-146.19L551.54-73q53.58-81.63,107.16-163.26Q684.88-276.12,711-316q34.5,0,69,0C781.27-316,783.61-317.09,783-314Z"
            transform="translate(753.09 316.16)"
            style={{ fill: "#69e8f4" }}
          />
        </g>
      </svg>
    </footer>
  );
}
