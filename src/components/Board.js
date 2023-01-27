import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';

export default function Board() {
  const { boxes } = useGameContext();
  return (
    <div>
      <h1>Tic Tac Toe!</h1>
      <div>
        {boxes.map((box) => (
          <Box key={box.space} />
        ))}
      </div>
    </div>
  );
}
