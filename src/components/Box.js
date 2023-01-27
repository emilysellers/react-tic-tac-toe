import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ box }) {
  const { setCurrentPlayer, currentPlayer } = useGameContext();
  return (
    <div
      className="box"
      onClick={() => {
        if (currentPlayer === 'X') {
          setCurrentPlayer('O');
        }
      }}
    >
      <h1>{box.content}</h1>
    </div>
  );
}
