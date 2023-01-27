import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn X');
  const [gameBoard, setGameBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);
  const checkWinner = () => {
    if (
      gameBoard[0].content === gameBoard[1].content &&
      gameBoard[1].content === gameBoard[2].content
    ) {
      return gameBoard[0].content;
    }
    if (
      gameBoard[3].content === gameBoard[4].content &&
      gameBoard[4].content === gameBoard[5].content
    ) {
      return gameBoard[3].content;
    }
    if (
      gameBoard[6].content === gameBoard[7].content &&
      gameBoard[7].content === gameBoard[8].content
    ) {
      return gameBoard[6].content;
    }
    if (
      gameBoard[0].content === gameBoard[3].content &&
      gameBoard[3].content === gameBoard[6].content
    ) {
      return gameBoard[0].content;
    }
    if (
      gameBoard[1].content === gameBoard[4].content &&
      gameBoard[4].content === gameBoard[7].content
    ) {
      return gameBoard[1].content;
    }
    if (
      gameBoard[2].content === gameBoard[5].content &&
      gameBoard[5].content === gameBoard[8].content
    ) {
      return gameBoard[2].content;
    }
    if (
      gameBoard[0].content === gameBoard[4].content &&
      gameBoard[4].content === gameBoard[8].content
    ) {
      return gameBoard[0].content;
    }
    if (
      gameBoard[2].content === gameBoard[4].content &&
      gameBoard[4].content === gameBoard[6].content
    ) {
      return gameBoard[2].content;
    }
  };

  const checkGameStatus = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    }
  };

  checkGameStatus();

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        gameBoard,
        setGameBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
