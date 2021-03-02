import * as React from "react";
import { Foods } from "../Foods";
import { About } from "./AboutUs";
import { Contacts } from "./Contacts";
import { Franchise } from "./Franshise";

export const Pages: React.FC = () => {
  return (
    <div>
      <Foods />
      <About />
      <Franchise />
      <Contacts />
    </div>
  );
};
