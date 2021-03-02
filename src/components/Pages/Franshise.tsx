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
export const Franchise: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="franchise" className={classes.root}>
      <h1 className={classes.title}>Join us. It's easy.</h1>

      <p className={classes.desc}></p>
      <p className={classes.desc}>
        Welcomed by all local foodies, it is easy to join our family and became
        a partner.
        <br />
        Our main adavntages: unique family brand, consistent growth, outstanding
        suppliers.
      </p>
    </div>
  );
};
