import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { FoodCard, FoodProps } from "./FoodCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.breakpoints.down("sm")]: {},
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

type Props = {
  items: FoodProps[];
  handleAddToCart: (clickedItem: FoodProps) => void;
};

export const Foods: React.FC<Props> = ({ items, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="foods">
        {items
          ? items?.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            ))
          : ""}
      </div>
    </>
  );
};
