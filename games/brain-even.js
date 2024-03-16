/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

// четное\нечетное
export function isEven(number) {
  return number % 2 === 0;
}

function playRounds(name) {
  let counter = 0;
  while (counter < func.numberOfRounds) {
    const randomNumber = func.getRandomNumber(1, 100);
    const { userAnswer, correctAnswer } = func.predicateAnswer(randomNumber, isEven);

    if (userAnswer === correctAnswer) {
      func.printCorrectMessage();
    } else {
      func.printWrongMessage(userAnswer, correctAnswer, name);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${name}!`);
}

export default function gameEven() {
  const name = func.welcome('Answer "yes" if the number is even, otherwise answer "no"');

  playRounds(name);
}
