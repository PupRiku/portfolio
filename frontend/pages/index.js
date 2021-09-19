import React, { useState } from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { Hidden } from "@material-ui/core";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "4em",
    marginRight: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  heroText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.25em",
    color: theme.palette.common.orange,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75em",
    },
  },
  heroImage: {
    marginLeft: 0,
    borderRadius: 30,
    boxShadow: theme.shadows[10],
  },
  introText: {
    fontSize: "1.25em",
    fontWeight: 300,
  },
  philosophyBackground: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  philosophyCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    maxWidth: 1000,
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      maxWidth: 800,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
  philosophyText: {
    color: theme.palette.common.white,
    fontSize: "1.25em",
    fontWeight: 300,
  },
  philosophyButton: {
    marginTop: "2em",
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    height: 35,
    padding: 10,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  portfolioArrows: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.white,
    borderRadius: 10,
    padding: "14px 14px",
    marginLeft: "2em",
    marginRight: "2em",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  portfolioButton: {
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
  greyImage: {
    filter: "gray",
    WebkitFilter: "grayscale(1)",
    WebkitTransition: "all .5s ease-in-out",
    zIndex: "auto",
    "&:hover": {
      filter: "none",
      zIndex: 10,
      WebkitFilter: "grayscale(0)",
      transform: "scale(1.05)",
      boxShadow: theme.shadows[10],
    },
  },
  titleContainer: {
    marginBottom: "10em",
  },
  highlight: {
    color: theme.palette.common.purple,
    fontWeight: 700,
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const [aboutHover, setAboutHover] = useState(false);
  const [lifeHover, setLifeHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  
  const placeholder = (
    <div style={{width: matchesMD ? 225 : matchesXS ? 200 : 300,
    height: matchesMD ? 263 : matchesXS ? 234 : 351}} />
  )

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Chris Diorio - UX Designer and Front-End Developer
        </title>
        <meta
          name="description"
          key="description"
          content="Welcome to the website for Chris Diorio's portfolio, resumé, and more. Learn more about his philosophy and process and get in contact with him!"
        />
        <meta
          property="og:title"
          content="Chris Diorio - UX Designer and Front-End Developer"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net"
        />
      </Head>
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            className={classes.heroTextContainer}
            md={6}
            style={{
              marginLeft: matchesSM ? 0 : undefined,
              marginRight: matchesSM ? 0 : undefined,
            }}
          >
            <Hidden mdUp>
              <Grid container justifyContent="center">
                <Grid item>
                  <LazyLoadImage
                    src="/assets/Chris.webp"
                    width={matchesMD ? 225 : matchesXS ? 200 : 300}
                    height={matchesMD ? 263 : matchesXS ? 234 : 351}
                    className={classes.heroImage}
                  />
                </Grid>
              </Grid>
            </Hidden>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Typography
                  align={matchesSM ? "center" : "right"}
                  className={classes.heroText}
                >
                  User Experience Designer.
                  <br />
                  Front-End Developer.
                  <br />
                  All-Around Nerd.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md>
              <LazyLoadImage
                src="/assets/Chris.webp"
                width={matchesMD ? 225 : matchesXS ? 200 : 300}
                height={matchesMD ? 263 : matchesXS ? 234 : 351}
                className={classes.heroImage}
                placeholder={placeholder}
                effect='blur'
              />
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "2em" }}
        >
          <Grid item style={{ maxWidth: 750 }}>
            <Typography className={classes.introText} align="center">
              Hello! My name is{" "}
              <span className={classes.highlight}>Chris Diorio</span> and
              welcome to my website! Feel free to take a look around, learn more
              about me, check out what I've made, and get in touch for
              opportunities large and small.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "5em", marginTop: "5em" }}
      >
        <Grid item container justifyContent="center">
          <Grid item>
            <Button
              component={Link}
              href="/process"
              variant="contained"
              className={classes.portfolioButton}
            >
              See my entire portfolio
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          style={{ height: "35em" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card className={classes.philosophyCard}>
            <CardHeader
              title="My Philosophy"
              style={{
                textAlign: "center",
                paddingLeft: 0,
                paddingRight: 0,
              }}
              titleTypographyProps={{ variant: "h2" }}
            />
            <CardContent
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Grid item container justifyContent="center">
                <Grid item>
                  <Typography variant="subtitle1" align="center">
                    “Ambition is not what one would do, but what one does, for
                    ambition without action is fantasy.”
                  </Typography>
                </Grid>
              </Grid>
              <br />
              <Grid
                item
                container
                style={{
                  paddingLeft: matchesSM ? "1em" : "5em",
                  paddingRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Grid item>
                  <Typography align="center">
                    When it comes to most ambitions, this quote falls true.
                    However, what about those of us whose ambition is fantasy?
                    For me, this is who I am. I am a designer who lives in
                    fantasy. Whether it is the graphical designs I produce, the
                    characters I portray on stage, or the stories I envision in
                    games, fantasy is my reality.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item>
                  <Button
                    component={Link}
                    href="/process"
                    variant="contained"
                    className={classes.philosophyButton}
                  >
                    Learn more about my philosophy and process
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <LazyLoadComponent visibleByDefault="true">
            <div
              style={{
                backgroundImage: `url('/assets/philosophyBackground.webp')`,
              }}
              className={classes.philosophyBackground}
            />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid
          container
          style={{
            marginTop: "5em",
            marginBottom: "2em",
            maxWidth: matchesXS ? 300 : matchesSM ? 525 : 900,
          }}
        >
          <Grid item className={classes.greyImage}>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/about"
              disableRipple
              onMouseOver={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <LazyLoadImage
                src="/assets/hearNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </Grid>
          <Grid item className={classes.greyImage}>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/life"
              disableRipple
              onMouseOver={() => setLifeHover(true)}
              onMouseLeave={() => setLifeHover(false)}
            >
              <LazyLoadImage
                src="/assets/seeNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </Grid>
          <Grid item className={classes.greyImage}>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/contact"
              disableRipple
              onMouseOver={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <LazyLoadImage
                src="/assets/speakNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid
          container
          style={{ width: matchesXS ? 300 : matchesSM ? 525 : 900 }}
          className={classes.titleContainer}
        >
          <Grid item xs={4}>
            <Typography
              variant={aboutHover ? "h3" : "subtitle1"}
              align="center"
            >
              About Me
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={lifeHover ? "h3" : "subtitle1"} align="center">
              My Life
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant={contactHover ? "h3" : "subtitle1"}
              align="center"
            >
              Contact Me
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
