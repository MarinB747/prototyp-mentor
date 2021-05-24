import React from "react";
import "../../../css/components.pizzasize.css";
interface PizzaSizeProps {
  name: string;
}
export const PizzaSizeItem: React.FC<PizzaSizeProps> = (props): JSX.Element => {
  return (
    <div>
      <div className="pizza__size">{props.name}</div>
    </div>
  );
};
