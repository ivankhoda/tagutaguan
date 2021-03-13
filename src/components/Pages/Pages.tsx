import * as React from "react";
import { FoodProps } from "../FoodCard";
import { About } from "./AboutUs";
import { Franchise } from "./Franshise";
type Props = {
  item: FoodProps;
  handleAddToCart: (clickedItem: FoodProps) => void;
};
export const Pages: React.FC = () => {
  return (
    <div>
      <About />
      <Franchise />
      {/* <Contacts /> */}
    </div>
  );
};
