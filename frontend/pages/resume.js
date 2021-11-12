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
import SvgIcon from "@mui/material/SvgIcon";

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
  icons: {
    fontSize: 100,
    boxShadow: theme.shadows[10],
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
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#E34F26" }}
                className={classes.icons}
              >
                <title>HTML5</title>
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#1572B6" }}
                className={classes.icons}
              >
                <title>CSS3</title>
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#F7DF1E" }}
                className={classes.icons}
              >
                <title>JavaScript</title>
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </SvgIcon>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#3776AB" }}
                className={classes.icons}
              >
                <title>Python</title>
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#61DAFB" }}
                className={classes.icons}
              >
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#000000" }}
                className={classes.icons}
              >
                <title>Next.js</title>
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#663399" }}
                className={classes.icons}
              >
                <title>Gatsby</title>
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#2F2E8B" }}
                className={classes.icons}
              >
                <title>Strapi</title>
                <path d="M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0023.484 0zm-.5.5L.086 7.607a.251.251 0 00.178.428h6.92zm.5 8.035v7.283c0 .278.224.502.502.502h7.275V9.018c0-.278-.224-.482-.502-.483zm8.277 8.285v6.928c0 .224.271.336.43.178l7.095-7.106z" />
              </SvgIcon>
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
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#FF61F6" }}
                className={classes.icons}
              >
                <title>Adobe XD</title>
                <path d="M18.835.3H5.165A5.165 5.165 0 0 0 0 5.465v13.07A5.165 5.165 0 0 0 5.165 23.7h13.67A5.165 5.165 0 0 0 24 18.535V5.465A5.165 5.165 0 0 0 18.835.3zm-6.106 16.491h-2.287c-.16 0-.274-.006-.338-.113-.215-.419-.43-.835-.644-1.248a45.137 45.137 0 0 0-.684-1.264 66.961 66.961 0 0 1-.717-1.305h-.016a52.7 52.7 0 0 1-.668 1.288c-.23.429-.459.856-.684 1.28A54.85 54.85 0 0 1 6 16.693c-.044.097-.119.107-.227.107H3.568c-.043 0-.067.017-.072-.026a.166.166 0 0 1 .024-.113l3.107-5.105L3.6 6.438c-.033-.043-.038-.078-.016-.107a.115.115 0 0 1 .097-.04h2.27a.36.36 0 0 1 .145.024.292.292 0 0 1 .096.089c.193.43.408.859.644 1.288.236.429.475.853.716 1.272.241.419.464.843.668 1.272h.016c.213-.44.43-.869.652-1.288.222-.419.447-.84.676-1.264.231-.425.453-.847.668-1.264a.246.246 0 0 1 .064-.106.239.239 0 0 1 .129-.024h2.109a.093.093 0 0 1 .112.067.093.093 0 0 1-.031.094l.001.004-2.995 4.943 3.204 5.249c.021.037.026.08.016.121-.01.036-.047.012-.112.023zm7.681-.42a8.02 8.02 0 0 1-1.626.483 8.63 8.63 0 0 1-1.547.145 5.006 5.006 0 0 1-2.149-.45 3.421 3.421 0 0 1-1.506-1.361 4.348 4.348 0 0 1-.548-2.278 4.202 4.202 0 0 1 .548-2.109 4.018 4.018 0 0 1 1.595-1.545 5.139 5.139 0 0 1 2.737-.572c.086.005.188.013.306.024V5.536c0-.075.032-.113.097-.113h2.028a.086.086 0 0 1 .097.073.096.096 0 0 1 0 .024v9.517c0 .183.008.381.024.596.016.214.03.407.04.579a.163.163 0 0 1-.096.159zm-2.457-5.812c.09.009.179.025.266.048v4.395a1.634 1.634 0 0 1-.354.064 4.965 4.965 0 0 1-.419.016 2.656 2.656 0 0 1-.83-.129 1.714 1.714 0 0 1-.676-.402 1.973 1.973 0 0 1-.451-.708 2.83 2.83 0 0 1-.169-1.031 2.217 2.217 0 0 1 .33-1.272c.213-.316.504-.571.845-.741.35-.173.736-.262 1.127-.258.111.002.221.007.331.018z" />
              </SvgIcon>
              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#FF3366" }}
                className={classes.icons}
              >
                <title>Adobe InDesign</title>
                <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z" />
              </SvgIcon>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#FF3366" }}
                className={classes.icons}
              >
                <title>InVision</title>
                <path d="M5.265 15.108a4.715 4.715 0 0 0-.124 1.036c0 1.215.658 2.021 2.058 2.021 1.16 0 2.102-.69 2.78-1.803l-.415 1.661h2.304l1.319-5.28c.329-1.338.966-2.032 1.934-2.032.761 0 1.235.473 1.235 1.255a2.46 2.46 0 0 1-.103.742l-.679 2.427a3.63 3.63 0 0 0-.144 1.03c0 1.151.679 1.996 2.099 1.996 1.214 0 2.182-.781 2.716-2.654l-.905-.35c-.453 1.255-.844 1.482-1.152 1.482-.308 0-.474-.206-.474-.618a2.737 2.737 0 0 1 .103-.638l.66-2.366a5.23 5.23 0 0 0 .226-1.5c0-1.771-1.07-2.695-2.368-2.695-1.214 0-2.449 1.096-3.066 2.249L13.721 9h-3.518l-.495 1.824h1.648l-1.014 4.055c-.797 1.77-2.26 1.799-2.443 1.758-.302-.068-.494-.183-.494-.576a3.847 3.847 0 0 1 .144-.942l1.544-6.124H5.184l-.493 1.824h1.625zm2.902-7.385a1.38 1.38 0 1 0-1.4-1.38 1.384 1.384 0 0 0 1.4 1.38zM0 0h24v24H0Z" />
              </SvgIcon>

              <Paper
                style={{
                  width: 100,
                  height: 100,
                  boxShadow: theme.shadows[10],
                  borderRadius: 0,
                }}
              >
                <img
                  src="/assets/muralco-icon.svg"
                  style={{ width: 100, height: 100 }}
                />
              </Paper>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#F05032" }}
                className={classes.icons}
              >
                <title>Git</title>
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </SvgIcon>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#181717" }}
                className={classes.icons}
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </SvgIcon>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#007ACC" }}
                className={classes.icons}
              >
                <title>Visual Studio Code</title>
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
              </SvgIcon>

              <SvgIcon
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#F24E1E" }}
                className={classes.icons}
              >
                <title>Figma</title>
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </SvgIcon>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
