#!/usr/bin/env node
/* eslint-disable import/extensions */

/* eslint-disable no-console */
import readlineSync from 'readline-sync';

import * as func from '../src/index.js';

// функция игры
export default function gameEven() {
  const name = func.welcome('Answer "yes" if the number is even, otherwise answer "no"');

  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const randomNumber = func.getRandomNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \n`, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    const textAnswer = userAnswer ? 'yes' : 'no';
    const correctAnswer = func.isEven(randomNumber) ? 'yes' : 'no';

    if (textAnswer === correctAnswer) {
      func.printCorrectMessage(textAnswer);
      countCorrectAnswers += 1;
    } else {
      func.printWrongMessage(textAnswer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

gameEven();
