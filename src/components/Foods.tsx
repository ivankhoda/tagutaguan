import { makeStyles } from "@material-ui/core";
import * as React from "react";
import foods from "../data/data";
import useWindowPosition from "../hook/Hook";
import { FoodCard } from "./FoodCard";
import { Scroller } from "./Scrollers/Scroller";

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

export const Foods: React.FC = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <>
      <div className={classes.root} id="foods">
        {foods
          ? foods.map((food) => (
              <FoodCard
                key={food.id}
                image={food.image}
                name={food.name}
                description={food.description}
                checked={checked}
              />
            ))
          : ""}
      </div>
      <Scroller path={"about"} />
    </>
  );
};
