import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgressionLine = (progressionArray) => {
  const lengthOfProgression = 10;
  const randomProgression = getMinToMaxRandomNumber(2, 20);
  let randomNumber = getMinToMaxRandomNumber(1, 99);

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      progressionArray.push(randomNumber);
    } else {
      randomNumber += randomProgression;
      progressionArray.push(randomNumber);
    }
  }
};

const createProgressionLine = () => {
  const progressionArray = [];
  const hideRandomProgression = getMinToMaxRandomNumber(1, 9);

  generateProgressionLine(progressionArray);

  const saveHiddenProgression = progressionArray[hideRandomProgression];
  progressionArray[hideRandomProgression] = '..';

  const question = progressionArray.join(' ');
  const answer = String(saveHiddenProgression);

  return [question, answer];
};

export default () => brainGame(createProgressionLine, gameDescription);
