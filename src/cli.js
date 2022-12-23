import readlineSync from 'readline-sync';

export const getNameGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const usersName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${usersName}!`);
};

export default getNameGreeting;
