import React from "react";
import { Link } from "react-router-dom";
import "./cart-asset/cart.css";

const CartPage = ({ cartProduct, handleChange, handleDelete }) => {
  let initialValue = 0;
  let total = Math.floor(
    cartProduct.reduce(
      (prev, next) => prev + next.price * next.amount,
      initialValue
    )
  );
  return (
    <div>
      <div className="price-quantity-total-container">
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      {cartProduct.map((item) => (
        <div key={item.id} className="cart-container">
          <div className="eachItem-container">
            <div className="eachItem-container-item1">
              <div>
                <img className="cart-image" src={item.image} alt="" />
              </div>
              <div className="eachItem-container-item2">
                <div>{item.category}</div>
                <div>{item.title}</div>
                <div>
                  <button className="button"
                    type="button"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            </div>
            <div className="eachItem-container-item3">
              <div>${item.price}</div>
              <div className="quantity-container">
                <div>
                  <button className="button"
                    onClick={() => {
                      handleChange(item.id, -1);
                    }}
                    type="button"
                  >
                    -
                  </button>
                </div>
                <div>{item.amount}</div>
                <div>
                  <button className="button"
                    onClick={() => {
                      handleChange(item.id, 1);
                    }}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>${item.price * item.amount}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="eachItem-submission-container">
        <div>Total Amount -${total}</div>
        <div className="eachItem-submission">
          <div>
            <Link to={"/Shop"}>
              <button type="button" className="button">Continue Shopping</button>
            </Link>
          </div>
          <div>
            <button type="button" className="button">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
