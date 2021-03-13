import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { FoodProps } from "../FoodCard";
import { ProductDisplay } from "./ProductDisplay";
//import "./App.css";

//import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Message = (props: {
  message:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <section>
      <p>{props.message}</p>
    </section>
  );
};
type CheckoutProps = {
  total: number;
  items: FoodProps[];
};
const Checkout: React.FC<CheckoutProps> = (props) => {
  const [message, setMessage] = useState("");
  console.log(props);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const handleClick = async (items: FoodProps[]) => {
    const stripe = await stripePromise;
    const response = await fetch(
      "http://localhost:3001/create-checkout-session",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(items),
      }
    );

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
    if (result?.error) {
      return result.error.message;
    }
  };
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay
      total={props.total}
      items={props.items}
      handleClick={() => handleClick(props.items)}
    />
  );
};
export default Checkout;
function useStyles() {
  throw new Error("Function not implemented.");
}
