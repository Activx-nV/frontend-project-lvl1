import { getPredicateQA } from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let counter = 2; counter <= num / 2; counter += 1) {
    if (num % counter === 0) return false;
  }

  return true;
};

const brainPrime = () => getPredicateQA(isPrime);

export default () => brainGame(brainPrime, gameDescription);
