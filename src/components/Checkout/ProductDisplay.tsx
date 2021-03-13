import { makeStyles } from "@material-ui/core";
import { FoodProps } from "../FoodCard";
import { CheckoutProduct } from "./CheckoutProduct";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
  },
  image: {
    height: 20,
    width: 20,
  },
  title: {
    alignSelf: "center",
  },
  qty: {
    alignSelf: "center",
  },
  button: {
    height: "36px",
    background: "#556cd6",
    color: "white",
    width: "100%",
    fontSize: "14px",
    border: "0",
    fontWeight: 500,
    cursor: "pointer",
    letterSpacing: "0.6",
    borderRadius: "0 0 6px 6px",
    transition: "all 0.2s ease",
    boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
    ":disabled": {
      background: "#85899c",
    },
    // #checkout-button:hover {
    //   opacity: 0.8;
    // }
  },
}));

type Props = {
  total: number;
  items: FoodProps[];
  handleClick: (items: FoodProps[]) => Promise<string | undefined>;
};

export const ProductDisplay: React.FC<Props> = ({
  total,
  items,
  handleClick,
}) => {
  const classes = useStyles();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  //TODO add form with email and address
  return (
    <section>
      {items.map((item) => (
        <CheckoutProduct
          key={item.id}
          name={item.name}
          image={item.image}
          amount={item.amount}
        />
      ))}
      <div className={classes.container}>
        <h5>Pay by card</h5>

        <form>
          {/* <input onSubmit={() => handleSubmit}></input> */}
          <button
            disabled={total === 0}
            className={classes.button}
            type="button"
            role="link"
            id="checkout-button"
            onClick={() => handleClick(items)}
          >
            Pay ₱{total}
          </button>
        </form>
      </div>
    </section>
  );
};
