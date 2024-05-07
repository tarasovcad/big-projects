import React from 'react';
import './Cart.scss';
export const Cart = () => {
  return (
    <div className="cart-wrapper">
      <img className="image" src="../../../src/assets/1.jpg" alt="" />
      <div className="cart">
        <div className="time-backround">
          <p className="time">15 min</p>
        </div>

        <div className="title-backround">
          <p className="title">Keeping Debit & Credit Cards safe. Best Practices</p>
        </div>
      </div>
    </div>
  );
};
