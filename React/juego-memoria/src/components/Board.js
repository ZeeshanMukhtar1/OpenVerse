// src/components/Board.js
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Card from "./Card";
import "../styles/Board.css";

const cardImages = [
  { src: "/img/astronaut.png", matched: false },
  { src: "/img/rocket.png", matched: false },
  { src: "/img/star.png", matched: false },
  { src: "/img/moon.png", matched: false },
  { src: "/img/planet.png", matched: false },
  { src: "/img/saturn.png", matched: false },
];

function Board() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  function launchConfetti() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  // Check if the game is over
  useEffect(() => {
    if (
      cards.length > 0 &&
      cards.every((card) => card.matched === true)
    ) {
      launchConfetti();
      const modal = document.getElementById("modal");
      modal.showModal();
    }
  }, [cards, turns]);

  // Start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="board">
      <h1>Memory Game</h1>
      <button className="btn-new-game" onClick={shuffleCards}>
        New Game
      </button>
      <p>Turns: {turns}</p>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === choiceOne || card === choiceTwo || card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
