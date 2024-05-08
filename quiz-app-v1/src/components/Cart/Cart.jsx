import React, { useState } from 'react';
import './Cart.scss';
import { Modal } from '../Modal/Modal';

export const Cart = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const addOverflowHiddenToBody = () => {
    document.body.classList.add('overflow-hidden');
  };
  const removeOverflowHiddenToBody = () => {
    document.body.classList.remove('overflow-hidden');
  };
  return (
    <>
      {openModal && (
        <Modal
          setShowQuiz={props.setShowQuiz}
          setCloseModal={setOpenModal}
          removeOverflowHiddenToBody={removeOverflowHiddenToBody}
        />
      )}
      <div
        className="cart-wrapper"
        onClick={() => {
          setOpenModal(true), addOverflowHiddenToBody();
        }}>
        <img className="image" src={props.imageUrl} alt="" />
        <div className="cart">
          <div className="time-backround-card">
            <p className="time-card">{props.time} min</p>
          </div>

          <div className="title-backround">
            <p className="title">{props.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};
