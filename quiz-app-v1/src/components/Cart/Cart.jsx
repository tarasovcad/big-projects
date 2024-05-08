import React, { useState } from 'react';
import './Cart.scss';

export const Cart = (props) => {
  {
    console.log(props.title);
  }
  return (
    <div className="cart-wrapper">
      <img className="image" src={props.imageUrl} alt="" />
      <div className="cart">
        <div className="time-backround"> 
          <p className="time">{props.time} min</p>
        </div>

        <div className="title-backround">
          <p className="title">{props.title}</p>
        </div>
      </div>
    </div>
  );
};
