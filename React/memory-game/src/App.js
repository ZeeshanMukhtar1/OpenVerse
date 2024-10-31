// src/App.js
import React from "react";
import Board from "./components/Board";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Board />
      <dialog id="modal" className="modal">
        <h2>Congratulations!</h2>
        <p>You have won the game</p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </dialog>
    </div>
  );
}

export default App;
