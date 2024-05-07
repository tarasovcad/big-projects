//import { useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './App.scss';
import { Cart } from './components/Cart/Cart';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="quiz-wrapper">
        <h1>All Quizes</h1>
        <div className="quiz-cards">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
