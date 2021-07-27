import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FormControlLabel, Switch } from "@material-ui/core";
import useDarkMode from "use-dark-mode";

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

const useStyles = makeStyles(theme => ({}));

export default function Header(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openExperienceMenu, setOpenExperienceMenu] = useState(false);
  const [openLifeMenu, setOpenLifeMenu] = useState(false);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            Header
            <FormControlLabel
              control={<Switch onClick={toggleDarkMode} />}
              label="Dark Mode"
              labelPlacement="start"
              checked={isDark}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
