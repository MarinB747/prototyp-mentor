import { ToppingType } from "./";

export interface Topping {
  type: ToppingType;
  name: string;
  price: number;
  isVegeterian: boolean;
  isGlutenFree: boolean;
  isHot: boolean;
  icon: string;
  selected: boolean;
}
