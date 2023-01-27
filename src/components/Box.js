import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ box }) {
  const { active, setBoxes, setCurrentPlayer, currentPlayer, setGameMessage, boxes } =
    useGameContext();

  const handleClick = () => {
    // If the space already contains an ‘X’ or an ‘O’, return
    console.log('box stuff', box);

    if (box.content === 'X' || box.content === 'O') {
      console.log('occupied space clicked');
      return;
      //   // If the game is no longer active, return
      // } else if (!active) {
      //   return;
      //   // Otherwise, set the space’s content to the current player
    } else {
      console.log('empty space clicked');
      //   setBoxes(currentPlayer);
      // }
      // Switch current player
      // if (currentPlayer === 'X') {
      //   setCurrentPlayer('O');
      // } else {
      //   setCurrentPlayer('X');
      // }
      // // reset gameMessage
      // setGameMessage(`Your turn ${currentPlayer}`);
      //   console.log('currentPlayer end of handleClick:', currentPlayer);
    }
  };
  return (
    <div className="box" onClick={() => handleClick()}>
      <h1>{box.content}</h1>
    </div>
  );
}
