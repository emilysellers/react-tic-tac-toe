import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';
import './Board.css';
// import background from '../water.jpeg';

export default function Board() {
  const { gameBoard, gameMessage, setGameBoard, setActive, setGameMessage, setCurrentPlayer } =
    useGameContext();
  const handleButtonClick = () => {
    // console.log('====gameBoard===', gameBoard);
    // const newGameBoard = gameBoard.map((box) => ({ ...box, content: '' }));
    // console.log('===newGameBoard===', newGameBoard);
    // setGameBoard(newGameBoard);
    const cleanSlate = [
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
    ];
    setGameBoard(cleanSlate);
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
