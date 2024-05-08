//import { useState } from 'react';
import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import './App.scss';
import { Cart } from './components/Cart/Cart';
import { jsQuizz } from './data';
import { Quiz } from './components/Quiz/Quiz';

function App() {
  const [currentCart, setCurrentCart] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const { title, time, imageUrl } = jsQuizz[currentCart];
  console.log(title, time);
  return (
    <div className="wrapper">
      <Header />

      {showQuiz === true ? (
        <Quiz />
      ) : (
        <div className="quiz-wrapper">
          <h1>All Quizes</h1>
          <div className="quiz-cards">
            {jsQuizz.map((obj, index) => (
              <Cart
                key={index}
                title={obj.title}
                time={obj.time}
                imageUrl={obj.imageUrl}
                setShowQuiz={setShowQuiz}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
