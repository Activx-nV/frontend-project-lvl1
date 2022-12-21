/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const maxCycles = 3;

const brainGame = (gameCorrectAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const usersName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${usersName}!`);
  console.log(description);

  for (let startCycle = 0; startCycle < maxCycles; startCycle += 1) {
    const correctAnswer = gameCorrectAnswer();
    console.log(`Question: ${correctAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer.answer}'`);
      console.log(`Let's try again, ${usersName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${usersName}!`);
};
export default brainGame;
