import { ToppingType } from "./";

export interface Topping {
  type: ToppingType;
  name: string;
  price: number;
  icon: string;
  selected: boolean;
}
