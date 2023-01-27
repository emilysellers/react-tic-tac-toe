import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn X');
  const [boxes, setBoxes] = useState([
    { space: 0, content: 'X' },
    { space: 1, content: 'O' },
    { space: 2, content: 'X' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: 'O' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);
  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        boxes,
        setBoxes,
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

const handleBoxClick = () => {
  if (currentPlayer === 'X') {
    setCurrentPLayer('O');
  }
  //   setBoxes(currentPlayer);
  console.log('handleBoxClick fired');
};

export { GameProvider, useGameContext };
