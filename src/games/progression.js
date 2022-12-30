import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgressionLine = (progressionStep, firstElement, hiddenIndex) => {
  const progressionArray = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    const currentProgressionValue = firstElement + (progressionStep * i);
    progressionArray.push(currentProgressionValue);
  }

  progressionArray[hiddenIndex] = '..';

  return progressionArray.join(' ');
};

const createProgressionLine = () => {
  const hiddenIndex = getMinToMaxRandomNumber(1, 9);
  const progressionStep = getMinToMaxRandomNumber(2, 20);
  const firstElement = getMinToMaxRandomNumber(1, 99);
  const progressionLine = generateProgressionLine(progressionStep, firstElement, hiddenIndex);
  const answer = String(firstElement + (progressionStep * hiddenIndex));

  return [progressionLine, answer];
};

export default () => brainGame(createProgressionLine, gameDescription);
