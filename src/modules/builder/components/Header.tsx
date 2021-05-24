import React from "react";
import "../../../css/component.header.css";
import pizza from "../../../assets/pizza.png";
export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <span style={{ fontWeight: 800 }}>Pizz-á-tron</span>
      <img src={pizza} alt="/" />
      <button className="header__button--logout">Log out</button>
    </div>
  );
};
