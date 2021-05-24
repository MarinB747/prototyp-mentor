import React from "react";
import "../../../css/components.selectedtopping.css";
interface PizzaToppingProps {
  icon: string;
  name: string;
}
export const SelectToppingItem: React.FC<PizzaToppingProps> = (
  props
): JSX.Element => {
  return (
    <div className="select__topping--outer">
      <div className="select__topping--inner">
        <img src={props.icon} alt="" />
      </div>
      <text style={{ marginBottom: "20px" }}>{props.name}</text>
    </div>
  );
};
