import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';
import './Board.css';

export default function Board() {
  const { gameBoard, gameMessage } = useGameContext();
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <h2>{gameMessage}</h2>
      <div className="box-container">
        {gameBoard.map((box, index) => (
          <Box key={index} {...{ box }} {...{ index }} />
        ))}
      </div>
    </main>
  );
}
