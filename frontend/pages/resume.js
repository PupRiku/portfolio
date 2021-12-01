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
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  accordionTitle: {
    flexShrink: 0,
    margin: "auto",
  },
  accordionContent: {
    maxWidth: "77.5em",
  },
  accordionStyle: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[10],
  },
  eduCard: {
    minWidth: "35em",
    marginLeft: "1em",
    marginRight: "1em",
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.common.white,
  },
  presentationCard: {
    minWidth: "25em",
    marginLeft: "1em",
    marginRight: "1em",
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.common.white,
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
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item>
            <Typography variant="h2" className={classes.header}>
              Experience Highlights
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "2em" }}
        >
          <Grid item style={{ marginBottom: "2em" }}>
            <Accordion className={classes.accordionStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exp1-content"
                id="exp1-header"
              >
                <Typography
                  variant="h4"
                  className={classes.accordionTitle}
                  style={{ width: "20em" }}
                >
                  University of Wisconsin - Madison
                  <br />
                  Madison, WI
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.accordionTitle}
                  style={{ width: "30em" }}
                >
                  Coordinator of Digital Services | Application Administrator II
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  className={classes.accordionTitle}
                  style={{ marginRight: "1em", width: "20em" }}
                >
                  2018 - Present
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  className={classes.accordionContent}
                >
                  Orchestrate technology and applications as administrator and
                  functional lead of four enterprise-level systems for
                  UW-Madison’s Student Orientation, Advising, and Registration
                  (SOAR) program. Drive innovation through researching,
                  recommending, and implementing technology and application
                  resources including Guidebook, Starfish, and Salesforce.
                  Facilitate L1 and L2 tech support, acting as key liaison
                  between IT services and Center for the First-Year Experience
                  (CFYE). Guide and mentor an undergraduate intern assisting
                  technology function of SOAR program and related applications.
                  Ensure streamlined operations across all SOAR session
                  programs, supporting staff as well as answering student and
                  parent questions.
                  <br />
                  <ul>
                    <li>
                      Spearheaded development and improvement initiatives for
                      four enterprise systems: SOAR Reservation System, SOAR
                      Advising Module (SAM), Preparing for SOAR, and New Student
                      To-Do List, used by{" "}
                      <span className={classes.highlight}>thousands</span> of
                      students and{" "}
                      <span className={classes.highlight}>hundreds</span> of
                      staff members.
                    </li>
                    <li>
                      Functional project lead on creation of new student portal
                      to curate and centralize applications as well as
                      communications with students during transition into
                      UW-Madison.
                    </li>
                    <li>
                      Directed redesign and redevelopment of SOAR Reservation
                      System as well as SOAR Advising Module, utilizing
                      innovative technology to address evolving growth and needs
                      of SOAR program.
                    </li>
                    <li>
                      Managed streamlined transition from in-person orientation
                      programs to online programs during COVID-19 pandemic.
                    </li>
                    <li>
                      Recognized as Outstanding New OTR (Orientation,
                      Transition, and Retention) Professional by Region V of
                      NODA (Association for Orientation, Transition, and
                      Retention Professionals in Higher Education) in 2020.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <Accordion className={classes.accordionStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exp1-content"
                id="exp1-header"
              >
                <Typography
                  variant="h4"
                  className={classes.accordionTitle}
                  style={{ width: "20em" }}
                >
                  University of Wisconsin - Madison
                  <br />
                  Madison, WI
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.accordionTitle}
                  style={{ width: "30em" }}
                >
                  Graduate Certificate in User Experience Design Student
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  className={classes.accordionTitle}
                  style={{ marginRight: "1em", width: "20em" }}
                >
                  2019 - 2020
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  className={classes.accordionContent}
                >
                  Successfully completed program with design and development of
                  robust prototype, including market and user research, persona
                  development, as well as low and high-fidelity designs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <Accordion className={classes.accordionStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exp1-content"
                id="exp1-header"
              >
                <Typography
                  variant="h4"
                  className={classes.accordionTitle}
                  style={{ width: "20em" }}
                >
                  Raven Software
                  <br />
                  Middleton, WI
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.accordionTitle}
                  style={{ width: "30em" }}
                >
                  Senior Quality Assurance Tester
                  <br />
                  Quality Assurance Tester
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  className={classes.accordionTitle}
                  style={{ marginRight: "1em", width: "20em" }}
                >
                  2017 - 2018
                  <br />
                  2014 - 2017
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  className={classes.accordionContent}
                >
                  Managed team of testers through development milestones and
                  releases of software for various video games. Developed test
                  cases, content sweeps, and milestone test plans, collaborating
                  with production teams on deadline and project requirements.
                  Tested pre-release video games to verify functionality, data
                  content, performance, usability/playability, as well as
                  hardware/software compatibility. Produced detailed
                  documentation on defects utilizing DevTrack and Jira,
                  distributing findings and actions to design teams.
                  <br />
                  <ul>
                    <li>
                      Significantly contributed to successful launches of{" "}
                      <span className={classes.highlight}>six</span> AAA video
                      games in the <em>Call of Duty</em> franchise, providing
                      key insights on designs and functions developed.
                    </li>
                    <li>
                      Successfully slashed required team overtime by{" "}
                      <span className={classes.highlight}>50</span>% by
                      leveraging strategic time management and creating test
                      plans for first time success.
                    </li>
                    <li>
                      Headed continuous QA support for ongoing video games with{" "}
                      <span className={classes.highlight}>millions</span> of
                      players worldwide, including China-only Free to Play
                      version called <em>Call of Duty Online</em> with new
                      content and updates released monthly.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <Accordion className={classes.accordionStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exp1-content"
                id="exp1-header"
              >
                <Typography
                  variant="h4"
                  className={classes.accordionTitle}
                  style={{ width: "20em" }}
                >
                  Vicarious Visions
                  <br />
                  Menands, NY
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.accordionTitle}
                  style={{ width: "30em" }}
                >
                  Senior Quality Assurance Tester
                  <br />
                  Quality Assurance Tester
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  className={classes.accordionTitle}
                  style={{ marginRight: "1em", width: "20em" }}
                >
                  2013
                  <br />
                  2012-2013
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  className={classes.accordionContent}
                >
                  Led testing on new video games prior to launch, ensuring all
                  specifications and requirements satisfied. Actively engaged in
                  daily Missions (Levels) Design scrum as well as large
                  production meetings, distributing important information to
                  team. Managed evaluation of game reporting metrics
                  functionality as well as play testing feedback videos and
                  reports for further fixes and improvements. Identified issues
                  and ran debugging programs to ensure resolution. Recorded all
                  defects, creating and distributing reports outlining defects
                  and processes followed to fix defects. Leveraged knowledge and
                  expertise to assist software developers in early development
                  stages, highlighting potential issues, assessing risks, and
                  resolving issues before launch.
                  <br />
                  <ul>
                    <li>
                      Spearheaded development of onboarding program for{" "}
                      <span className={classes.highlight}>20</span> incoming
                      employees, increasing speed with which new employees
                      understood tools and procedures for seamless transitions
                      into roles.
                    </li>
                    <li>
                      Promoted to Senior QA Tester within three months due to
                      outstanding work ethic, fast-learning capabilities, and
                      leveraging creative thinking with testing.
                    </li>
                    <li>
                      Actively engaged in successful AAA title launch within the{" "}
                      <em>Skylanders</em> franchise, ensuring player quality and
                      functionality expectations met before launch.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item>
            <Accordion
              style={{
                backgroundColor: theme.palette.common.white,
                boxShadow: theme.shadows[10],
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="exp1-content"
                id="exp1-header"
              >
                <Typography
                  variant="h4"
                  className={classes.accordionTitle}
                  style={{ width: "20em" }}
                >
                  Rensselaer Polytechnic Institute
                  <br />
                  Troy, NY
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.accordionTitle}
                  style={{ width: "30em" }}
                >
                  Human-Computer Interaction Masters Student
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  className={classes.accordionTitle}
                  style={{ marginRight: "1em", width: "20em" }}
                >
                  2009 - 2012
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  className={classes.accordionContent}
                >
                  Learned innovative industry theories and procedures utilized
                  globally in design and software implementation, with
                  coursework in human-computer interaction combined with theory
                  in allied areas such as technical communication, human
                  factors, information design, cognitive science, and computer
                  science. of Cognitive Modeling and Technical Communication.
                  Researched and analyzed topics covered in lectures in order to
                  acquire better understanding of concepts for application after
                  graduation. Explored fundamental topics, including User
                  Experience Design, Interactive Data Visualization, Information
                  Design, User Experience Methods, and Interface Design.
                  Performed research, led presentations, and designed and
                  managed group projects.
                  <br />
                  <ul>
                    <li>
                      Recipient of Founders Award for Excellence in Fall of
                      2011.
                    </li>
                    <li>
                      Membership Chair for RPI Players from Fall 2010 to Spring
                      2011.
                    </li>
                    <li>
                      Student Orientation Coordinator, Summer 2009: Led and
                      supervised team of student advisors to facilitate RPI’s
                      Orientation programs.
                    </li>
                    <li>
                      Acted as Peer Advisor for Games and Simulation Arts and
                      Sciences Undergraduate Students.
                    </li>
                    <li>
                      Stage Manager, Director, and Publicity Director for
                      various theater shows.
                    </li>
                    <li>Alpha Psi Omega – Theatrical Honor Society Member.</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
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
              Additional Experience
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          style={{ marginBottom: "2em" }}
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">
              Lecturer - Coun Psy 125 - A Wisconsin Experience Seminar
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              University of Wisconsin - Madison | Madison, WI
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
            <Typography variant="h2" className={classes.header}>
              Education
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "2em", marginTop: "2em" }}
          >
            <Grid item>
              <Card className={classes.eduCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="assets/uwmadison.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    University of Wisconsin - Madison
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    Graduate Certificate in User-Experience Design
                  </Typography>
                  <Typography>Fall 2019 - Summer 2020</Typography>
                  <Typography>Madison, WI</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.eduCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="assets/rpi.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    Rensselaer Polytechnic Institute
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    Master's of Science in Human-Computer Interaction
                  </Typography>
                  <Typography>Fall 2009 - Spring 2012</Typography>
                  <Typography>Troy, NY</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.eduCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image="assets/rpi.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    Rensselaer Polytechnic Institute
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    Bachelor's of Science in Games & Simulation Arts & Sciences
                  </Typography>
                  <Typography>Fall 2007 - Spring 2012</Typography>
                  <Typography>Troy, NY</Typography>
                </CardContent>
              </Card>
            </Grid>
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
              Presentations
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginBottom: "2em", marginTop: "2em" }}
          >
            <Grid item>
              <Card className={classes.eduCard}>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/presentation_gps.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    The New Student GPS:
                    <br />A Digital Experience to Ease Transition
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    NODA Annual Conference | Houston, TX
                  </Typography>
                  <Typography>October 2019</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    component={Link}
                    href="/files/slides_gps.pdf"
                    target="_blank"
                  >
                    Go To Slides
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.eduCard}>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/presentation_sprint.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    SPRINT! Tackle big problems in a week<br />(with  Phyllis Treige, Jess Jones & Tamra Dagnon)
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    IT Professionals Conference | Madison, WI
                  </Typography>
                  <Typography>June 2019</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    component={'a'}
                    href="https://itproconf.wisc.edu/2019/05/24/sprint-tackle-big-problems-in-a-week/"
                    target="_blank"
                  >
                    Go To Listing
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.presentationCard}>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/presentation_no_ux.webp"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.common.purple,
                    }}
                  >
                    No (User) Experience Necessary:
                    <br />
                    Digital Experiences by Non-Designers
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    NODA Region V Conference | Des Moines, IA
                  </Typography>
                  <Typography>March 2019</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    component={Link}
                    href="/files/slides_no_ux.pdf"
                    target="_blank"
                  >
                    Go To Slides
                  </Button>
                </CardActions>
              </Card>
            </Grid>
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
              Awards
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
