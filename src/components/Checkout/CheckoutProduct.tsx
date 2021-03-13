import { makeStyles } from "@material-ui/core";

type CartProduct = {
  image: string;
  name: string;
  amount: number;
};
const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    flexDirection: "row",
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
}));
export const CheckoutProduct: React.FC<CartProduct> = (props) => {
  const classes = useStyles();
  // console.log(props);
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{props.name}</h3>
      <p className={classes.qty}>QTY:{props.amount}</p>
    </div>
  );
};
