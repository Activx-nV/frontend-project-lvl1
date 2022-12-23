import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let numberOne = num1;
  let numberTwo = num2;

  if (numberOne === numberTwo) {
    return numberOne;
  }
  if (numberOne > numberTwo) {
    numberOne = num1 - num2;
  } else {
    numberTwo = num2 - num1;
  }

  return findGCD(numberOne, numberTwo);
};

const brainGCD = () => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const randomNumber2 = getMinToMaxRandomNumber(1, 99);

  const question = `${randomNumber} ${randomNumber2}`;
  const answer = String(findGCD(randomNumber, randomNumber2));

  return [question, answer];
};

export default () => brainGame(brainGCD, gameDescription);
