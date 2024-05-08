import React from 'react';
import './Quiz.scss';
export const Quiz = () => {
  return (
    <div className="question-wrapper">
      <button>
        <img
          className="sound"
          src="./../.././../src/assets/sound.svg"
          alt=""
          width={36}
          height={30}
        />
      </button>

      <div className="index">
        <span>02/</span>
        <span>25</span>
      </div>
      <div className="question">
        <div className="question-backround"></div>
        <h3>Inside which HTML element do we put the JavaScript? </h3>
      </div>

      <div className="time">
        <div className="time-backround"></div>
        <span>00:30</span>
      </div>
      <ul>
        <div className="ul-backround "></div>
        <li className="not-selected">ruby</li>
        <li className="not-selected">htmlcssdsd</li>
        <li className="not-selected">c++</li>
        <li className="not-selected">java</li>
      </ul>
      <p>
        Next <span>{'>'}</span>
      </p>
    </div>
  );
};
