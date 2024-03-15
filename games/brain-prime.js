/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

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
