import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const operator = ['+', '-', '*'];
const questionDescription = 'What is the result of the expression?';

const calcBasicArithmeticOperations = (randomOperator, firstNumber, secondNumber) => {
  switch (randomOperator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`operation ${randomOperator} is not supported`);
  }
};

const brainCalc = () => {
  const firstNumber = getMinToMaxRandomNumber(1, 99);
  const secondNumber = getMinToMaxRandomNumber(1, 99);
  const randomOperator = operator[getMinToMaxRandomNumber(0, 2)];

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calcBasicArithmeticOperations(randomOperator, firstNumber, secondNumber));

  return [question, answer];
};

export default () => brainGame(brainCalc, questionDescription);
