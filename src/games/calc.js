import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const operator = ['+', '-', '*'];
const questionDescription = 'What is the result of the expression?';

const calcBasicArithmeticOperations = (randomOperator, firstNumber, secondNumber) => {
  switch (randomOperator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: return 'unknown';
  }
};

const brainCalc = () => {
  let correctAnswer = 0;
  const firstNumber = getMinToMaxRandomNumber(1, 99);
  const secondNumber = getMinToMaxRandomNumber(1, 99);
  const randomOperator = operator[getMinToMaxRandomNumber(0, 2)];

  correctAnswer = calcBasicArithmeticOperations(randomOperator, firstNumber, secondNumber);

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(correctAnswer);
  return [question, answer];
};

export default () => brainGame(brainCalc, questionDescription);
