import { getRandomElements, shuffle } from './arrays.util';

describe('getRandomElements', () => {
  it('returns the requested number of elements', () => {
    const array = [1, 2, 3, 4, 5];
    const numElements = 3;
    const result = getRandomElements(array, numElements);

    expect(result.length).toEqual(numElements);
  });

  it('throws if numElements exceeds array length', () => {
    const array = [1, 2, 3];
    const numElements = 5;

    expect(() => {
      getRandomElements(array, numElements);
    }).toThrowError();
  });

  it('returns random elements from the original array', () => {
    const array = [1, 2, 3, 4];
    const numElements = 2;

    const result = getRandomElements(array, numElements);

    expect(array).toEqual(expect.arrayContaining(result));
    expect(result.length).toBe(numElements);
  });
});

describe('shuffle', () => {
  it('returns array of same length', () => {
    const array = [1, 2, 3];
    const result = shuffle(array);

    expect(result.length).toBe(array.length);
  });

  it('contains same elements as original array', () => {
    const array = [1, 2, 3];
    const result = shuffle(array);

    expect(result).toEqual(expect.arrayContaining(array));
  });
});
