import { Card } from '../components';
import { container } from './Game.styles';

const Game = () => {
  return (
    <section className={container} >
      {Array(24)
        .fill('')
        .map((_val, index) => (
          <Card key={`c-${index}`} />
        ))}
    </section>
  );
};

export default Game;
