import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ box }) {
  const { active, setCurrentPlayer, currentPlayer, setGameMessage, gameBoard, setGameBoard } =
    useGameContext();

  const handleClick = () => {
    // If the space already contains an ‘X’ or an ‘O’, return
    // console.log('box stuff', box.content);
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

      //   console.log(index);
      //   console.log(gameBoard[index].content);
    }
    // Switch current player
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage('Your turn O');
    } else if (currentPlayer === 'O') {
      setCurrentPlayer('X');
      setGameMessage('Your turn X');
    }
    // reset gameMessage
    // console.log('currentPlayer at end of handleClick:', currentPlayer);
  };

  return (
    <div className="box" onClick={() => handleClick()}>
      <h1>{box.content}</h1>
    </div>
  );
}
