import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    minWidth: 200,
    maxWidth: 235,
    maxHeight: 450,
    background: "rgba(0,0,0, 0.5)",
    padding: "10px",
    margin: "10px",
  },
  media: {
    minHeight: 240,
    //maxHeight: 240,
    minWidth: 200,
    maxWidth: 200,

    backgroundSize: "cover",
  },
  content: {
    minHeight: 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "start",
  },
  title: {
    color: "#f2f5f5",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  description: {
    color: "#f2f5f5",
    fontSize: "1rem",

    lineHeight: "20px",
  },
  price: {
    color: "#f2f5f5",
    fontSize: "1.25rem",
    paddingLeft: "16px",
  },
  button: {},
});

export type FoodProps = {
  id: any;
  image: string;
  name: string;
  description?: string;
  price: number;
  checked?: boolean;
  amount: number;
};
type Props = {
  item: FoodProps;
  handleAddToCart: (clickedItem: FoodProps) => void;
};

export const FoodCard: React.FC<Props> = ({ item, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <div>
      {/* <Collapse in={item.checked} {...(item.checked ? { timeout: 1000 } : {})}> */}
      <Grid container spacing={3}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.name}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {item.description}
            </Typography>
          </CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.price}
          >
            ₱{item.price}
          </Typography>
          <Button
            className={classes.button}
            size="small"
            disableElevation
            variant="contained"
            onClick={() => handleAddToCart(item)}
          >
            Add to Order
          </Button>
        </Card>
      </Grid>
      {/* </Collapse> */}
    </div>
  );
};
