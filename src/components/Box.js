import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';
// import { GameProvider } from '../context/GameContext.js';

export default function Box({ box }) {
  const { setCurrentPlayer, currentPlayer, setGameMessage } = useGameContext();

  const handleClick = () => {
    setGameMessage(`Your turn ${currentPlayer}`);
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
    console.log(currentPlayer);
  };

  return (
    <div className="box" onClick={() => handleClick()}>
      <h1>{box.content}</h1>
    </div>
  );
}
