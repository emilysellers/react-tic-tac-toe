import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { boxes } = useGameContext();
  console.log('boxes', boxes);
  return (
    <div>
      <Board />
    </div>
  );
}

export default App;
