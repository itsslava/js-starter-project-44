/* eslint-disable no-console */
/* eslint-disable import/extensions */
// import readlineSync from 'readline-sync';

import * as func from '../src/index.js';

export function isEven(n) {
  return n % 2 === 0;
}

export default function gameEven() {
  const name = func.welcome('Answer "yes" if the number is even, otherwise answer "no"');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const randomNumber = func.getRandomNumber(1, 100);
    const userAnswer = func.getAnswer(randomNumber, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    const textAnswer = userAnswer ? 'yes' : 'no';
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (textAnswer === correctAnswer) {
      func.printCorrectMessage();
      counter += 1;
    } else {
      func.printWrongMessage(textAnswer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
