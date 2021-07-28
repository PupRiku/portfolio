/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
// import Typography from "@material-ui/core/Typography";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Hidden from "@material-ui/core/Hidden";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Grid from "@material-ui/core/Grid";

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
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    color: "white",
    height: "10em",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      height: "8em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "6em",
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
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
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
    backgroundColor: theme.palette.common.blue,
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
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // const [openDrawer, setOpenDrawer] = useState(false);
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
                      key={`${option}${i}`}
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
                      key={`${option}${i}`}
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

  // const drawer = (
  //   <React.Fragment>
  //     <SwipeableDrawer
  //       disableBackdropTransition={!iOS}
  //       disableDiscovery={iOS}
  //       open={openDrawer}
  //       onClose={() => setOpenDrawer(false)}
  //       onOpen={() => setOpenDrawer(true)}
  //       classes={{ paper: classes.drawer }}
  //     >
  //       <div className={classes.toolbarMargin} />
  //       <List disablePadding>
  //         {routes.map(route =>
  //           route.name === "Services" ? (
  //             <Accordion
  //               elevation={0}
  //               key={route.name}
  //               classes={{ root: classes.expansion }}
  //             >
  //               <AccordionSummary
  //                 classes={{ root: classes.expansionSummary }}
  //                 expandIcon={<ExpandMoreIcon color="secondary" />}
  //               >
  //                 <ListItemText
  //                   className={classes.drawerItem}
  //                   disableTypography
  //                   style={{ opacity: props.value === 1 ? 1 : null }}
  //                   onClick={() => {
  //                     setOpenDrawer(false), props.setValue(route.activeIndex);
  //                   }}
  //                 >
  //                   <Link href={route.link} color="inherit">
  //                     {route.name}
  //                   </Link>
  //                 </ListItemText>
  //               </AccordionSummary>
  //               <AccordionDetails classes={{ root: classes.expansionDetails }}>
  //                 <Grid container direction="column">
  //                   {experienceOptions.map(route => (
  //                     <Grid item>
  //                       <ListItem
  //                         key={`${route}${route.selectedIndex}`}
  //                         divider
  //                         button
  //                         component={Link}
  //                         href={route.link}
  //                         selected={
  //                           props.selectedIndex === route.selectedIndex &&
  //                           props.value === 1 &&
  //                           window.location.pathname !== "/services"
  //                         }
  //                         classes={{ selected: classes.drawerItemSelected }}
  //                         onClick={() => {
  //                           setOpenDrawer(false);
  //                           props.setSelectedIndex(route.selectedIndex);
  //                         }}
  //                       >
  //                         <ListItemText
  //                           className={classes.drawerItem}
  //                           disableTypography
  //                         >
  //                           {route.name
  //                             .split(" ")
  //                             .filter(word => word !== "Development")
  //                             .join(" ")}
  //                           <br />
  //                           <span style={{ fontSize: "0.75rem" }}>
  //                             Development
  //                           </span>
  //                         </ListItemText>
  //                       </ListItem>
  //                     </Grid>
  //                   ))}
  //                 </Grid>
  //               </AccordionDetails>
  //             </Accordion>
  //           ) : (
  //             <ListItem
  //               key={`${route}${route.activeIndex}`}
  //               divider
  //               button
  //               component={Link}
  //               href={route.link}
  //               selected={props.value === route.activeIndex}
  //               classes={{ selected: classes.drawerItemSelected }}
  //               onClick={() => {
  //                 setOpenDrawer(false);
  //                 props.setValue(route.activeIndex);
  //               }}
  //             >
  //               <ListItemText className={classes.drawerItem} disableTypography>
  //                 {route.name}
  //               </ListItemText>
  //             </ListItem>
  //           )
  //         )}
  //         <ListItem
  //           classes={{
  //             root: classes.drawerItemEstimate,
  //             selected: classes.drawerItemSelected,
  //           }}
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             props.setValue(false);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           href="/estimate"
  //           selected={props.value === false}
  //         >
  //           <ListItemText className={classes.drawerItem} disableTypography>
  //             Free Estimate
  //           </ListItemText>
  //         </ListItem>
  //       </List>
  //     </SwipeableDrawer>
  //     <IconButton
  //       className={classes.drawerIconContainer}
  //       onClick={() => setOpenDrawer(!openDrawer)}
  //       disableRipple
  //     >
  //       <MenuIcon className={classes.drawerIcon} />
  //     </IconButton>
  //   </React.Fragment>
  // );

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
              <img src='/assets/headerLogo.png' alt='Chris Diorio Logo' className={classes.logo} />
            </Button>
            {tabs}
            {/* <Hidden lgUp>{drawer}</Hidden> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
