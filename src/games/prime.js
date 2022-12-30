import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;

  const sqrt = Math.sqrt(number);

  for (let counter = 2; counter <= sqrt; counter += 1) {
    if (number % counter === 0) return false;
  }

  return true;
};

const brainPrime = () => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const question = String(randomNumber);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export default () => brainGame(brainPrime, gameDescription);
