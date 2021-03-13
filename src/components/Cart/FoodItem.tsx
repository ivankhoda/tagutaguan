import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FoodProps } from "../FoodCard";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "250px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  title: {
    color: "#FF6F61",

    fontSize: "1rem",
  },
  info: {
    fontSize: "0.75rem",
    color: "#FF6F63",
  },
  image: {
    width: 100,
    height: 100,
  },
}));
type Props = {
  item: FoodProps;
  addToCart: (clickedItem: FoodProps) => void;
  removeFromCart: (id: number) => void;
};

const FoodItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <h3 className={classes.title}>{item.name}</h3>
        <img className={classes.image} src={item.image} alt={item.name} />
        <div className={classes.info}>
          <p>Price: ₱{item.price.toFixed(2)}</p>
          <p>QTY: {item.amount}</p>
          <p>Total: ₱{(item.amount * item.price).toFixed(2)} </p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            color="secondary"
            variant="outlined"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>

          <Button
            size="small"
            disableElevation
            color="secondary"
            variant="outlined"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
