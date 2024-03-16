/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// приветсвтие и запись имени пользователя
export function welcome(question) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
}

// количество раундов
export const numberOfRounds = 3;

// получение ответа пользовавтеля
export function getAnswer(value, addition = null) {
  const userAnswer = readlineSync.question(`Question: ${value} \nYour answer: `, addition);
  return userAnswer;
}

// вывод сообщения о правильности ответа
export function printCorrectMessage() {
  console.log('Correct!');
}

// вывод сообщения о неправильности ответа
export function printWrongMessage(answer, correctAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
  );
}

// генерации случайного числа
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
