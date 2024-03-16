/* eslint-disable no-unused-vars */
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
export function getAnswer(value, option = null) {
  const userAnswer = readlineSync.question(`Question: ${value} \nYour answer: `, option);
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

// проверка ответа предикативной функции
function getPredicateAnswer(value) {
  const userAnswer = getAnswer(value, {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  return userAnswer ? 'yes' : 'no';
}

// правильный ответ предикативной функции
function getPredicateCorrectAnswer(value, gameFunc) {
  return gameFunc(value) ? 'yes' : 'no';
}

// предикативный ответ
export function predicateAnswer(value, gameFunc) {
  const userAnswer = getPredicateAnswer(value);
  const correctAnswer = getPredicateCorrectAnswer(value, gameFunc);
  return { userAnswer, correctAnswer };
}

// проверка ответа
export function checkAnswer(userAnswer, correctAnswer, name, counter) {
  if (userAnswer === correctAnswer) {
    printCorrectMessage();
    counter += 1;
  } else {
    printWrongMessage(userAnswer, correctAnswer, name);
    return false;
  }
  return true;
}

// генерации случайного числа
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
