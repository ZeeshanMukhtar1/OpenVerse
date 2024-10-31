// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="Front of the card" />
        <img
          className="back"
          src="/img/back.png"
          onClick={handleClick}
          alt="Back of the card"
        />
      </div>
    </div>
  );
}

export default Card;
