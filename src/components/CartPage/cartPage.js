import React from "react";
import './cart-asset/cart.css';

const CartPage = ({ cartProduct }) => {

  return (
    <div>
      {cartProduct.map(item => (
        <div key={item.id} className="cart-container">
          <div className="price-quantity-total-container">
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
          <div className="eachItem-container">
            <div className="eachItem-container-item1">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="eachItem-container-item2">
                <div>{item.category}</div>
                <div>{item.title}</div>
                <div>
                  <button>Remove item</button>
                </div>
              </div>
            </div>
            <div className="eachItem-container-item3">
              <div>${item.price}</div>
              <div className="quantity-container">
                <div>
                  <button type="button">-</button>
                </div>
                <div>1</div>
                <div>
                  <button type="button">+</button>
                </div>
              </div>
              <div>$total</div>
            </div>
          </div>
          <div className="eachItem-submission-container">
            <div>Total Amount</div>
            <div className="eachItem-submission">
              <div>Continue shopping</div>
              <div>Update Cart</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartPage;