import React from "react";
import "../../../css/components.pizza.css";

export const DiscountCode: React.FC = () => {
  return (
    <>
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
    </>
  );
};
