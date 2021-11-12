/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Link from "../Link";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    minHeight: "3em",
    marginBottom: "4em",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "4em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    color: "white",
    height: "6em",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      height: "5.25em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    textDecoration: "none",
  },
  button: {
    ...theme.typography.h1,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: "white",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.orange,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
    },
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  expansionSummary: {
    paddingLeft: "0 24px 0 16px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
    backgroundColor: props =>
      props.value === 1 ? "rgba(0,0,0,0.14)" : "inherit",
  },
}));

export default function Header(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openExperience, setOpenExperience] = useState(false);
  const [openLife, setOpenLife] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e, tab) => {
    setAnchorEl(e.currentTarget);
    tab === "experience" ? setOpenExperience(true) : setOpenLife(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    openExperience ? setOpenExperience(false) : setOpenLife(false);
    openExperience ? props.setExperienceIndex(i) : props.setLifeIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    openExperience ? setOpenExperience(false) : setOpenLife(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      openExperience ? setOpenExperience(false) : setOpenLife(false);
    }
  }

  const experienceOptions = [
    {
      name: "Resumé",
      link: "/resume",
      activeIndex: 3,
      selectedIndex: 0,
    },
    {
      name: "Project Portfolio",
      link: "/portfolio",
      activeIndex: 3,
      selectedIndex: 1,
    },
    {
      name: "Presentations",
      link: "/presentations",
      activeIndex: 3,
      selectedIndex: 2,
    },
  ];

  const lifeOptions = [
    {
      name: "Theater Work",
      link: "/theater",
      activeIndex: 4,
      selectedIndex: 0,
    },
    {
      name: "Blog",
      link: "/blog",
      activeIndex: 4,
      selectedIndex: 1,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About Me", link: "/about", activeIndex: 1 },
    { name: "My Process", link: "/process", activeIndex: 2 },
    {
      name: "My Experience",
      link: "/experience",
      activeIndex: 3,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event, "experience"),
    },
    {
      name: "My Life",
      link: "/life",
      activeIndex: 4,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event, "life"),
    },
    { name: "Contact Me", link: "/contact", activeIndex: 5 },
  ];

  const path = typeof window !== "undefined" ? window.location.pathname : null;

  const activeIndex = () => {
    const found = routes.find(({ link }) => link === path);
    const expFound = experienceOptions.find(({ link }) => link === path);
    const lifeFound = lifeOptions.find(({ link }) => link === path);

    if (expFound) {
      props.setValue(3);
      props.setExperienceIndex(expFound.selectedIndex);
    } else if (lifeFound) {
      props.setValue(4);
      props.setLifeIndex(lifeFound.selectedIndex);
    } else if (found === undefined) {
      props.setValue(false);
    } else {
      props.setValue(found.activeIndex);
    }
  };

  useEffect(() => {
    activeIndex();
  }, [path]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
        textColor="inherit"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => {
              setOpenExperience(false);
              setOpenLife(false);
            }}
          />
        ))}
      </Tabs>
      <Popper
        open={openLife}
        anchorEl={anchorEl}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top left",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenLife(true)}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {lifeOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}lf`}
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={event => {
                        handleMenuItemClick(event, i);
                        props.setValue(4);
                        handleClose();
                      }}
                      selected={
                        i === props.selectedIndex &&
                        props.value === 4 &&
                        window.location.pathname !== "/life"
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Popper
        open={openExperience}
        anchorEl={anchorEl}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top left",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenExperience(true)}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {experienceOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}ex`}
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={event => {
                        handleMenuItemClick(event, i);
                        props.setValue(3);
                        handleClose();
                      }}
                      selected={
                        i === props.selectedIndex &&
                        props.value === 3 &&
                        window.location.pathname !== "/experience"
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} style={{ marginTop: "0.5em" }} />
        <List disablePadding>
          {routes.map(route =>
            route.name === "My Experience" ? (
              <Accordion
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <AccordionSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: props.value === 3 ? 3 : null }}
                    onClick={() => {
                      setOpenDrawer(false), props.setValue(route.activeIndex);
                    }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {experienceOptions.map(route => (
                      <Grid item>
                        <ListItem
                          key={`ac${route}${route.experienceIndex}ex`}
                          divider
                          button
                          component={Link}
                          href={route.link}
                          selected={
                            props.experienceIndex === route.experienceIndex &&
                            props.value === 3 &&
                            window.location.pathname !== "/experience"
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setExperienceIndex(route.experienceIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name}
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : route.name === "My Life" ? (
              <Accordion
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <AccordionSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: props.value === 4 ? 4 : null }}
                    onClick={() => {
                      setOpenDrawer(false), props.setValue(route.activeIndex);
                    }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {lifeOptions.map(route => (
                      <Grid item>
                        <ListItem
                          key={`ac${route}${route.lifeIndex}lf`}
                          divider
                          button
                          component={Link}
                          href={route.link}
                          selected={
                            props.lifeIndex === route.lifeIndex &&
                            props.value === 4 &&
                            window.location.pathname !== "/life"
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setLifeIndex(route.lifeIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name}
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={`ac${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                href={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            divider
            button
            component="a"
            href="https://www.linkedin.com/in/cdiorio"
            target="_blank"
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            key="linkedin"
          >
            <svg
              height="4em"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <ListItemText
              className={classes.drawerItem}
              disableTypography
              style={{ marginLeft: "1em" }}
            >
              LinkedIn
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component="a"
            href="https://github.com/PupRiku"
            target="_blank"
            key="github"
          >
            <svg
              height="4em"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <ListItemText
              className={classes.drawerItem}
              disableTypography
              style={{ marginLeft: "1em" }}
            >
              GitHub
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        size="large"
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
              style={{ textDecoration: "none" }}
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2500 662"
                className={classes.logo}
              >
                <title>headerLogo</title>
                <g>
                  <path
                    d="M948,346H-1235V-316H741c-.12.29-.25.82-.36.82-2.26-.09-4.36,1-6.53,1.1-3.85.18-7.23,2.09-11,2.5-4.05.43-7.64,2.47-11.47,3.69a65.33,65.33,0,0,0-14,6c-3.46,2.09-7.07,4-10.49,6.13a149.82,149.82,0,0,0-18.4,13.46c-1.63,1.43-3,3.12-4.63,4.56s-2.57,3.47-4.87,3.91c-.49,2.27-2.44,3.4-3.91,4.86a85.62,85.62,0,0,0-9.5,11.59c-2.71,3.84-5.39,7.73-7.75,11.79-2.24,3.86-4.13,7.94-6,12a66.63,66.63,0,0,0-3.51,8.54c-1.58,5-3.77,9.82-4.69,15.08-.56,3.23-1.27,6.48-2,9.65A75,75,0,0,0,620-181.08a5.63,5.63,0,0,1-.33,2.84,7.12,7.12,0,0,0-.48,6.18c1.33,3.42.49,6.78.82,10.15.37,3.69.68,7.38,1,11.08a1.43,1.43,0,0,0,.12.45c1.86,3.36,1.89,7.22,2.77,10.83a138,138,0,0,0,8,23.2,136.22,136.22,0,0,0,11.63,21.14c4.41,6.51,9.06,13,15,18.33,1.4,1.26,2.11,3.41,3.62,4.42,5.22,3.5,9.18,8.45,14.53,11.87,6.07,3.88,11.84,8.25,18.26,11.53,6.16,3.15,12.59,5.77,19.11,8.72a14.73,14.73,0,0,1-.38,3.11c-2.06,6.14-4.61,12.15-6.22,18.4S703.16-6.35,703,.34c-2.6,5.31-2.28,11.3-3.9,16.87-.65,2.22-.2,4.69-1,7.09-.69,2.2.25,4.83-1.13,7.05.73,5.09-1,10-1,15.08,0,6.66-.11,13.33,0,20s-.71,13.43.9,20.1c.66,2.77-.64,5.87,1.07,8.57-.1,5.32,1.37,10.46,1.86,15.68.44,4.63,2.41,9,2.14,13.66,2,1.43.61,3.88,1.85,5.77,1.11,1.7.6,4.37,1.37,6.4a41.15,41.15,0,0,1,1.82,5.74c.48,2.1,1.3,4.12,2,6.18a261.74,261.74,0,0,0,11,28.95,300,300,0,0,0,20,37.69,317.11,317.11,0,0,0,23.15,31.38c4.82,5.82,10.27,11.13,15.5,16.59,3.34,3.49,6.53,7.23,10.31,10.18,5.32,4.16,10.16,8.86,15.58,12.92,5,3.71,9.87,7.44,15,10.87,4.33,2.87,8.42,6.14,12.89,8.74,4.27,2.49,8.64,4.86,13,7.25,9.9,5.44,20.21,9.93,30.56,14.36,3.11,1.34,6.33,2.44,9.53,3.54,6,2.06,12.16,3.68,18.26,5.44,4.48,1.29,9,2.52,13.51,3.55,4.89,1.1,9.83,2,14.75,3,1.53.32,3,.78,4.59,1,3.66.45,7.34.77,11,1.2C947.79,345.2,947.88,345.72,948,346ZM-294.91,127c22.45,0,44.45.08,66.44,0,11.42-.07,22.92,1,34.17-2,4.22.31,8.17-1.25,12-2.41a103.9,103.9,0,0,0,22.54-9.53A99.63,99.63,0,0,0-137,94.56,96.8,96.8,0,0,0-125.56,79.3a98.38,98.38,0,0,0,8.45-17.52A118,118,0,0,0-112.8,47c1.16-5.25,1.75-10.58,2.61-15.83s.37-10.65.14-16,1.12-10.5-1-15.58c.61-3-1-5.69-1-8.59s-1.36-5.44-2-8.17a89.93,89.93,0,0,0-6-18,102.09,102.09,0,0,0-21.31-30.65,68.6,68.6,0,0,0-5.58-4.61c-4.22-3.32-8.43-6.71-13.21-9.15-7.85-4-15.78-7.62-24.47-9.78-7.28-1.81-14.57-3.48-21.94-3.56C-234.34-93.19-262.17-93-290-93h-4.91ZM-760,126.87c0-28.81.13-57.3-.07-85.78-.07-9.36,1.15-18.77-.88-28.1-.5-2.31-.38-4.7-.87-7.11a149.28,149.28,0,0,0-4-14.85C-768.65-18-775-24-781.62-29.86a29.43,29.43,0,0,0-11.54-5.78A50.88,50.88,0,0,0-806.68-38c-3.67,0-7.34-.15-11,0a35.31,35.31,0,0,0-9,1.25c-3.35,1.08-7.08,1.31-10,3.7-10.7,3.12-17.94,9.73-23,14.32-3.54,3.2-6.24,7.34-9.26,11.11a28.62,28.62,0,0,0-2,3.56V-98.35L-872.5-100c-9.93,0-19.92,0-29.91,0-1.38,0-2.65,0-3.44,1.4-.82,20.89-.46,221.24.37,225.43H-871v-5.15c0-29.5,0-59,0-88.49a23.51,23.51,0,0,1,3.31-11.61c1.51-2.66,2.59-5.95,5.45-7.78,4.59-7.31,11.64-11.85,18.55-16.55,5.74-1.45,10.93-5,17.26-4.27,3.68.43,7.43-.46,11.09,1,6.71,2.69,12,6.73,15.5,13.32,2.81,5.26,3.19,11,4.88,16.49-.75,7.24,1.1,14.35,1.06,21.58-.15,25.5-.06,51-.06,76.49v5ZM-935.66-46.3A63.52,63.52,0,0,0-946.73-63a106.32,106.32,0,0,0-12.46-11.89,98.42,98.42,0,0,0-13.83-9c-3.22-1.79-6.68-3.15-10.07-4.62a54.35,54.35,0,0,0-10.61-3.27c-5.29-1.1-10.61-2.6-16.14-2.17a21.4,21.4,0,0,1-3.49,0c-1.4-.13-2.74.25-4.19-.82-1.71-1.25-3.55.91-5.49.86a81.19,81.19,0,0,0-10,0c-3.25.33-6.42,1.54-9.68,1.87a51.85,51.85,0,0,0-16.11,4.59c-7.46,3.4-15.17,6.58-21.47,12.17-1.5,1.33-3.54,2-5.09,3.33-3.38,2.81-6.69,5.72-9.87,8.76a52.48,52.48,0,0,0-4.27,5.2c-1.42,1.75-3,3.41-4.22,5.26-2.56,3.75-5.18,7.48-7.4,11.43-3.7,6.6-7.21,13.27-9,20.77-.83,3.41-2.38,6.67-3.13,10.2s-1.24,6.83-1.88,10.23A60.44,60.44,0,0,0-1126,11c0,4.33-.14,8.67,0,13a57.35,57.35,0,0,0,1.06,11.06c1.18,5,2.25,10,3.87,14.88A122.64,122.64,0,0,0-1108,78a121.58,121.58,0,0,0,15.52,20.09,120.51,120.51,0,0,0,12.57,10.65,112.78,112.78,0,0,0,16.25,10.3,103.59,103.59,0,0,0,16.36,6.41,72.42,72.42,0,0,0,17.52,3.32,84.32,84.32,0,0,0,20.11-.53c5.6-1,11.17-1.94,16.74-3.11,6.39-1.36,18.47-6.39,22.12-8.2a88.1,88.1,0,0,0,9.53-6,82.3,82.3,0,0,0,9.25-6.59,78.65,78.65,0,0,0,18.18-22.92,8.21,8.21,0,0,0,.71-4.21c-2.77-1.73-5.48-3.61-8.36-5.17-4-2.14-7.88-4.36-11.77-6.63-2.55-1.5-5.11-3.6-8.58-3.45-1.41,2.54-2.59,5.1-4.16,7.4-3.25,4.74-6.66,9.23-11.49,12.74-7.18,5.21-10,7.83-19.41,11.16-6.37,2.24-13.43,4-18.47,3.71a35.24,35.24,0,0,0-6,0c-4.28.44-8.41-.58-12.58-1.1-1.81-.22-3.51-1.19-5.3-1.63-6.61-1.63-12.23-5.26-17.81-8.89-6-3.89-10.41-9.56-15.47-14.5-1.44-1.4-2.26-3.4-3.53-5-2.92-3.7-4.77-8-6.62-12.26s-4.47-8.28-4.39-13.18c-3.32-7.26-2.69-15.22-3.9-22.86-.71-4.51,1.65-9,.93-13.57,1.54-2,.31-4.59,1.14-6.52,2-4.57,1.57-9.92,4.84-14,.91-5.32,4.12-9.65,6.48-14.3,2.45-4.81,6.47-8.67,9.83-12.91,1.16-1.46,3-2.31,4.47-3.6,7.46-6.77,13.5-10,23.73-12.71,1.5-1.77,3.87-.87,5.75-1.86,1.57-.83,3.79-.45,5.73-.61s4.18-.51,6.28-.49c3,0,6.19-.66,9.08,1,5.31-.16,10.3,1.33,15.25,3,11.72,4,21.61,10.42,28.39,21,2.07,3.23,3.84,6.66,5.84,10.16ZM69.2,130c2.5,0,5,.12,7.49,0,3.53-.22,7.24-.06,10.53-1.12,4-1.27,8-2.37,12-3.65,6-2,11.21-5.23,16.53-8.39,3.46-2.06,6.25-5.13,9.54-7.23,4.58-3,6.54-8,10.76-11.09-.06-2.16,2.29-2.61,3-4.25,2.24-5.08,5.22-9.75,7.44-14.9,3.74-8.65,5.12-17.69,6.45-26.78a47,47,0,0,0,0-12c-.43-3.9-1.19-7.81-1.74-11.7a73.93,73.93,0,0,0-6.64-20.77,66,66,0,0,0-15.46-21.59c-1.86-1.67-3.46-3.63-5.34-5.26A56.32,56.32,0,0,0,116.9-24c-6.5-4-16-9.63-25.4-11-1.49-1.8-3.87-.82-5.75-1.86-1.54-.85-3.79-.45-5.72-.61A49.17,49.17,0,0,0,73.76-38c-5.86.28-11.76-.83-17.6.88-2.73.8-5.92.18-8.51,1.2-5,2-10.19,3.47-15.12,5.73-7.85,3.59-14.58,8.75-21,14.28A50.08,50.08,0,0,0,2.72-6C0-2-3,1.76-5,6.21c-2.49,5.51-4.93,11-6.1,17-.63,3.22-1.25,6.52-2.09,9.63-.94,3.47-.74,6.79-.71,10.14,0,5.7-.4,11.37.76,17.11.8,4,1.61,8,2.76,11.89A71.69,71.69,0,0,0-2.08,91c3,4.54,5.7,9.18,9.59,13,3.62,3.56,7,7.38,11.25,10.24,2.86,1.93,5.59,4.15,8.68,5.58,7.43,3.45,14.57,7.81,23.09,8.2,1.59,1.87,3.95.19,5.54,1.07,2,1.13,4.07.82,6.13.88C64.53,130.05,66.87,130,69.2,130Zm377.09,0c2.33,0,4.67.12,7,0,3.69-.23,7.57-.05,11-1.13,4-1.23,8-2.27,11.94-3.66,5.95-2.1,11.2-5.22,16.52-8.41,3.48-2.08,6.22-5.17,9.52-7.27,4.59-2.92,6.59-8,10.7-11.1,0-2.09,2.27-2.6,3-4.24,2.33-5,5.21-9.76,7.45-14.89,3.78-8.65,5-17.73,6.45-26.8a31.8,31.8,0,0,0,0-8c-.26-2.7.59-5.35-.77-8.17-1-2.12-.6-5-1-7.53A76.45,76.45,0,0,0,522,9.33,65.67,65.67,0,0,0,507-12.47q-1.82-1.71-3.53-3.53a60.13,60.13,0,0,0-17.73-12.7c-2.35-1.15-4.73-2.24-7.13-3.29s-4.75-2.42-7.27-2.9c-2.78-.53-5.44-1.37-8.17-2s-5.48.2-8-1.12c-7.18.51-14.47-1.12-21.57,1-2.51-.69-4.66,1.12-7.08,1-2.61-.13-4.84,1.24-7.14,2.08-5.79,2.11-11.7,3.9-16.82,7.7-3.55,2.64-7.25,5.07-10.82,7.72a43.14,43.14,0,0,0-9.22,8.73c-5.06,6.88-10.47,13.65-13.23,22-.63,1.9-1.66,3.66-2.24,5.56s-.8,4-1.28,6-1.68,4.2-1.62,6.27S363,34,363,36.07c.11,10.09-.76,20.24,2,30.15a120.91,120.91,0,0,0,4.33,13.7,108,108,0,0,0,5.6,11.18,59,59,0,0,0,7.26,10.43,80.89,80.89,0,0,0,16.38,14.6,118.74,118.74,0,0,0,17.79,8.94c3.67,1.43,7.21,3.05,11.23,3,1.46,1.71,3.6.23,5.08,1,1.87,1,3.72.9,5.63.91C441,130,443.63,130,446.29,130Zm-988.15-22.9c3.82,2.46,8,5.28,12.28,7.88a89.35,89.35,0,0,0,18.5,8.44c4.59,1.5,9.08,3.22,14,3.75,1.81.2,4.12.13,5.49,1,2,1.28,3.84.48,5.7.82,2,.36,3.89,1.16,6.08,1.09,6.33-.22,12.66-.11,19-.07,3.4,0,6.62-1.68,10.08-1,4.6-2.26,10.15-1.81,14.42-5,6.59-1.37,11.51-5.66,16.44-9.74s8.26-9.53,10.94-15.41c2.6-5.73,3.14-11.85,3.8-17.89a30.81,30.81,0,0,0-1.08-11.49,33.07,33.07,0,0,0-5.32-11.22,38.41,38.41,0,0,0-8.87-8.39,71.65,71.65,0,0,0-13.48-7.36A173.19,173.19,0,0,0-457.78,35a70.17,70.17,0,0,1-9-2.37c-4.08-1.59-8.35-2.39-12.53-3.52-5.7-1.56-11.3-3.19-16.48-6.09-4.46-2.5-7.56-6.36-8-11.21-.72-7.25.68-14,7.26-18.89,4.31-3.23,9.21-4.43,14.11-5.82,2-.56,4.74.67,6.37-.27,2.3-1.33,3.87,0,5.78.13,3.54.21,7.05.09,10.6,1,4.69,1.14,9.45,2.05,13.79,4.14,7,3.37,14.13,6.69,20.08,12.42,6-6.38,9.75-14,15.23-20.58a13.29,13.29,0,0,0-1.53-1.51c-4.38-3.09-8.6-6.47-13.25-9.07-2.47-1.39-4.91-3.46-8.11-3.32-12-5.91-24.88-8-38.17-8-2.84,0-5.67,0-8.5,0-3.41-.06-6.63,1.68-10.09,1-4.6,2.26-10.14,1.81-14.42,5-7.56,1.79-12.82,7.27-18.52,11.9-2.51,2-4.37,5.07-6,7.94C-533-5.78-535.74,1-536,8.53c-.11,3.16-.07,6.33,0,9.49,0,1.57-.58,3.33,1,4.59,1.61,9.76,4.16,11.55,10.63,17.5,5.4,5,12.24,7.3,18.91,9.85,4,1.55,8.2,2.74,12.32,4,3.4,1.06,6.82,2.07,10.26,3,2.86.76,5.9,1,8.63,2.11a71.22,71.22,0,0,0,8.83,2.74c5.45,1.34,10.56,3.57,15.83,5.33a17,17,0,0,1,8,5.85A35.61,35.61,0,0,1-439,77.87c0,2.58,0,5.57,0,8.57a8.89,8.89,0,0,1-.31,2.36c-1.89,6.44-6.59,10.64-12.33,13A39.4,39.4,0,0,1-468.33,105c-4.7-.2-9.51,1-14.09-1-4.26.57-8.1-1.45-12.11-2.22-6.86-1.32-20.59-8.54-27.47-13.25-2.41-1.66-4.94-3.16-7.33-4.67-3,4.75-6,9.18-8.71,13.72C-539.71,100.35-542.64,102.61-541.86,107.1ZM-686,126.91V86c0-18.81,0-37.63-.06-56.44a10.08,10.08,0,0,1,1.11-5.06,59.5,59.5,0,0,1,13-16.06,30.43,30.43,0,0,1,6.24-4.22c5.39-2.64,10.72-5.49,16.68-6.76,4.78-1,9.46-2.68,14.45-2.5,1.46,0,2.92,0,4,0l1.39-1.39V-36.95a71.89,71.89,0,0,0-19.18,1.79A48.42,48.42,0,0,0-668.45-24.8C-676.57-17.86-684-10.12-689-.19v-34.7h-31.8v161.8Zm903.85,0V27.63a50.39,50.39,0,0,1,14-18.86,53.48,53.48,0,0,1,19.63-10.4c7.07-2.12,14.42-4.4,21.94-3.24l1.49-1.49V-37c-2.93,0-5.74-.13-8.53,0a47.25,47.25,0,0,0-8.07,1,54.15,54.15,0,0,0-9.24,3,52,52,0,0,0-17.9,12.29c-2.58,2.83-5.78,5.16-8,8.22-2.83,3.89-5.53,7.94-8.21,12.19V-34.86H183.19V126.9ZM-604.85-34.9V126.8c10.82.55,30.85.37,34.7-.27V-34.9ZM-44.16,126.91V-35H-78.24a.83.83,0,0,0-.43.17c-.13.09-.22.23-.17.17V126.91ZM332.92-34.83H298.16c-.71,17.78-.41,157.36.31,161.66h34.45ZM-604.92-62.16h34.83V-98.54l-1.39-1.46h-29.47c-1.47,0-3-.28-4,1.56Zm526.08-36.5v36.42h34.71V-98.63l-1.28-1.28H-77.59Zm376.92,36.5h34.83V-98.53l-1.23-1.31H299.34l-1.26,1.26Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M948,346c-.12-.28-.21-.8-.36-.82-3.67-.43-7.35-.75-11-1.2-1.55-.2-3.06-.66-4.59-1-4.92-1-9.86-1.92-14.75-3-4.54-1-9-2.26-13.51-3.55-6.1-1.76-12.24-3.38-18.26-5.44-3.2-1.1-6.42-2.2-9.53-3.54-10.35-4.43-20.66-8.92-30.56-14.36-4.33-2.39-8.7-4.76-13-7.25-4.47-2.6-8.56-5.87-12.89-8.74-5.15-3.43-10.07-7.16-15-10.87-5.42-4.06-10.26-8.76-15.58-12.92-3.78-2.95-7-6.69-10.31-10.18-5.23-5.46-10.68-10.77-15.5-16.59A317.11,317.11,0,0,1,740,215.16a300,300,0,0,1-20-37.69,261.74,261.74,0,0,1-11-28.95c-.66-2.06-1.48-4.08-2-6.18a41.15,41.15,0,0,0-1.82-5.74c-.77-2-.26-4.7-1.37-6.4-1.24-1.89.12-4.34-1.85-5.77.27-4.7-1.7-9-2.14-13.66-.49-5.22-2-10.36-1.86-15.68-1.71-2.7-.41-5.8-1.07-8.57-1.61-6.67-.74-13.4-.9-20.1s0-13.33,0-20c0-5.06,1.74-10,1-15.08,1.38-2.22.44-4.85,1.13-7,.77-2.4.32-4.87,1-7.09,1.62-5.57,1.3-11.56,3.9-16.87.16-6.69,2.83-12.83,4.47-19.17s4.16-12.26,6.22-18.4a14.73,14.73,0,0,0,.38-3.11c-6.52-2.95-13-5.57-19.11-8.72-6.42-3.28-12.19-7.65-18.26-11.53C671.35-64,667.39-69,662.17-72.46c-1.51-1-2.22-3.16-3.62-4.42-6-5.34-10.61-11.82-15-18.33a136.22,136.22,0,0,1-11.63-21.14,138,138,0,0,1-8-23.2c-.88-3.61-.91-7.47-2.77-10.83a1.43,1.43,0,0,1-.12-.45c-.33-3.7-.64-7.39-1-11.08-.33-3.37.51-6.73-.82-10.15a7.12,7.12,0,0,1,.48-6.18,5.63,5.63,0,0,0,.33-2.84,75,75,0,0,1,1.88-19.21c.77-3.17,1.48-6.42,2-9.65.92-5.26,3.11-10.06,4.69-15.08a66.63,66.63,0,0,1,3.51-8.54c1.9-4.05,3.79-8.13,6-12,2.36-4.06,5-7.95,7.75-11.79a85.62,85.62,0,0,1,9.5-11.59c1.47-1.46,3.42-2.59,3.91-4.86,2.3-.44,3.32-2.52,4.87-3.91s3-3.13,4.63-4.56a149.82,149.82,0,0,1,18.4-13.46c3.42-2.18,7-4,10.49-6.13a65.33,65.33,0,0,1,14-6c3.83-1.22,7.42-3.26,11.47-3.69,3.77-.41,7.15-2.32,11-2.5,2.17-.11,4.27-1.19,6.53-1.1.11,0,.24-.53.36-.82h44l1.31,1.94c4.9,0,9.38,1.45,14,2.62,2.6.65,5,1.8,7.5,2.5,9.59,2.66,18.34,7.32,26.9,12.24a117.68,117.68,0,0,1,12.84,8.81c4.36,3.34,8.53,6.92,12.61,10.6a86.7,86.7,0,0,1,6.86,7.58,153,153,0,0,1,13.47,17.43c3.08,4.72,5.8,9.59,8.57,14.47,1.62,2.85,2.57,5.95,4,8.85,2.8,5.72,4.26,11.9,6.39,17.91,4.37.5,8.28-1.63,12.43-2.4,4.89-.9,9.65-2.45,14.52-3.49,1.84-.4,3.71-.15,5.63-.91s4-.29,6.07-1a27.4,27.4,0,0,1,8.54-1.07c2.93,0,5.73-.69,8.59-1,5-.5,10.13.51,15.08-1.09,7.68.58,15.41-1,23.1.88,3,.72,6.31,0,9.47.16s6.06.93,9.09.89c4.08-.06,8,1.81,12.08,1.07a.9.9,0,0,1,.49,0c2.73,1.37,5.82,1.25,8.65,2.06,2.38.69,4.82.46,7.09,1,4.08,1,8.22,1.93,12.21,3.12s8.34,2.29,12.41,3.76c7,2.49,14,4.83,20.94,7.38a57.9,57.9,0,0,1,7.53,3.53c2.59,1.39,5.51,1.91,8,3.75,2.16,1.6,5.1,2.11,7.55,3.38,4.26,2.21,8.32,4.85,12.65,6.9a74.76,74.76,0,0,1,9.26,5.39c8.72,5.76,17.3,11.67,25.49,18.23,6.19,4.95,12.45,9.79,18,15.38,6.17,6.18,12.81,11.91,18.14,18.94,2.85,3.76,6.52,6.9,9.4,10.65,1.59,2.06,3.7,3.76,4.94,5.94,3,5.36,7,10,10.36,15.18A221.51,221.51,0,0,1,1229-74.76c5.62,11.15,11.78,22.05,16,33.86,1.61,4.49,3.47,8.9,5,13.44,1.83,5.59,3.52,11.23,5,16.92,1.09,4.23,3.22,8.22,3,12.74,1.9,1.89.5,4.39,1.2,6.51A30.37,30.37,0,0,1,1261,18c0,.83-.36,2,.06,2.44,1.85,1.88,0,4.47,1.09,6,1.46,2.12.58,4.15.82,6.19.48,4,.79,8,1.21,12,0,.15.54.24.82.36V81c-1.65,1-.83,3.15-2.27,4.12l1.17,1.3c-.3.55-.82,1.06-.87,1.62-.39,4.35-.7,8.71-1,13.07,0,.33.1.71,0,1-1.88,4.56-1.52,9.57-2.81,14.29-.64,2.35-.72,5.13-1.64,7.34-1,2.45.59,5.29-1.53,7.35.3,3.11-1.58,5.71-2.2,8.62a65.19,65.19,0,0,1-2.67,8.84c-1.39,3.74-2.75,7.54-4,11.32-3.47,10.59-8.41,20.51-13.09,30.55-1.7,3.63-3.82,7.07-5.59,10.67a53.23,53.23,0,0,1-4.58,7.6,12.38,12.38,0,0,0-1.11,2.9c3.29,1,5.56,2.94,8.27,4.14a28.15,28.15,0,0,1,7.31,5.21c9,8.27,17,17.37,21.18,29.15a60,60,0,0,1,3.55,13c.23,2,.45,4.2,1.92,5.88v16c-.67,1-2,2-1.88,2.86.23,2.53-.84,4.7-1.51,6.93s-.66,5-2.61,6.89c-2.5,8.86-8.08,15.85-13.92,22.64-1.65,1.93-4.06,3.19-5.85,5-5,5-11.12,8.17-17.33,11.22a42.28,42.28,0,0,1-6.47,2.42c-3.11.94-6.28,1.7-9.42,2.55,0,0,0,.31,0,.48h-26c-.26-.33-.51-.94-.79-1-5.54-.43-10.51-2.66-15.49-4.84a65.36,65.36,0,0,1-16.18-10.29,71.41,71.41,0,0,1-18.09-24,8.47,8.47,0,0,0-2.31.51c-3.25,1.81-6.33,4-9.7,5.54-4.63,2.12-8.94,4.85-13.64,6.83-5.11,2.15-10,4.8-15.1,7-4.38,1.86-8.94,3.27-13.36,5.11-4.09,1.7-8.54,2.63-12.79,4.07a132.84,132.84,0,0,1-13.52,3.52c-4,.9-7.79,2.29-11.92,2.67-2.51.24-5,1.12-7.59.89-1.39,2.05-3.79.22-5.41,1.39-1.8,1.29-3.85.27-5.74.62-2.46.46-4.91,1-7.37,1.51a2.41,2.41,0,0,0,0,.48ZM825.13,179.85h298.52l2.35-2.35v-4.9q0-119.2.1-238.41A20.66,20.66,0,0,0,1123-77a29.83,29.83,0,0,0-3.89-4.4,14.26,14.26,0,0,0-11.1-4.63q-133.44.12-266.9,0a14.32,14.32,0,0,0-8.44,2.68C826-79,823-73.15,823-65.33q.06,105,0,209.92v31.68C823.79,177.59,824.43,178.66,825.13,179.85Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M1011,346a2.41,2.41,0,0,1,0-.48c2.46-.52,4.91-1,7.37-1.51,1.89-.35,3.94.67,5.74-.62,1.62-1.17,4,.66,5.41-1.39,2.6.23,5.08-.65,7.59-.89,4.13-.38,8-1.77,11.92-2.67a132.84,132.84,0,0,0,13.52-3.52c4.25-1.44,8.7-2.37,12.79-4.07,4.42-1.84,9-3.25,13.36-5.11,5.1-2.17,10-4.82,15.1-7,4.7-2,9-4.71,13.64-6.83,3.37-1.55,6.45-3.73,9.7-5.54a8.47,8.47,0,0,1,2.31-.51,71.41,71.41,0,0,0,18.09,24,65.36,65.36,0,0,0,16.18,10.29c5,2.18,10,4.41,15.49,4.84.28,0,.53.63.79,1Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M-294.91,127V-93H-290c27.83,0,55.66-.19,83.49.13,7.37.08,14.66,1.75,21.94,3.56,8.69,2.16,16.62,5.79,24.47,9.78,4.78,2.44,9,5.83,13.21,9.15a68.6,68.6,0,0,1,5.58,4.61A102.09,102.09,0,0,1-120-35.12a89.93,89.93,0,0,1,6,18c.62,2.73,2,5.26,2,8.17s1.6,5.61,1,8.59c2.07,5.08.72,10.39,1,15.58s.72,10.77-.14,16S-111.64,41.78-112.8,47a118,118,0,0,1-4.31,14.75,98.38,98.38,0,0,1-8.45,17.52A96.8,96.8,0,0,1-137,94.56a99.63,99.63,0,0,1-22.76,18.5,103.9,103.9,0,0,1-22.54,9.53c-3.85,1.16-7.8,2.72-12,2.41-11.25,3-22.75,1.9-34.17,2C-250.46,127.08-272.46,127-294.91,127Zm35.06-31h2.07c14,0,28-.07,42,0a66.32,66.32,0,0,0,17.18-2A81,81,0,0,0-185,89.5c7.07-3.22,12.88-8,18.52-13.34,7.13-6.72,10.93-15.39,15.37-23.7,1.28-2.4,1.31-5.43,2.13-8.11,1.07-3.49,2.26-6.94,2-10.68,1.92-2.13.64-4.72,1-7.08a44.62,44.62,0,0,0,.94-7.58c-.1-5-.53-10.06-1-15.08-.24-2.86-.17-5.94-1.28-8.46-.8-1.81-.24-3.51-.86-5.15-1.8-4.75-3.2-9.69-5.4-14.25-2.59-5.37-5.4-10.69-9.78-15-1.48-1.44-2.52-3.33-3.95-4.82-1-1-2.41-1.56-3.42-2.54A44.31,44.31,0,0,0-180.42-53a62.24,62.24,0,0,0-15.37-6.38c-4.76-1.18-9.52-2.49-14.4-2.54-15.33-.18-30.66-.07-46-.07h-3.67Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-760,126.87h-34v-5c0-25.5-.09-51,.06-76.49,0-7.23-1.81-14.34-1.06-21.58-1.69-5.47-2.07-11.23-4.88-16.49C-803.41.69-808.67-3.35-815.38-6c-3.66-1.46-7.41-.57-11.09-1-6.33-.74-11.52,2.82-17.26,4.27-6.91,4.7-14,9.24-18.55,16.55-2.86,1.83-3.94,5.12-5.45,7.78A23.51,23.51,0,0,0-871,33.17c.08,29.49,0,59,0,88.49v5.15h-34.48c-.83-4.19-1.19-204.54-.37-225.43.79-1.4,2.06-1.41,3.44-1.4,10,0,20,0,29.91,0l1.65,1.65V-4a28.62,28.62,0,0,1,2-3.56c3-3.77,5.72-7.91,9.26-11.11,5.08-4.59,12.32-11.2,23-14.32,2.88-2.39,6.61-2.62,10-3.7a35.31,35.31,0,0,1,9-1.25c3.66-.2,7.33,0,11,0a50.88,50.88,0,0,1,13.52,2.36,29.43,29.43,0,0,1,11.54,5.78C-775-24-768.65-18-765.84-9a149.28,149.28,0,0,1,4,14.85c.49,2.41.37,4.8.87,7.11,2,9.33.81,18.74.88,28.1C-759.87,69.57-760,98.06-760,126.87Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-935.66-46.3l-27.53,18.47c-2-3.5-3.77-6.93-5.84-10.16-6.78-10.59-16.67-17-28.39-21-5-1.67-9.94-3.16-15.25-3-2.89-1.62-6-.93-9.08-1-2.1,0-4.19.32-6.28.49s-4.16-.22-5.73.61c-1.88,1-4.25.09-5.75,1.86-10.23,2.68-16.27,5.94-23.73,12.71-1.42,1.29-3.31,2.14-4.47,3.6-3.36,4.24-7.38,8.1-9.83,12.91-2.36,4.65-5.57,9-6.48,14.3-3.27,4.08-2.87,9.43-4.84,14-.83,1.93.4,4.52-1.14,6.52.72,4.61-1.64,9.06-.93,13.57,1.21,7.64.58,15.6,3.9,22.86-.08,4.9,2.54,9,4.39,13.18s3.7,8.56,6.62,12.26c1.27,1.61,2.09,3.61,3.53,5,5.06,4.94,9.47,10.61,15.47,14.5,5.58,3.63,11.2,7.26,17.81,8.89,1.79.44,3.49,1.41,5.3,1.63,4.17.52,8.3,1.54,12.58,1.1a35.24,35.24,0,0,1,6,0c5,.33,12.1-1.47,18.47-3.71,9.45-3.33,12.23-6,19.41-11.16,4.83-3.51,8.24-8,11.49-12.74,1.57-2.3,2.75-4.86,4.16-7.4,3.47-.15,6,2,8.58,3.45,3.89,2.27,7.8,4.49,11.77,6.63,2.88,1.56,5.59,3.44,8.36,5.17a8.21,8.21,0,0,1-.71,4.21A78.65,78.65,0,0,1-952,104.39a82.3,82.3,0,0,1-9.25,6.59,88.1,88.1,0,0,1-9.53,6c-3.65,1.81-15.73,6.84-22.12,8.2-5.57,1.17-11.14,2.16-16.74,3.11a84.32,84.32,0,0,1-20.11.53,72.42,72.42,0,0,1-17.52-3.32,103.59,103.59,0,0,1-16.36-6.41,112.78,112.78,0,0,1-16.25-10.3,120.51,120.51,0,0,1-12.57-10.65A121.58,121.58,0,0,1-1108,78,122.64,122.64,0,0,1-1121,49.93c-1.62-4.88-2.69-9.9-3.87-14.88A57.35,57.35,0,0,1-1126,24c-.17-4.32-.06-8.66,0-13a60.44,60.44,0,0,1,.84-11.12c.64-3.4,1.16-6.82,1.88-10.23s2.3-6.79,3.13-10.2c1.82-7.5,5.33-14.17,9-20.77,2.22-4,4.84-7.68,7.4-11.43,1.27-1.85,2.8-3.51,4.22-5.26a52.48,52.48,0,0,1,4.27-5.2c3.18-3,6.49-5.95,9.87-8.76,1.55-1.28,3.59-2,5.09-3.33,6.3-5.59,14-8.77,21.47-12.17a51.85,51.85,0,0,1,16.11-4.59c3.26-.33,6.43-1.54,9.68-1.87a81.19,81.19,0,0,1,10,0c1.94,0,3.78-2.11,5.49-.86,1.45,1.07,2.79.69,4.19.82a21.4,21.4,0,0,0,3.49,0c5.53-.43,10.85,1.07,16.14,2.17a54.35,54.35,0,0,1,10.61,3.27c3.39,1.47,6.85,2.83,10.07,4.62a98.42,98.42,0,0,1,13.83,9A106.32,106.32,0,0,1-946.73-63,63.52,63.52,0,0,1-935.66-46.3Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M69.2,130c-2.33,0-4.67.05-7,0-2.06-.06-4.08.25-6.13-.88-1.59-.88-4,.8-5.54-1.07-8.52-.39-15.66-4.75-23.09-8.2-3.09-1.43-5.82-3.65-8.68-5.58-4.24-2.86-7.63-6.68-11.25-10.24C3.62,100.19.88,95.55-2.08,91a71.69,71.69,0,0,1-8.33-19c-1.15-3.87-2-7.89-2.76-11.89-1.16-5.74-.71-11.41-.76-17.11,0-3.35-.23-6.67.71-10.14.84-3.11,1.46-6.41,2.09-9.63,1.17-6,3.61-11.48,6.1-17C-3,1.76,0-2,2.72-6a50.08,50.08,0,0,1,8.79-9.83c6.44-5.53,13.17-10.69,21-14.28,4.93-2.26,10.11-3.74,15.12-5.73,2.59-1,5.78-.4,8.51-1.2,5.84-1.71,11.74-.6,17.6-.88a49.17,49.17,0,0,1,6.27.49c1.93.16,4.18-.24,5.72.61,1.88,1,4.26.06,5.75,1.86,9.39,1.41,18.9,7,25.4,11a56.32,56.32,0,0,1,6.82,5.23c1.88,1.63,3.48,3.59,5.34,5.26A66,66,0,0,1,144.52,8.12a73.93,73.93,0,0,1,6.64,20.77c.55,3.89,1.31,7.8,1.74,11.7a47,47,0,0,1,0,12c-1.33,9.09-2.71,18.13-6.45,26.78-2.22,5.15-5.2,9.82-7.44,14.9-.72,1.64-3.07,2.09-3,4.25-4.22,3-6.18,8.14-10.76,11.09-3.29,2.1-6.08,5.17-9.54,7.23-5.32,3.16-10.5,6.42-16.53,8.39-4,1.28-8,2.38-12,3.65-3.29,1.06-7,.9-10.53,1.12C74.2,130.12,71.7,130,69.2,130ZM20.77,46.41c.41,4.35.23,8.87,1.44,13a82.24,82.24,0,0,0,2.58,8.39,65.74,65.74,0,0,0,3.94,8.35c3.28,5.64,7,10.89,12.51,14.8A59.8,59.8,0,0,0,53.82,98,48,48,0,0,0,68.57,101c4.19.27,8.13-1.07,12.19-1.83a36.37,36.37,0,0,0,16.95-8.51,50.8,50.8,0,0,0,14.62-19.36c2.48-6,4.42-12,4.67-18.54.08-1.91-.29-3.82.92-5.64.42-.63,0-1.89-.18-2.84s-.75-1.81-.7-2.68c.36-5.53-1.43-10.56-2.94-15.77-3-10.4-9.47-18.27-17.19-25.34C94.4-1.83,85-6.34,79.8-7.59A64.88,64.88,0,0,0,68.38-8.93c-1.67-.09-3.38.84-5.07.87A27.48,27.48,0,0,0,56-6.4,44.06,44.06,0,0,0,38,4.5a75.77,75.77,0,0,0-5,5.85c-4.32,5.15-6.72,11.16-9,17.31a42.06,42.06,0,0,0-2.13,9.14C21.47,40,20.66,43.12,20.77,46.41Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M446.29,130c-2.66,0-5.33,0-8,0-1.91,0-3.76.06-5.63-.91-1.48-.76-3.62.72-5.08-1-4,0-7.56-1.59-11.23-3a118.74,118.74,0,0,1-17.79-8.94,80.89,80.89,0,0,1-16.38-14.6,59,59,0,0,1-7.26-10.43,108,108,0,0,1-5.6-11.18A120.91,120.91,0,0,1,365,66.22c-2.76-9.91-1.89-20.06-2-30.15,0-2.08,1.21-3.87,1.14-6.08s1.1-4.16,1.62-6.27.69-4,1.28-6,1.61-3.66,2.24-5.56c2.76-8.31,8.17-15.08,13.23-22a43.14,43.14,0,0,1,9.22-8.73c3.57-2.65,7.27-5.08,10.82-7.72,5.12-3.8,11-5.59,16.82-7.7,2.3-.84,4.53-2.21,7.14-2.08,2.42.12,4.57-1.69,7.08-1,7.1-2.12,14.39-.49,21.57-1,2.57,1.32,5.45.52,8,1.12s5.39,1.46,8.17,2c2.52.48,4.87,1.85,7.27,2.9s4.78,2.14,7.13,3.29A60.13,60.13,0,0,1,503.51-16q1.71,1.82,3.53,3.53A65.67,65.67,0,0,1,522,9.33a76.45,76.45,0,0,1,6.2,19.46c.39,2.55,0,5.41,1,7.53,1.36,2.82.51,5.47.77,8.17a31.8,31.8,0,0,1,0,8c-1.48,9.07-2.67,18.15-6.45,26.8-2.24,5.13-5.12,9.86-7.45,14.89-.77,1.64-3,2.15-3,4.24-4.11,3.14-6.11,8.18-10.7,11.1-3.3,2.1-6,5.19-9.52,7.27-5.32,3.19-10.57,6.31-16.52,8.41-3.94,1.39-8,2.43-11.94,3.66-3.46,1.08-7.34.9-11,1.13C451,130.12,448.62,130,446.29,130ZM398,46.32c.12,3.21.43,6.39.81,9.59a50.72,50.72,0,0,0,4.3,15.25c3.56,7.8,8.14,14.92,15.44,20.07A62,62,0,0,0,430.27,98a47.29,47.29,0,0,0,13.74,3,38.34,38.34,0,0,0,10.09-.78,43.88,43.88,0,0,0,13.2-4.34,32.7,32.7,0,0,0,9.93-7.48c2.18-2.61,4.62-5,6.79-7.65,3.14-3.85,4.86-8.37,6.83-12.7,1.71-3.76,2.35-8.06,3.08-12.19.53-3-.48-6.14,1-9.09a4.25,4.25,0,0,0-.16-2.39c-.18-.9-.8-1.79-.74-2.66.36-5.53-1.45-10.56-2.95-15.77-3-10.41-9.2-18.55-17.2-25.28a40.34,40.34,0,0,0-17.06-8.08A42.31,42.31,0,0,0,445-9c-1.54.09-3,.89-4.58.9A25.48,25.48,0,0,0,433-6.44a44.49,44.49,0,0,0-18,10.89c-1.84,1.8-3.39,3.88-5,5.85-4.34,5.14-6.86,11.12-9,17.3A52,52,0,0,0,398,46.32Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-541.86,107.1c-.78-4.49,2.15-6.75,3.82-9.52,2.75-4.54,5.68-9,8.71-13.72,2.39,1.51,4.92,3,7.33,4.67,6.88,4.71,20.61,11.93,27.47,13.25,4,.77,7.85,2.79,12.11,2.22,4.58,2,9.39.76,14.09,1a39.4,39.4,0,0,0,16.68-3.14c5.74-2.38,10.44-6.58,12.33-13a8.89,8.89,0,0,0,.31-2.36c0-3,0-6,0-8.57A35.61,35.61,0,0,0-441.56,73a17,17,0,0,0-8-5.85c-5.27-1.76-10.38-4-15.83-5.33a71.22,71.22,0,0,1-8.83-2.74C-477,58-480,57.74-482.88,57c-3.44-.92-6.86-1.93-10.26-3-4.12-1.29-8.29-2.48-12.32-4-6.67-2.55-13.51-4.89-18.91-9.85-6.47-6-9-7.74-10.63-17.5-1.56-1.26-.94-3-1-4.59-.07-3.16-.11-6.33,0-9.49.24-7.54,3-14.31,6.73-20.69,1.67-2.87,3.53-5.9,6-7.94,5.7-4.63,11-10.11,18.52-11.9,4.28-3.19,9.82-2.74,14.42-5,3.46.67,6.68-1.07,10.09-1,2.83,0,5.66,0,8.5,0,13.29,0,26.13,2.08,38.17,8,3.2-.14,5.64,1.93,8.11,3.32,4.65,2.6,8.87,6,13.25,9.07a13.29,13.29,0,0,1,1.53,1.51c-5.48,6.6-9.23,14.2-15.23,20.58-5.95-5.73-13-9-20.08-12.42-4.34-2.09-9.1-3-13.79-4.14-3.55-.87-7.06-.75-10.6-1-1.91-.11-3.48-1.46-5.78-.13-1.63.94-4.36-.29-6.37.27-4.9,1.39-9.8,2.59-14.11,5.82-6.58,4.91-8,11.64-7.26,18.89.48,4.85,3.58,8.71,8,11.21,5.18,2.9,10.78,4.53,16.48,6.09,4.18,1.13,8.45,1.93,12.53,3.52a70.17,70.17,0,0,0,9,2.37,173.19,173.19,0,0,1,23.89,7.51,71.65,71.65,0,0,1,13.48,7.36,38.41,38.41,0,0,1,8.87,8.39,33.07,33.07,0,0,1,5.32,11.22A30.81,30.81,0,0,1-405.14,81c-.66,6-1.2,12.16-3.8,17.89-2.68,5.88-6,11.31-10.94,15.41s-9.85,8.37-16.44,9.74c-4.27,3.19-9.82,2.74-14.42,5-3.46-.67-6.68,1-10.08,1-6.34,0-12.67-.15-19,.07-2.19.07-4.06-.73-6.08-1.09-1.86-.34-3.7.46-5.7-.82-1.37-.87-3.68-.8-5.49-1-4.91-.53-9.4-2.25-14-3.75a89.35,89.35,0,0,1-18.5-8.44C-533.88,112.38-538,109.56-541.86,107.1Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-686,126.91h-34.84V-34.89H-689V-.19c5-9.93,12.47-17.67,20.59-24.61a48.42,48.42,0,0,1,20.16-10.36,71.89,71.89,0,0,1,19.18-1.79V-6.39L-630.5-5c-1.12,0-2.58,0-4,0-5-.18-9.67,1.47-14.45,2.5-6,1.27-11.29,4.12-16.68,6.76a30.43,30.43,0,0,0-6.24,4.22,59.5,59.5,0,0,0-13,16.06,10.08,10.08,0,0,0-1.11,5.06C-686,48.4-686,67.22-686,86Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M217.85,126.9H183.19V-34.86H214.9V-.25c2.68-4.25,5.38-8.3,8.21-12.19,2.23-3.06,5.43-5.39,8-8.22A52,52,0,0,1,249-32.95a54.15,54.15,0,0,1,9.24-3,47.25,47.25,0,0,1,8.07-1c2.79-.17,5.6,0,8.53,0V-6.36l-1.49,1.49C265.85-6,258.5-3.75,251.43-1.63A53.48,53.48,0,0,0,231.8,8.77a50.39,50.39,0,0,0-14,18.86Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-604.85-34.9h34.7V126.53c-3.85.64-23.88.82-34.7.27Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-44.16,126.91H-78.84V-34.65c0,.06,0-.08.17-.17a.83.83,0,0,1,.43-.17h34.08Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M332.92-34.83V126.83H298.47c-.72-4.3-1-143.88-.31-161.66Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-604.92-62.16V-98.44c.93-1.84,2.5-1.56,4-1.56h29.47l1.39,1.46v36.38Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M-78.84-98.66l1.25-1.25h32.18l1.28,1.28v36.39H-78.84Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M298.08-62.16V-98.58l1.26-1.26h32.34l1.23,1.31v36.37Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M825.13,179.85c-.7-1.19-1.34-2.26-2.13-3.58V144.59q0-105,0-209.92c0-7.82,3-13.64,9.64-18A14.32,14.32,0,0,1,841.06-86q133.46.06,266.9,0a14.26,14.26,0,0,1,11.1,4.63A29.83,29.83,0,0,1,1123-77a20.66,20.66,0,0,1,3.15,11.22q-.21,119.21-.1,238.41v4.9l-2.35,2.35Zm13.19-14h272.36l1.32-1.32V-31.87a14.88,14.88,0,0,0,0-3,7.38,7.38,0,0,0-1.18-2H838.46c-2.3,1.49-1.43,3.67-1.43,5.54q-.06,96,0,192v3.88C837.44,164.94,837.79,165.3,838.32,165.82ZM836.2-49.46c1.69,2,3.56,1.45,5.31,1.45q133,0,266,0A8.42,8.42,0,0,0,1114-50.5c0-5.3-.08-10.63,0-16a7.71,7.71,0,0,0-1.81-4.76,17.85,17.85,0,0,0-2-2.26c-2.06-.6-3.26-1-4.47-1.28-.62-.15-1.48-.46-1.87-.19-2.41,1.66-5.09.91-7.62.91Q974-74,851.76-74c-2.54,0-5.2.73-7.63-.89-.43-.29-1.46.32-2.22.52l-2.69.69-2.79,2.79c-2.17,6.68-1.21,13.1-1.43,19Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M-259.85,96V-62h3.67c15.33,0,30.66-.11,46,.07,4.88,0,9.64,1.36,14.4,2.54A62.24,62.24,0,0,1-180.42-53a44.31,44.31,0,0,1,9.71,6.75c1,1,2.45,1.53,3.42,2.54,1.43,1.49,2.47,3.38,3.95,4.82,4.38,4.28,7.19,9.6,9.78,15,2.2,4.56,3.6,9.5,5.4,14.25.62,1.64.06,3.34.86,5.15,1.11,2.52,1,5.6,1.28,8.46.42,5,.85,10,1,15.08a44.62,44.62,0,0,1-.94,7.58c-.35,2.36.93,4.95-1,7.08.29,3.74-.9,7.19-2,10.68-.82,2.68-.85,5.71-2.13,8.11-4.44,8.31-8.24,17-15.37,23.7-5.64,5.31-11.45,10.12-18.52,13.34a81,81,0,0,1-13.62,4.55,66.32,66.32,0,0,1-17.18,2c-14-.1-28,0-42,0Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M20.77,46.41c-.11-3.29.7-6.42,1.12-9.61A42.06,42.06,0,0,1,24,27.66c2.24-6.15,4.64-12.16,9-17.31A75.77,75.77,0,0,1,38,4.5,44.06,44.06,0,0,1,56-6.4a27.48,27.48,0,0,1,7.34-1.66c1.69,0,3.4-1,5.07-.87A64.88,64.88,0,0,1,79.8-7.59C85-6.34,94.4-1.83,96.91.47c7.72,7.07,14.19,14.94,17.19,25.34,1.51,5.21,3.3,10.24,2.94,15.77-.05.87.54,1.77.7,2.68s.6,2.21.18,2.84c-1.21,1.82-.84,3.73-.92,5.64-.25,6.51-2.19,12.54-4.67,18.54A50.8,50.8,0,0,1,97.71,90.64a36.37,36.37,0,0,1-16.95,8.51c-4.06.76-8,2.1-12.19,1.83A48,48,0,0,1,53.82,98a59.8,59.8,0,0,1-12.58-7.1C35.68,87,32,81.78,28.73,76.14a65.74,65.74,0,0,1-3.94-8.35,82.24,82.24,0,0,1-2.58-8.39C21,55.28,21.18,50.76,20.77,46.41Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M398,46.32a52,52,0,0,1,3.05-18.72c2.12-6.18,4.64-12.16,9-17.3,1.65-2,3.2-4.05,5-5.85A44.49,44.49,0,0,1,433-6.44a25.48,25.48,0,0,1,7.35-1.62c1.53,0,3-.81,4.58-.9a42.31,42.31,0,0,1,11.88,1.48A40.34,40.34,0,0,1,473.9.6c8,6.73,14.22,14.87,17.2,25.28,1.5,5.21,3.31,10.24,2.95,15.77-.06.87.56,1.76.74,2.66A4.25,4.25,0,0,1,495,46.7c-1.5,2.95-.49,6.11-1,9.09-.73,4.13-1.37,8.43-3.08,12.19-2,4.33-3.69,8.85-6.83,12.7-2.17,2.66-4.61,5-6.79,7.65a32.7,32.7,0,0,1-9.93,7.48,43.88,43.88,0,0,1-13.2,4.34,38.34,38.34,0,0,1-10.09.78,47.29,47.29,0,0,1-13.74-3,62,62,0,0,1-11.72-6.74c-7.3-5.15-11.88-12.27-15.44-20.07a50.72,50.72,0,0,1-4.3-15.25C398.43,52.71,398.12,49.53,398,46.32Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M838.32,165.82c-.53-.52-.88-.88-1.32-1.32v-3.88q0-96,0-192c0-1.87-.87-4.05,1.43-5.54h272.31a7.38,7.38,0,0,1,1.18,2,14.88,14.88,0,0,1,0,3V164.5l-1.32,1.32ZM999.08-14c-4.26,1.22-6.3,4.69-7.83,8.33-2.8,6.66-4.5,13.78-8.18,20.1,0,2.82-2.2,4.79-3,7.24-1.56,4.86-3.58,9.52-5.5,14.22-1.1,2.71-2.63,5.26-3.52,8-1.53,4.7-3.53,9.21-5.34,13.78s-3.68,8.81-5.59,13.18c-2.15,4.92-3.86,10.05-6.09,15a112.64,112.64,0,0,0-5,12.43c-2.27,7.07-5.55,13.71-8.5,20.46-1.61,3.69-2.24,6.8-.29,9.93l5,2.46c1.18-.87,2.85-1.54,3.61-2.76a42.46,42.46,0,0,0,4-8.31c1.46-4.23,3.29-8.3,4.94-12.45s3.06-8.38,5.08-12.39a49.32,49.32,0,0,0,4-9.34c1.7-6.3,4.64-12.1,7.23-18,2-4.51,3.68-9.16,5.65-13.66,2.68-6.18,5.05-12.56,7.45-18.9,1.31-3.45,3.49-6.57,4.68-10,2.8-8.17,6.16-16.1,9.4-24.09,1.22-3,2.55-5.94,3.74-8.72A9,9,0,0,0,999.08-14Zm30.81,98c3.69-2,6.89-3.56,10-5.36,5.91-3.47,11.65-7.23,17.65-10.54,5.72-3.15,11.4-6.35,17-9.8A6.64,6.64,0,0,0,1078,53.2c.35-2.48-1.16-4.44-3-5.67-4.54-3-9.26-5.75-14-8.52-5.08-3-10.21-5.91-15.32-8.86-.61-2-2.61-.75-3.82-1.71-3-2.32-6.16-4.35-9.32-6.41a5.93,5.93,0,0,0-7.44.46c-1.92,1.67-3.93,3.41-4.13,6.4a29.07,29.07,0,0,0,1.7,3.2,10.39,10.39,0,0,0,2.11,2.13,31.68,31.68,0,0,0,3.12,2.12c.51.32,1.2.38,1.68.74,3.51,2.63,7.64,4.17,11.33,6.43,4.24,2.61,8.51,5.16,12.91,7.48a7.68,7.68,0,0,0,1.18.42v2.24A14.76,14.76,0,0,1,1053,55c-2.21,1.1-4.72,1.77-6.63,3.24-5.48,4.23-11.9,6.82-17.72,10.43-3.29,2-6.07,4.21-7.81,7.65.7,3.57,3.53,5.4,5.58,7.67ZM873,55.63c4.57,4.08,10.37,6.27,15.48,9.53,5.27,3.36,11.19,5.64,16,9.79,6.17,1.1,10.18,6.54,16.66,8.18L926,79.84V74.08c-1.44-1-3.08-2-4.57-3.23-2.82-2.27-6.2-3.57-9.23-5.4a163.85,163.85,0,0,0-16.66-9.32,9,9,0,0,1-3.92-3.68c2.71-1.83,5-4,7.7-5.09,6.78-2.8,12.47-7.48,19.14-10.48,3.23-1.46,5.88-4.2,8.5-6.14V26l-5.71-4.13c-5.59,2.9-10.79,5.33-15.7,8.24-3.34,2-6.65,4-10,6.08s-7,3.39-10.19,5.71c-4.06,2.93-9,4.7-12.34,8.63Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M836.2-49.46,835-51.9c.22-5.93-.74-12.35,1.43-19l2.79-2.79,2.69-.69c.76-.2,1.79-.81,2.22-.52,2.43,1.62,5.09.89,7.63.89Q974-74,1096.24-74c2.53,0,5.21.75,7.62-.91.39-.27,1.25,0,1.87.19,1.21.3,2.41.68,4.47,1.28a17.85,17.85,0,0,1,2,2.26,7.71,7.71,0,0,1,1.81,4.76c-.12,5.33,0,10.66,0,16a8.42,8.42,0,0,1-6.51,2.54q-133-.07-266,0C839.76-48,837.89-47.49,836.2-49.46Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#69e8f4" }}
                  />
                  <path
                    d="M999.08-14a9,9,0,0,1,6,6.46c-1.19,2.78-2.52,5.73-3.74,8.72-3.24,8-6.6,15.92-9.4,24.09-1.19,3.48-3.37,6.6-4.68,10.05-2.4,6.34-4.77,12.72-7.45,18.9-2,4.5-3.67,9.15-5.65,13.66-2.59,5.89-5.53,11.69-7.23,18a49.32,49.32,0,0,1-4,9.34c-2,4-3.43,8.25-5.08,12.39s-3.48,8.22-4.94,12.45a42.46,42.46,0,0,1-4,8.31c-.76,1.22-2.43,1.89-3.61,2.76l-5-2.46c-1.95-3.13-1.32-6.24.29-9.93,3-6.75,6.23-13.39,8.5-20.46a112.64,112.64,0,0,1,5-12.43c2.23-4.91,3.94-10,6.09-15,1.91-4.37,3.83-8.75,5.59-13.18s3.81-9.08,5.34-13.78c.89-2.77,2.42-5.32,3.52-8,1.92-4.7,3.94-9.36,5.5-14.22.79-2.45,2.95-4.42,3-7.24,3.68-6.32,5.38-13.44,8.18-20.1C992.78-9.31,994.82-12.78,999.08-14Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M1029.89,84h-3.44c-2-2.27-4.88-4.1-5.58-7.67,1.74-3.44,4.52-5.61,7.81-7.65,5.82-3.61,12.24-6.2,17.72-10.43,1.91-1.47,4.42-2.14,6.63-3.24a14.76,14.76,0,0,0,1.94-1.33V51.41a7.68,7.68,0,0,1-1.18-.42c-4.4-2.32-8.67-4.87-12.91-7.48-3.69-2.26-7.82-3.8-11.33-6.43-.48-.36-1.17-.42-1.68-.74a31.68,31.68,0,0,1-3.12-2.12,10.39,10.39,0,0,1-2.11-2.13,29.07,29.07,0,0,1-1.7-3.2c.2-3,2.21-4.73,4.13-6.4a5.93,5.93,0,0,1,7.44-.46c3.16,2.06,6.35,4.09,9.32,6.41,1.21,1,3.21-.26,3.82,1.71,5.11,3,10.24,5.86,15.32,8.86,4.7,2.77,9.42,5.51,14,8.52,1.86,1.23,3.37,3.19,3,5.67a6.64,6.64,0,0,1-3.49,5.07c-5.55,3.45-11.23,6.65-17,9.8-6,3.31-11.74,7.07-17.65,10.54C1036.78,80.41,1033.58,82,1029.89,84Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                  <path
                    d="M873,55.63v-5.1c3.38-3.93,8.28-5.7,12.34-8.63,3.21-2.32,6.87-3.67,10.19-5.71s6.62-4.09,10-6.08c4.91-2.91,10.11-5.34,15.7-8.24L926.91,26v4.74c-2.62,1.94-5.27,4.68-8.5,6.14-6.67,3-12.36,7.68-19.14,10.48-2.71,1.12-5,3.26-7.7,5.09a9,9,0,0,0,3.92,3.68,163.85,163.85,0,0,1,16.66,9.32c3,1.83,6.41,3.13,9.23,5.4,1.49,1.2,3.13,2.22,4.57,3.23v5.76l-4.84,3.29c-6.48-1.64-10.49-7.08-16.66-8.18-4.77-4.15-10.69-6.43-16-9.79C883.38,61.9,877.58,59.71,873,55.63Z"
                    transform="translate(1235 316)"
                    style={{ fill: "#40356f" }}
                  />
                </g>
              </svg>
            </Button>
            <Hidden lgDown>
              {tabs}
              <Button
                style={{ marginLeft: "1.5em" }}
                component="a"
                href="https://www.linkedin.com/in/cdiorio"
                target="_blank"
                disableRipple
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
              <Button
                style={{ marginRight: "1.5em" }}
                component="a"
                href="https://github.com/PupRiku"
                target="_blank"
                disableRipple
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Button>
            </Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
