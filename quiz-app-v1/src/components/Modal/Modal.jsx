import React from 'react';
import './Modal.scss';
export const Modal = ({ setCloseModal, removeOverflowHiddenToBody, setShowQuiz }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="text-modal">
          <h3>Start a Quiz?</h3>
          <p>After pressing Yes you are not alloud to retest</p>
        </div>
        <div className="buttons">
          <button
            className="cancel"
            onClick={() => {
              setCloseModal(false), removeOverflowHiddenToBody();
            }}>
            Cancel
          </button>
          <button
            className="yes"
            onClick={() => {
              setShowQuiz(true);
            }}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
