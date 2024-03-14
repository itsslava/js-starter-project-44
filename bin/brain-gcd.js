#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

import * as func from '../src/index.js';

export default function gcdGame() {
  const name = func.welcome('Find the greatest common divisor of given numbers.');
  console.log(name);

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const a = func.getRandomNumber(1, 50);
    const b = func.getRandomNumber(1, 50);

    const userAnswer = readlineSync.question(`Question: ${a} ${b}\nYour answer: `);

    const correctAnswer = func.getGcd(a, b);

    if (Number(userAnswer) === correctAnswer) {
      func.printCorrectMessage(userAnswer);
      correctAnswersCount += 1;
    } else {
      func.printWrongMessage(userAnswer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
gcdGame();
