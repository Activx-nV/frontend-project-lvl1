/* eslint-disable no-console */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const usersName = readlineSync.question('May I have your name? ');

export const getNameGreeting = () => {
  console.log(`Hello, ${usersName}!`);
};
