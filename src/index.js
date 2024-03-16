/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// приветсвтие и запись имени пользователя
export function welcome(question = '') {
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

// генерация арифметической прогрессии
export function generateProgression() {
  const length = getRandomNumber(5, 10);

  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);

  const hiddenIndex = Math.floor(Math.random() * length); // случайный индекс для скрытого числа
  const hiddenNumber = start + step * hiddenIndex;

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..'); // скрываем число двумя точками
    } else {
      progression.push(start + step * i); // добавляем число в прогрессию
    }
  }

  return { progression, hiddenNumber };
}

// проверка простое число или нет
export function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
