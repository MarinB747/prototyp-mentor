import React, { useState } from "react";
import { Header } from "modules/builder";
import "../../../css/components.appcontainer.css";
import "../../../css/components.pizza.css";
import { PizzaToppingItem, toppings, SelectToppingItem } from "modules/builder";

export const Pizza: React.FC = () => {
  let [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <div className="app__container">
      <Header />
      <p className="titles">Toppings! Toppings!</p>
      <div className="pizza__topping--wrapper">
        {toppings.map(toppings => (
          <button className="topping__button" onClick={handleSelect}>
            {selected ? (
              <SelectToppingItem name={toppings.name} icon={toppings.icon} />
            ) : (
              <PizzaToppingItem name={toppings.name} icon={toppings.icon} />
            )}
          </button>
        ))}
      </div>
      <p className="titles">Pizza! Pizza! size</p>
      <p className="titles">Get the discount</p>
    </div>
  );
};
