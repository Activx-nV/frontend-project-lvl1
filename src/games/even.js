/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (questionNumber) => questionNumber % 2 === 0;

const brainEven = () => {
  const randomNumberQuestion = getMinToMaxRandomNumber(1, 99);
  const correctAnswer = isEven(randomNumberQuestion) ? 'yes' : 'no';

  const result = {
    answer: correctAnswer,
    question: `${randomNumberQuestion}`,
  };

  return result;
};

export default () => brainGame(brainEven, questionDescription);
