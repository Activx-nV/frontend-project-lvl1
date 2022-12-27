import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgressionLine = (randomProgression, randomNumber, hiddenRandomProgressionIndex) => {
  const progressionArray = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    const currentProgressionValue = randomNumber + (randomProgression * i);
    progressionArray.push(currentProgressionValue);
  }

  const saveHiddenProgression = progressionArray[hiddenRandomProgressionIndex];
  progressionArray[hiddenRandomProgressionIndex] = '..';

  const question = progressionArray.join(' ');
  const answer = String(saveHiddenProgression);

  return [question, answer];
};

const createProgressionLine = () => {
  const hiddenRandomProgressionIndex = getMinToMaxRandomNumber(1, 9);
  const randomProgression = getMinToMaxRandomNumber(2, 20);
  const randomNumber = getMinToMaxRandomNumber(1, 99);

  return generateProgressionLine(randomProgression, randomNumber, hiddenRandomProgressionIndex);
};

export default () => brainGame(createProgressionLine, gameDescription);
