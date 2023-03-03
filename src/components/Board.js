import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';
import './Board.css';

export default function Board() {
  const { gameBoard, gameMessage, setGameBoard, setActive, setGameMessage, setCurrentPlayer } =
    useGameContext();
  const handleButtonClick = () => {
    const cleanGameBoard = gameBoard.map((box) => ({ ...box, content: '' }));
    setGameBoard(cleanGameBoard);
    setCurrentPlayer('X');
    setActive(true);
    setGameMessage("From the top! You're up, X.");
  };
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <h2>{gameMessage}</h2>
      <div className="box-container">
        {gameBoard.map((box, index) => (
          <Box key={index} {...{ box }} {...{ index }} />
        ))}
      </div>
      <button className="playAgainBtn" onClick={() => handleButtonClick()}>
        Play again
      </button>
    </main>
  );
}
