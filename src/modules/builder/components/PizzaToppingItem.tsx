import React from "react";
import "../../../css/components.pizzatopping.css";
interface PizzaToppingProps {
  icon: string;
  name: string;
}
export const PizzaToppingItem: React.FC<PizzaToppingProps> = (
  props
): JSX.Element => {
  return (
    <div className="pizza__topping--outer">
      <div className="pizza__topping--inner">{props.icon}</div>
      {props.name}
    </div>
  );
};
