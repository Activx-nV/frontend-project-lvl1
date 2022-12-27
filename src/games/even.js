import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (questionNumber) => questionNumber % 2 === 0;

const brainEven = () => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const question = String(randomNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export default () => brainGame(brainEven, questionDescription);
