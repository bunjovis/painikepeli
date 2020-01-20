import React from 'react';
import { Link } from 'react-router-dom';
import './GameOver.css';

function GameOver() {
  return (
    <div className="gameover">
      <h2>Game over!</h2>
      <Link to="/">Start again?</Link>
    </div>
  );
}

export default GameOver;
