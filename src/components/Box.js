import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ box }) {
  const { active, setCurrentPlayer, currentPlayer, setGameMessage, gameBoard, setGameBoard } =
    useGameContext();

  const handleClick = () => {
    // If the space already contains an ‘X’ or an ‘O’, return
    if (box.content === 'X' || box.content === 'O') {
      return;
    }
    // If the game is no longer active, return
    if (!active) {
      return;
    }
    // Otherwise, set the space’s content to the current player
    else {
      box.content = currentPlayer;
      const newBoard = [...gameBoard];
      setGameBoard(newBoard);
    }
    // Switch current player
    currentPlayer === 'X'
      ? setCurrentPlayer('O')(setGameMessage("You're up, O."))
      : setCurrentPlayer('X')(setGameMessage("You're up, X."));
  };

  return (
    <div className="box" onClick={() => handleClick()}>
      <p>{box.content}</p>
    </div>
  );
}
