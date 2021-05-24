import React from "react";
import "../../../css/components.appcontainer.css";
import "../../../css/components.ordercompleted.css";
import { Header } from "modules/builder";
import pizzaImg from "../../../assets/pizzaimg.png";
import { useHistory } from "react-router-dom";
export const OrderCompleted: React.FC<{}> = () => {
  const history = useHistory();
  const handleBuy = () => history.push("/");
  return (
    <div className="app__container">
      <Header />
      <div className="order__wrapper">
        <img src={pizzaImg} alt="" />
        <div className="order__container--right">
          <h1>Your Pizza! Pizza! is on it's way!</h1>
          <text className="order__text">
            You should be enjoying your meal in no more than 45 minutes.
          </text>
          <button className="order__button" onClick={handleBuy}>
            Buy another
          </button>
        </div>
      </div>
    </div>
  );
};
