import React from "react";
import "../../../css/components.selectedsize.css";
interface PizzaItemProps {
  name: string;
}
export const SelectSizeItem: React.FC<PizzaItemProps> = (
  props
): JSX.Element => {
  return <div className="select__size">{props.name}</div>;
};
