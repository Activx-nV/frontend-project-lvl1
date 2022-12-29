import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const operators = ['+', '-', '*'];
const questionDescription = 'What is the result of the expression?';

const calcBasicArithmeticOperations = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`operation ${operation} is not supported`);
  }
};

const brainCalc = () => {
  const firstNumber = getMinToMaxRandomNumber(1, 99);
  const secondNumber = getMinToMaxRandomNumber(1, 99);
  const randomOperator = operators[getMinToMaxRandomNumber(0, 2)];

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calcBasicArithmeticOperations(randomOperator, firstNumber, secondNumber));

  return [question, answer];
};

export default () => brainGame(brainCalc, questionDescription);
