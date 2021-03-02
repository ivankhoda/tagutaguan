import { IconButton, makeStyles } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import * as React from "react";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.breakpoints.down("sm")]: {
      //flexDirection: "column",
    },
  },
  expandContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  expand: {
    color: "#f2f5f5",
    fontSize: "3rem",
  },
}));
type scrollerProps = {
  path: string;
};

export const Scroller: React.FC<scrollerProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.expandContainer}>
      <Scroll to={props.path} smooth={true}>
        <IconButton>
          <ExpandMore className={classes.expand} />
        </IconButton>
      </Scroll>
    </div>
  );
};
