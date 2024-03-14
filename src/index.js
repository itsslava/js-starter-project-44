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
export const roundNumber = 3;

// генерации случайного числа
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// генерация математического знака
export function randomSign() {
  const mathSigns = ['+', '-', '*'];
  return mathSigns[Math.floor(Math.random() * 3)];
}

// генерация случайного математического выражения
export function generateMathExpression() {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
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

// вывод сообщения о правильности ответа
export function printCorrectMessage(answer) {
  console.log(`Your answer: ${answer}`);
  console.log('Correct!');
}

// вывод сообщения о неправильности ответа и завершения игры
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
  // Пока второе число не станет равным нулю
  while (b !== 0) {
    // Находим остаток от деления первого числа на второе
    const remainder = a % b;
    // Переносим второе число в первое
    a = b;
    // Переносим остаток во второе число
    b = remainder;
  }
  // Когда второе число стало равным нулю, первое число и есть НОД
  return a;
}
