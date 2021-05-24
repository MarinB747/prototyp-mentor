import React, { useState } from "react";
import { Header } from "modules/builder";
import "../../../css/components.appcontainer.css";
import "../../../css/components.pizza.css";
import {
  PizzaToppingItem,
  toppings,
  SelectToppingItem,
  PizzaSizeItem,
  SelectSizeItem
} from "modules/builder";
import pizzaImg from "../../../assets/pizzaimg.png";
import { sizes } from "../fixtures/Sizes";

export const Pizza: React.FC = () => {
  let [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <div className="app__container">
      <Header />
      <p className="titles">Toppings! Toppings!</p>
      <div>
        {toppings.map(toppings => (
          <button className="topping__button" onClick={handleSelect}>
            {selected ? (
              <SelectToppingItem name={toppings.name} icon={toppings.icon} />
            ) : (
              <PizzaToppingItem name={toppings.name} icon={toppings.icon} />
            )}
          </button>
        ))}
        <p>Total price +$3.00</p>
      </div>
      <p className="titles">Pizza! Pizza! size</p>
      <div className="size__discount--wrapper">
        <div className="size__discount--selector">
          {sizes.map(sizes => (
            <button className="topping__button" onClick={handleSelect}>
              {selected ? (
                <SelectSizeItem name={sizes.name} />
              ) : (
                <PizzaSizeItem name={sizes.name} />
              )}
            </button>
          ))}
        </div>
      </div>
      <p className="titles">Get the discount</p>
      <div className="size__discount--wrapper">
        <div
          className="size__discount--selector"
          style={{ marginBottom: "200px" }}
        >
          <input
            placeholder="Enter discount code"
            className="discount__field"
          />
          <button className="discount__button">Apply</button>
        </div>
      </div>
      <div className="footer__positioner">
        <div className="footer__wrapper">
          <img className="footer__img" src={pizzaImg} alt="/" />
          <div className="footer__middle">
            <div className="footer__wrapper--inner">
              <input className="footer__qty" defaultValue="1" />
              <text>QTY</text>
            </div>
            <div
              style={{
                width: "1px",
                height: "52px",
                border: "1px dashed #DBDBDB"
              }}
            ></div>
            <div className="footer__wrapper--inner">
              <text className="footer__total">$22.50</text>
              <text>ORDER TOTAL</text>
            </div>
          </div>
          <button className="footer__button">Buy Pizza! Pizza!</button>
        </div>
      </div>
    </div>
  );
};
