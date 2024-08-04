import GameField from '../../modules/game/game-field.tsx';
import { useState } from 'react';

const GamePage = () => {
  const [count, setCount] = useState(0);

  return <GameField count={count} setCount={setCount} />;
};

export default GamePage;
