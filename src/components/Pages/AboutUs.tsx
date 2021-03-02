import { makeStyles } from "@material-ui/core";
import * as React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    opacity: "0.9",
    height: "100vh",
    backgroundColor: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#f2f5f5",
    fontSize: "2rem",

    textAlign: "center",
    margin: 0,
    maxWidth: 400,
  },
  desc: {
    color: "#f2f5f5",
    fontSize: "1rem",
    maxWidth: 400,
    textAlign: "start",
  },
}));
export const About: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.root}>
      <h1 className={classes.title}>About Us</h1>

      <p className={classes.desc}>
        We are family managing local business. We serve street food and
        milkteas. We love what we do.
      </p>
      <p className={classes.desc}>
        Tagutaguan because we are a little bit hide from main road and located
        inside our friendly neibourhood.
      </p>
    </div>
  );
};
