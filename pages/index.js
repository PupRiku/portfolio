import React, { useState, useEffect } from "react";
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
import Carousel from "../src/ui/Carousel";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Slide from "@material-ui/core/Slide";
import theme from "../src/ui/theme";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "6em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginRight: 25,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  heroText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "3.5em",
    color: theme.palette.common.purple,
  },
  heroImage: {
    maxHeight: 300,
    marginLeft: 25,
    borderRadius: 30,
    boxShadow: theme.shadows[10],
  },
  introText: {
    fontSize: "1.25em",
    fontWeight: 300,
  },
  philosophyBackground: {
    backgroundImage: `url('/assets/philosophyBackground.jpeg')`,
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
}));

const Arrow = props => {
  const classes = useTheme();
  const { direction, clickFunction } = props;
  const icon =
    direction === "left" ? (
      <ChevronLeftIcon fontSize="large" color={theme.palette.common.white} />
    ) : (
      <ChevronRightIcon fontSize="large" color={theme.palette.common.white} />
    );

  return (
    <Button
      variant="contained"
      onClick={clickFunction}
      disableRipple
      disableElevation
      style={{
        margin: "2em",
        backgroundColor: theme.palette.common.orange,
        color: theme.palette.common.white,
        borderRadius: 5,
        padding: 10,
      }}
    >
      {icon}
    </Button>
  );
};

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const SLIDE_INFO = [
    { backgroundImage: "/assets/carousel03.jpg", height: 623 },
    { backgroundImage: "/assets/carousel02.jpg", height: 517 },
    { backgroundImage: "/assets/carousel01.png", height: 450 },
    { backgroundImage: "/assets/carousel04.jpg", height: 499 },
    { backgroundImage: "/assets/carousel05.jpg", height: 450 },
  ];

  const content = SLIDE_INFO[slideIndex];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = direction => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (slideIndex + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setSlideIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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
          direction="row"
        >
          <Grid item className={classes.heroTextContainer} md style={{marginLeft: '20em'}}>
            <Typography align="right" className={classes.heroText}>
              User Experience Designer.
              <br />
              Front-End Developer.
              <br />
              All-Around Nerd.
            </Typography>
          </Grid>
          <Grid item md>
            <img src="/assets/Chris.jpg" className={classes.heroImage} />
          </Grid>
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
              Hello! My name is Chris Diorio and welcome to my website! Feel
              free to take a look around, learn more about me, check out what
              I've made, and get in touch for opportunities large and small.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: "5em" }}
        >
          <Grid item>
            <Arrow
              direction="left"
              clickFunction={() => onArrowClick("left")}
            />
          </Grid>
          <Grid item>
            <Slide in={slideIn} direction={slideDirection}>
              <div>
                <Carousel content={content} />
              </div>
            </Slide>
          </Grid>
          <Grid item>
            <Arrow
              direction="right"
              clickFunction={() => onArrowClick("right")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
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
              }}
              titleTypographyProps={{ variant: "h2" }}
            />
            <CardContent>
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
                style={{ paddingLeft: "5em", paddingRight: "5em" }}
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
          <div className={classes.philosophyBackground} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Typography>About, experience, contact</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
