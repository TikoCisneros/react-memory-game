import { GameCard } from '../types/game';

import { getRandomElements, shuffle } from './arrays.util';
import { pipe } from './functions.util';

export const createCardsBoard = (cardImgs: string[], numOfCards: number): GameCard[] =>
  pipe(getImagesArray(numOfCards), cardMapping(numOfCards), shuffle)(cardImgs);

export const getImagesArray =
  (numOfCards: number) =>
  (cardImgs: string[]): string[] =>
    getRandomElements(cardImgs, numOfCards);

export const cardMapping =
  (numOfCards: number) =>
  (cardImgs: string[]): GameCard[] =>
    [...cardImgs, ...cardImgs].map((cardImg, index) => ({
      id: `jj-c-${index}`,
      flipped: false,
      image: cardImg,
      matchingCardId: index < numOfCards ? `jj-c-${index + numOfCards}` : `jj-c-${index - numOfCards}`,
    }));
