/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

// простое\нет
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
// function getUserAnswer(randomNumber) {
//   const userAnswer = func.getAnswer(randomNumber, {
//     trueValue: ['yes'],
//     falseValue: ['no'],
//   });
//   return userAnswer ? 'yes' : 'no';
// }

// function getCorrectAnswer(randomNumber) {
//   return isPrime(randomNumber) ? 'yes' : 'no';
// }

function playRounds(name) {
  let counter = 0;
  while (counter < func.numberOfRounds) {
    const randomNumber = func.getRandomNumber(1, 100);
    const { userAnswer, correctAnswer } = func.predicateAnswer(randomNumber, isPrime);
    // const userAnswer = getUserAnswer(randomNumber);
    // const correctAnswer = getCorrectAnswer(randomNumber);

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

export default function gamePrime() {
  const name = func.welcome('Answer "yes" if given number is prime. Otherwise answer "no"');

  playRounds(name);
}
