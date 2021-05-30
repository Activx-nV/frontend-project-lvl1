/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let counter = 2; counter <= num / 2; counter += 1) {
    if (num % counter === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };
  return result;
};

export default () => brainGame(brainPrime, gameDescription);
