/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import * as func from '../src/index.js';

export default function gameProgression() {
  const name = func.welcome('What number is missing in the progression?');

  let counter = 0; // Счетчик правильных ответов
  while (counter < func.numberOfRounds) {
    const { progression, hiddenNumber } = func.generateProgression();

    const userAnswer = Number(func.getAnswer(`${progression.join(' ')}`));

    if (userAnswer === hiddenNumber) {
      func.printCorrectMessage();
      counter += 1;
    } else {
      func.printWrongMessage(userAnswer, hiddenNumber, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
