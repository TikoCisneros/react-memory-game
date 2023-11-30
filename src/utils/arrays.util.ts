export const getRandomElements = <T> (array: T[], numElements: number): T[] => {
  if (numElements > array.length) {
    throw new Error('numElements cannot be greater than array length'); 
  }
  
  return shuffle(array).slice(0, numElements);
}

export const shuffle = <T> (array: T[]): T[] => array.sort(() => Math.random() - 0.5);