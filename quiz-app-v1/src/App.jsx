//import { useState } from 'react';
import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import './App.scss';
import { Cart } from './components/Cart/Cart';
import { jsQuizz } from './data';
import { Quiz } from './components/Quiz/Quiz';

function App() {
  const [currentCart, setCurrentCart] = useState(0);
  const { title, time, imageUrl } = jsQuizz[currentCart];
  //let [question, setQuestion] = useState(data[index]);
  console.log(title, time);
  return (
    <div className="wrapper">
      <Header />
      <div className="quiz-wrapper">
        <h1>All Quizes</h1>
        <div className="quiz-cards">
          {jsQuizz.map((obj, index) => (
            <Cart title={obj.title} time={obj.time} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
