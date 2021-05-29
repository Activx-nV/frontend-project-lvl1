/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const operator = ['+', '-', '*'];
const questionDescription = 'What is the result of the expression?';

const brainCalc = () => {
  let correctAnswer = 0;
  const firstNumber = getMinToMaxRandomNumber(1, 99);
  const secondNumber = getMinToMaxRandomNumber(1, 99);
  const randomOperator = operator[+getMinToMaxRandomNumber(0, 2)];

  switch (randomOperator) {
    case '+': correctAnswer = firstNumber + secondNumber;
      break;
    case '-': correctAnswer = firstNumber - secondNumber;
      break;
    case '*': correctAnswer = firstNumber * secondNumber;
      break;
    default: correctAnswer = 'unknown';
  }

  const result = {
    answer: String(correctAnswer),
    question: `${firstNumber} ${randomOperator} ${secondNumber}`,
  };

  return result;
};

export default () => brainGame(brainCalc, questionDescription);
