/* eslint-disable import/extensions */
/* eslint-disable no-console */
import * as func from '../src/index.js';

export default function gameGcd() {
  const name = func.welcome('Find the greatest common divisor of given numbers.');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const a = func.getRandomNumber(1, 10);
    const b = func.getRandomNumber(1, 10);

    const userAnswer = Number(func.getAnswer(`${a} ${b}`));

    const correctAnswer = func.getGcd(a, b);

    if (userAnswer === correctAnswer) {
      func.printCorrectMessage();
      counter += 1;
    } else {
      func.printWrongMessage(userAnswer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
