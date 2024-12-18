import { useFood } from "../../Context/FoodContext";
import "./placeOrder.css";
import React from "react";

const PlaceOrder = () => {
  const { totalCount, DELIVERY_FEE } = useFood();

  return (
    <form className="place-order layout">
      <div className="place-order-left">
        <p className="place-order-title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zipcode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-content">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalCount() > 0 ? DELIVERY_FEE : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <strong>Total</strong>
              <strong>${totalCount() > 0 ? totalCount() + DELIVERY_FEE : 0}</strong>
            </div>
            <hr />
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
