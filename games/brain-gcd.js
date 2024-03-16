/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import * as func from '../src/index.js';

// поиск наибольшего общего делителя
export function getGcd(x, y) {
  while (y !== 0) {
    const remainder = x % y;
    x = y;
    y = remainder;
  }
  return x;
}

export default function gameGcd() {
  const name = func.welcome('Find the greatest common divisor of given numbers.');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const firstNum = func.getRandomNumber(1, 10);
    const secondNum = func.getRandomNumber(1, 10);

    const userAnswer = Number(func.getAnswer(`${firstNum} ${secondNum}`));

    const correctAnswer = getGcd(firstNum, secondNum);

    if (func.checkAnswer(userAnswer, correctAnswer, name, counter)) {
      counter += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
