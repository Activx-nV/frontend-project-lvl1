#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';

import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const gameSet = [even, calc, gcd, progression, prime];
const gameSetShow = ['even', 'calc', 'gcd', 'progression', 'prime'];
const cancel = -1;

const selectGame = () => {
  console.log('Welcome to the Brain Games!');
  const questionSelect = readlineSync.keyInSelect(gameSetShow, 'What game would you like to play?\n');

  if (questionSelect === cancel) return;

  gameSet[questionSelect]();

  const questionPlayOrExit = readlineSync.question(`\nWanna play another game?\n
  Press ENTER to return to the main menu,
  Otherwise answer "no" to exit. `);

  if (questionPlayOrExit === 'no') {
    console.log('Have a nice and positive rest of the day!');
  } else {
    selectGame();
  }
};

export default selectGame;
