import { getPredicateQA } from '../utils.js';
import brainGame from '../index.js';

const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (questionNumber) => questionNumber % 2 === 0;

const brainEven = () => getPredicateQA(isEven);

export default () => brainGame(brainEven, questionDescription);
