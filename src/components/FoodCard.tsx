import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    minWidth: 200,
    maxWidth: 235,
    height: 400,
    background: "rgba(0,0,0, 0.5)",
    padding: "10px",
    margin: "10px",
  },
  media: {
    minHeight: 240,
    maxHeight: 240,
    minWidth: 200,
    maxWidth: 200,

    backgroundSize: "cover",
  },
  title: {
    color: "#f2f5f5",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  description: {
    color: "#f2f5f5",
    fontSize: "0.75rem",
  },
});

export type FoodProps = {
  id?: number;
  image: string;
  name: string;
  description: string;
  checked?: boolean;
};

export const FoodCard: React.FC<FoodProps> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Collapse
        in={props.checked}
        {...(props.checked ? { timeout: 1000 } : {})}
      >
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};
