import { makeStyles } from "@material-ui/core";
import * as React from "react";
import Checkout from "../Checkout/Checkout";
import { FoodProps } from "../FoodCard";
import FoodItem from "./FoodItem";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "brown",
    minWidth: "250px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  containerTitle: {
    color: "#FF6F61",
    alignSelf: "center",
    fontSize: "2rem",
  },
}));
type Props = {
  cartItems: FoodProps[];
  addToCart: (clickedItem: FoodProps) => void;
  removeFromCart: (id: number) => void;
};
export const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const classes = useStyles();
  const calculateTotal = (items: FoodProps[]) =>
    items.reduce((ack: number, item) => ack + item!.amount * item.price, 0);
  let total = Number(calculateTotal(cartItems).toFixed(2));
  return (
    <>
      <div className={classes.root} id="foods">
        <div className={classes.container}>
          <h2 className={classes.containerTitle}>Your order is here</h2>
          {cartItems.length === 0 ? <p>You did not ordered yet</p> : null}
          {cartItems.map((item) => (
            <FoodItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
          <h2 className={classes.containerTitle}>Total:₱{total}</h2>
        </div>
        <Checkout total={total} items={cartItems} />
      </div>
    </>
  );
};
