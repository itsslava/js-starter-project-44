/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// приветсвтие и запись имеени пользователя
export function welcome(question) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
}

// количество раундов
export const numberOfRounds = 3;

// генерации случайного числа
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// вывод сообщения о правильности ответа
export function printCorrectMessage() {
  console.log('Correct!');
}

// получение ответа пользовавтеля

export function getAnswer(value, addition = null) {
  const userAnswer = readlineSync.question(`Question: ${value} \nYour answer: `, addition);

  return userAnswer;
}

// вывод сообщения о неправильности ответа
export function printWrongMessage(answer, correctAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
  );
}

// проверка числа на четность
export function isEven(n) {
  return n % 2 === 0;
}

// поиск наибольшего общего делителя
export function getGcd(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// генерация математического знака
export function randomSign() {
  const mathSigns = ['+', '-', '*'];
  return mathSigns[Math.floor(Math.random() * 3)];
}

// генерация случайного математического выражения
export function generateMathExpression() {
  const operator = randomSign();
  const operand1 = getRandomNumber(1, 10);
  const operand2 = getRandomNumber(1, 10);
  let expression = '';
  let result = 0;

  switch (operator) {
    case '+':
      expression = `${operand1} + ${operand2}`;
      result = operand1 + operand2;
      break;
    case '-':
      expression = `${operand1} - ${operand2}`;
      result = operand1 - operand2;
      break;
    case '*':
      expression = `${operand1} * ${operand2}`;
      result = operand1 * operand2;
      break;
    default:
      break;
  }

  return { expression, result };
}
