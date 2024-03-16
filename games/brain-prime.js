/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

// проверка простое число или нет
export function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let counter = 2; counter <= Math.sqrt(number); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;
}

export default function gamePrime() {
  const name = func.welcome('Answer "yes" if given number is prime. Otherwise answer "no"');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const randomNumber = func.getRandomNumber(1, 100);
    const userAnswer = func.getAnswer(randomNumber, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    const textAnswer = userAnswer ? 'yes' : 'no';
    const correctAnswer = func.isPrime(randomNumber) ? 'yes' : 'no';

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
