/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { usersName } from '../cli.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let randomNumberQuestion = Math.round(Math.random() * 100);
  let questionAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    questionAnswer = readlineSync.question(`Question: ${randomNumberQuestion} `);
    if (randomNumberQuestion % 2 === 0 && questionAnswer.trim().toLowerCase() === 'yes') {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${usersName}!`);
      }
    } else if (randomNumberQuestion % 2 !== 0 && questionAnswer.trim().toLowerCase() === 'no') {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${usersName}!`);
      }
    } else if (randomNumberQuestion % 2 === 0 && questionAnswer.trim().toLowerCase() === 'no') {
      console.log("'no' is a wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${usersName}!`);
      break;
    } else if (randomNumberQuestion % 2 !== 0 && questionAnswer.trim().toLowerCase() === 'yes') {
      console.log("'yes' is a wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${usersName}!`);
      break;
    } else {
      console.log('Make sure you write correctly "yes" or "no". Perhaps you made a typo.');
      console.log(`Let's try again, ${usersName}!`);
      break;
    }
    randomNumberQuestion = Math.round(Math.random() * 100);
  }
};
