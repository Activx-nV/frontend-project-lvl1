import getMinToMaxRandomNumber from '../utils.js';
import brainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const createProgressionLine = () => {
  const progressionArray = [];
  let randomNumber = getMinToMaxRandomNumber(1, 99);
  const randomProgression = getMinToMaxRandomNumber(2, 20);
  const hideRandomProgression = getMinToMaxRandomNumber(1, 9);

  for (let i = 0; i < 10; i += 1) {
    if (i === 0) {
      progressionArray.push(randomNumber);
    } else {
      randomNumber += randomProgression;
      progressionArray.push(randomNumber);
    }
  }

  const saveHiddenProgression = progressionArray[hideRandomProgression];
  progressionArray[hideRandomProgression] = '..';

  const question = progressionArray.join(' ');
  const answer = String(saveHiddenProgression);

  return [question, answer];
};

export default () => brainGame(createProgressionLine, gameDescription);
