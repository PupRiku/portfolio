import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import Link from "../src/Link";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.25rem",
    },
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
  philosophyInnerCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 10,
    maxWidth: 265,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#d2c7ff",
      WebkitTransition: "all .25s ease-in-out",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 200,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 100,
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
  media: {
    height: 431,
    width: 451,
  },
}));

export default function Process() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          UX and Development Process and Philosophy | Chris Diorio
        </title>
        <meta
          name="description"
          key="description"
          content="Get a deeper dive into Chris Diorio's design process and philosophy when designing applications!"
        />
        <meta
          property="og:title"
          content="UX and Development Process and Philosophy | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/process"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/process"
        />
      </Head>
      <Grid item md style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Typography variant="h1" align="center" className={classes.title}>
          Process & Philosophy
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          style={{ height: "50em" }}
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
                <Grid item style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                  <Typography align="center">
                    I am a user experience designer that enjoys thinking outside
                    the box for unique and engaging solutions. My philosophy to
                    user experience design includes the following points:
                  </Typography>
                </Grid>
                <Grid container direction="row">
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="There’s no such thing as a dumb question."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I enjoy hearing other people’s stories and learning as
                          much as I can. You can't really learn unless you ask
                          and even the smallest question can give you more
                          information than some of the more obvious ones. So, I
                          don't hold back when asking for more detail.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Celebrate success; Embrace failure."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          We should all be happy when a project is successful,
                          but we shouldn't let failure deter us from our goal.
                          In fact, I have found that some of my biggest failures
                          helped make the product, and myself, even stronger.
                          I'm not afraid to fail and I'm more excited about what
                          I will learn.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card raised="true" className={classes.philosophyInnerCard}>
                      <CardHeader
                        title="You can’t spell functional without “fun”."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I'm a very outgoing person who doesn't try to take
                          life too seriously. I feel by injecting a little bit
                          of that into my work makes the user experience even
                          more enjoyable. So, why not have a little fun with
                          your design; it doesn't have to be all business all
                          the time.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div
            style={{
              backgroundImage: `url('/assets/philosophyBackground.webp')`,
            }}
            className={classes.philosophyBackground}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          style={{ height: "100em" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card className={classes.philosophyCard}>
            <CardHeader
              title="My Process"
              style={{
                textAlign: "center",
                paddingLeft: 0,
                paddingRight: 0,
              }}
              titleTypographyProps={{ variant: "h2" }}
            />
            <Grid item container justifyContent="center">
              <CardMedia
                className={classes.media}
                image="/assets/process.webp"
                title="Graph defining the design process"
              />
            </Grid>
            <CardContent
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Grid
                item
                container
                style={{
                  paddingLeft: matchesSM ? "1em" : "5em",
                  paddingRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Grid container direction="row">
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Research"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I am driven by other people’s excitement for a product
                          or feature. Additionally, I love to hear people’s
                          stories and what their likes, ambitions, and ideas
                          are. My process always begins with user research. This
                          includes user interviews and surveys to gauge the
                          potential user’s current frustrations, inspirations,
                          and needs for a system.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Define"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          From my research, I can narrow down and define the
                          problem. Part of this process includes creating user
                          personas based off of the data I collected. I also use
                          these personas to create journey maps and storyboards
                          for both the current and ideal process.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card raised="true" className={classes.philosophyInnerCard}>
                      <CardHeader
                        title="Design"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          We live in a digitized world, but my design process
                          always begins with trusty pencil and paper sketches.
                          Those sketches are then converted digitally. These
                          become lo-fi designs and prototypes (currently
                          utilizing Adobe XD) which allows for initial testing
                          with users. These designs are iterated on for fidelity
                          until a proper look and feel is reached.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container direction="row" style={{ marginTop: "1em" }}>
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Test"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          This is where I find one of the most important parts
                          in my process. Now it’s time to get what I designed
                          into hands of potential users. My preference is for my
                          testing to be in-person, as I feel the emotional
                          reactions I get from user tests can be even more
                          useful than any usage data or survey responses. I aim
                          for diversity in my testers, from different
                          backgrounds and experiences. The results from my
                          testing will help inform any design changes and
                          adjustments in direction.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card
                      raised="true"
                      className={classes.philosophyInnerCard}
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Launch"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          While many see the launch of a product see it as
                          “done”, I never do. The launch of a product for me
                          gets even more test data to use to continue to iterate
                          and improve the product further.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card raised="true" className={classes.philosophyInnerCard}>
                      <CardHeader
                        title="Iterate"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I am always open to suggestions, improvements, and
                          recommendations, so my designs are always evolving. My
                          test results continue to inform designs and I’m never
                          “done” with a project. I continue to return to the
                          design step with new data and ideas to improve my work
                          even further constantly.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div
            style={{
              backgroundImage: `url('/assets/processBackground.webp')`,
            }}
            className={classes.philosophyBackground}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
