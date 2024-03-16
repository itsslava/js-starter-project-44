/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import * as func from '../src/index.js';

// генерация арифметической прогрессии
function generateSequence(start, step, length, hiddenIndex) {
  const sequence = [];
  for (let i = 0; i < length; i += 1) {
    sequence.push(i === hiddenIndex ? '..' : start + step * i);
  }
  return sequence;
}
// генерация значений прогрессии
function generateProgression() {
  const progressionLength = func.getRandomNumber(5, 10);
  const progressionStart = func.getRandomNumber(1, 50);
  const progressionStep = func.getRandomNumber(1, 10);
  const hiddenNumberIndex = Math.floor(Math.random() * progressionLength);

  const progression = generateSequence(
    progressionStart,
    progressionStep,
    progressionLength,
    hiddenNumberIndex,
  );
  const hiddenNumber = progression[hiddenNumberIndex];

  return { progression, hiddenNumber };
}

export default function gameProgression() {
  const name = func.welcome('What number is missing in the progression?');

  let counter = 0; // счетчик правильных ответов
  while (counter < func.numberOfRounds) {
    const { progression, hiddenNumber } = generateProgression();

    const userAnswer = Number(func.getAnswer(`${progression.join(' ')}`));

    if (func.checkAnswer(userAnswer, hiddenNumber, name, counter)) {
      counter += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
