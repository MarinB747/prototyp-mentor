import React from "react";
import "../../../css/component.header.css";

export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <span>Pizz-á-tron</span>🍕
      <button className="header__button--logout">Log out</button>
    </div>
  );
};
