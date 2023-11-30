import { useState } from 'react';
import { Card } from '../components';
import { GameCard } from '../types/game';
import { container } from './Game.styles';
import { createCardsBoard } from '../utils/game.util';
import { CARD_IMAGES, NUM_OF_CARDS } from '../constants/game';

const FLIP_CARDS_TIMEOUT = 1000;

const Game = () => {
  const [cards, setCards] = useState(createCardsBoard(CARD_IMAGES, NUM_OF_CARDS));
  const [clickedCard, setClickedCard] = useState<undefined | GameCard>(undefined);

  const handleCardClick = (currentClickedCard: GameCard) => () => {
    // Flip the clicked card
    setCards((prev) => prev.map((card) => (card.id === currentClickedCard.id ? { ...card, flipped: true } : card)));

    if (!clickedCard) {
      setClickedCard(currentClickedCard);
      return;
    }

    const isMatched = clickedCard.matchingCardId === currentClickedCard.id;

    // If it's not a match, wait one second and flip the cards back
    if (!isMatched) {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, flipped: false } : card
          )
        );
      }, FLIP_CARDS_TIMEOUT);
    }

    setClickedCard(undefined);
  };

  return (
    <section className={container}>
      {cards.map((card, index) => (
        <Card key={`c-${index}`} frontImg={card.image} isFlipped={card.flipped} onClick={handleCardClick(card)} />
      ))}
    </section>
  );
};

export default Game;
