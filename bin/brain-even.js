#!/usr/bin/env node

/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// приветствие и получение имени пользователя
function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

// генерации случайного числа
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// проверка числа на четность
function isEven(n) {
  return n % 2 === 0;
}

// вывод сообщения о правильности ответа
function printCorrectMessage(answer) {
  console.log(`Your answer: ${answer}`);
  console.log('Correct!');
}

// вывод сообщения о неправильности ответа и завершения игры
function printWrongMessage(answer, correctAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
  );
}

// функция игры
export default function gameEven() {
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const randomNumber = generateRandomNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \n`, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    const textAnswer = userAnswer ? 'yes' : 'no';
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (textAnswer === correctAnswer) {
      printCorrectMessage(textAnswer);
      countCorrectAnswers += 1;
    } else {
      printWrongMessage(textAnswer, correctAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

gameEven();
