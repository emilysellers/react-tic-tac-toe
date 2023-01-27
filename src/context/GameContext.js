import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn X');
  const [boxes, setBoxes] = useState([
    { space: 0, content: '' },
    { space: 1, content: 'X' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: 'O' },
    { space: 5, content: '' },
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

// function handleClick() {
//   const { currentPlayer, setCurrentPlayer, setGameMessage } = useGameContext;
//   if (currentPlayer === 'X') {
//     setCurrentPlayer('O');
//   } else {
//     setCurrentPlayer('X');
//   }
//   setGameMessage(`Your turn ${currentPlayer}`);
//   console.log(currentPlayer);
// }

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
