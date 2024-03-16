/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import * as func from '../src/index.js';

// генерация арифметической прогрессии
export function generateProgression() {
  const progressionLength = func.getRandomNumber(5, 10);

  const progressionStart = func.getRandomNumber(1, 50);
  const progressionStep = func.getRandomNumber(1, 10);

  const hiddenNumberIndex = Math.floor(Math.random() * progressionLength); // случайный индекс для скрытого числа
  const hiddenNumber = progressionStart + progressionStep * hiddenNumberIndex;

  const progression = [];
  for (let counter = 0; counter < progressionLength; counter += 1) {
    if (counter === hiddenNumberIndex) {
      progression.push('..'); // скрываем число двумя точками
    } else {
      progression.push(progressionStart + progressionStep * counter); // добавляем число в прогрессию
    }
  }

  return { progression, hiddenNumber };
}

export default function gameProgression() {
  const name = func.welcome('What number is missing in the progression?');

  let counter = 0; // счетчик правильных ответов
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
