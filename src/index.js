import readlineSync from 'readline-sync';

const maxCycles = 3;

const brainGame = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const usersName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${usersName}!`);
  console.log(description);

  for (let startCycle = 0; startCycle < maxCycles; startCycle += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${usersName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${usersName}!`);
};
export default brainGame;
