import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { Link as Scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  root: {
    opacity: "0.9",
    height: "100vh",
    backgroundColor: "none",
    display: "flex",
    flexDirection: "column",
  },
  expand: {
    color: "#f2f5f5",
    fontSize: "3rem",
  },
  title: {
    textAlign: "center",
  },

  list: {
    padding: 20,
  },
  listItem: {
    textDecoration: "none",
    listStyleType: "none",
  },
}));
const Menu: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Menu</h1>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Scroll to="foods" smooth={true}>
            <IconButton>Our foods</IconButton>
          </Scroll>
        </li>
        <li className={classes.listItem}>
          <Scroll to="about" smooth={true}>
            <IconButton>About us</IconButton>
          </Scroll>
        </li>

        <li className={classes.listItem}>
          <Scroll to="franchise" smooth={true}>
            <IconButton>Franchise</IconButton>
          </Scroll>
        </li>
        <li className={classes.listItem}>
          <Scroll to="contacts" smooth={true}>
            <IconButton>Contacts</IconButton>
          </Scroll>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
