import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    return numberOne;
  }

  return findGCD(numberTwo, numberOne % numberTwo);
};

const brainGCD = () => {
  const randomNumberOne = getMinToMaxRandomNumber(1, 99);
  const randomNumberTwo = getMinToMaxRandomNumber(1, 99);

  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = String(findGCD(randomNumberOne, randomNumberTwo));

  return [question, answer];
};

export default () => brainGame(brainGCD, gameDescription);
