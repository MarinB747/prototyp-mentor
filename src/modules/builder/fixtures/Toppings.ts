import { Topping } from "../";
import ananas from "../../../assets/ananas.png";
import gljiva from "../../../assets/gljiva.png";
import jaje from "../../../assets/jaje.png";
import kukuruz from "../../../assets/kukuruz.png";
import meso from "../../../assets/meso.png";
import paprika from "../../../assets/paprika.png";
import slanina from "../../../assets/slanina.png";

export const toppings: Topping[] = [
  {
    type: "chilli",
    name: "Chilli",
    price: 1.5,
    icon: paprika,
    selected: false
  },
  {
    type: "corn",
    name: "Corn",
    price: 1.5,
    icon: kukuruz,
    selected: false
  },
  {
    type: "egg",
    name: "Egg",
    price: 1.5,
    icon: jaje,
    selected: false
  },
  {
    type: "pineapple",
    name: "Pineapple",
    price: 1.5,
    icon: ananas,
    selected: false
  },
  {
    type: "meat",
    name: "Meat",
    price: 1.5,
    icon: meso,
    selected: false
  },
  {
    type: "shrooms",
    name: "Shrooms",
    price: 1.5,
    icon: gljiva,
    selected: false
  },
  {
    type: "bacon",
    name: "Bacon",
    price: 1.5,
    icon: slanina,
    selected: false
  }
];
