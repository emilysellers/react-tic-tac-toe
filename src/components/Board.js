import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';
import './Board.css';

export default function Board() {
  const { boxes, gameMessage } = useGameContext();
  return (
    <main>
      <h1>Tic Tac Toe!</h1>
      <h2>{gameMessage}</h2>
      <div className="box-container">
        {boxes.map((box, index) => (
          <Box key={index} {...{ box }} />
        ))}
      </div>
    </main>
  );
}
