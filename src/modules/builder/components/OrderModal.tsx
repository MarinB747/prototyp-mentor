import React from "react";
import "../../../css/components.ordermodal.css";
import "../../../css/components.appcontainer.css";
import { Header } from "modules/builder";
import { useHistory } from "react-router-dom";
export const OrderModal: React.FC = () => {
  const history = useHistory();
  const handleFinishOrder = () => {
    history.push("/completed");
  };
  return (
    <div className="app__container">
      <Header />
      <div className="modal__wrapper">
        <div className="modal__container">
          <h1>Almost done!</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="modal__details">
              <h3 className="modal__h3">Order details</h3>
              <div className="modal__toppings">
                TOPPINGS
                <text className="modal__text">Cheese, Sausage, Pineapple</text>
                <text className="modal__text">QTY: 2</text>
              </div>
              <div className="modal__lines">
                <text className="modal__text--delivery">Delivery</text>
                <text
                  className="modal__text--delivery"
                  style={{ fontSize: "0.78rem", textAlign: "start" }}
                >
                  Free delivery within 1 hour or you don't have to pay.
                </text>
              </div>
              <div className="modal__discount--wrapper">
                <div className="modal__discount--selector">
                  <input
                    placeholder="Discount code"
                    className="modal__discount--field"
                  />
                  <button className="modal__discount--button">Apply</button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <text
                  className="modal__text--delivery"
                  style={{ marginLeft: "5%", fontWeight: 500 }}
                >
                  Total price
                </text>
                <text className="modal__total">$22.50</text>
              </div>
            </div>
            <div className="modal__shipping">
              <h3 className="modal__h3">Shipping information</h3>
              <input
                className="modal__shipping--input--big"
                placeholder="Street name and number"
              />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <input
                  className="modal__shipping--input--small"
                  placeholder="City"
                />{" "}
                <input
                  className="modal__shipping--input--small"
                  placeholder="Postal Code"
                />
              </div>
              <input
                className="modal__shipping--input--big"
                placeholder="County"
              />
              <h3 className="modal__h3">Payment details</h3>
              <text className="modal__text--cash">Cash on delivery</text>
              <div
                style={{
                  margin: "5%  5%",
                  borderTop: "1px dashed #dbdbdb",
                  width: "290px"
                }}
              ></div>
              <button className="modal__button" onClick={handleFinishOrder}>
                Finish Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
