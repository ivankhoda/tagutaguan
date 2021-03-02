import {
  AppBar,
  Collapse,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { Scroller } from "./Scrollers/Scroller";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  icon: {
    color: "#f2f5f5",
    fontSize: "2rem",
    //"8739F9",
  },
  appbarTitle: { flex: "1" },
  appbarToolbar: {
    width: "80%",
    margin: "0 auto",
  },
  title: {
    color: "#f2f5f5",
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
  },
  container: {
    textAlign: "center",
  },
  expand: {
    color: "#f2f5f5",
    fontSize: "3rem",
  },
}));
export const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [menuOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarToolbar}>
          <h1 className={classes.appbarTitle}>
            Tagutaguan <br />
            food house
          </h1>
          <IconButton aria-label="menu" onClick={() => setMenuIsOpen(true)}>
            <FastfoodIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuIsOpen(false)}
      >
        <Menu />
      </Drawer>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Philippines authentic
            <br /> street food
          </h1>

          <Scroller path={"foods"} />
        </div>
      </Collapse>
    </div>
  );
};
