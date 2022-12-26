import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const numberOne = num1;
  const numberTwo = num2;

  if (numberTwo === 0) {
    return numberOne;
  }

  return findGCD(numberTwo, numberOne % numberTwo);
};

const brainGCD = () => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const randomNumber2 = getMinToMaxRandomNumber(1, 99);

  const question = `${randomNumber} ${randomNumber2}`;
  const answer = String(findGCD(randomNumber, randomNumber2));

  return [question, answer];
};

export default () => brainGame(brainGCD, gameDescription);
