#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import * as func from '../src/index.js';

export default function playGame() {
  const name = func.welcome('What is the result of the expression?');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const { expression, result } = func.generateMathExpression();
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

    if (Number(userAnswer) === result) {
      func.printCorrectMessage(userAnswer);
      correctAnswersCount += 1;
    } else {
      func.printWrongMessage(userAnswer, result, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
