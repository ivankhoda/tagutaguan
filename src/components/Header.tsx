import {
  AppBar,
  Badge,
  Collapse,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import React, { useEffect, useState } from "react";
import foods from "../data/data";
import { Cart } from "./Cart/Cart";
import { FoodProps } from "./FoodCard";
import { Foods } from "./Foods";
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

  const [cartItems, setCartItems] = useState([] as FoodProps[]);

  const getTotalItems = (items: FoodProps[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddToCart = (clickedItem: FoodProps) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handeleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as FoodProps[])
    );
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarToolbar}>
            <h1 className={classes.appbarTitle}>
              Tagutaguan <br />
              food house
            </h1>
            <IconButton aria-label="menu" onClick={() => setMenuIsOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="error">
                <FastfoodIcon className={classes.icon} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuIsOpen(false)}
        >
          <Menu />
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handeleRemoveFromCart}
          />
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
      <Foods items={foods} handleAddToCart={handleAddToCart} />
    </>
  );
};
