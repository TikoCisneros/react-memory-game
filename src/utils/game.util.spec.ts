import { cardMapping, createCardsBoard, getImagesArray } from './game.util';

describe('getImagesArray', () => {
  it('returns array of string image urls', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg'];
    const numOfCards = 2;

    const result = getImagesArray(numOfCards)(cardImgs);

    expect(result).toEqual(expect.arrayContaining([expect.any(String), expect.any(String)]));
  });
});

describe('cardMapping', () => {
  it('returns array of game cards', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg'];
    const numCards = 2;

    const result = cardMapping(numCards)(cardImgs);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          image: expect.any(String),
          matchingCardId: expect.any(String),
        }),
      ])
    );
  });

  it('duplicates input images', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg'];
    const numCards = 2;

    const result = cardMapping(numCards)(cardImgs);

    expect(result.map((c) => c.image)).toEqual([...cardImgs, ...cardImgs]);
  });

  it('maps matching card ids', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    const numCards = 2;

    const result = cardMapping(numCards)(cardImgs);

    expect(result[0].matchingCardId).toEqual(result[2].id);
    expect(result[1].matchingCardId).toEqual(result[3].id);
  });
});

describe('createCardsBoard', () => {
  it('returns shuffled array of game cards', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    const numCards = 2;

    const result = createCardsBoard(cardImgs, numCards);

    expect(result).toHaveLength(4);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          image: expect.any(String),
          matchingCardId: expect.any(String),
        }),
      ])
    );
  });

  it('shuffles cards', () => {
    const cardImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    const numCards = 2;

    const result1 = createCardsBoard(cardImgs, numCards);
    const result2 = createCardsBoard(cardImgs, numCards);

    expect(result1).not.toEqual(result2);
  });
});
