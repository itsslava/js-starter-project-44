/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

// генерация случайного математического выражения
export function generateMathExpression() {
  function randomSign() {
    const mathSigns = ['+', '-', '*'];
    return mathSigns[Math.floor(Math.random() * 3)];
  }

  const operator = randomSign();
  const operand1 = func.getRandomNumber(1, 10);
  const operand2 = func.getRandomNumber(1, 10);
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

export default function gameCalc() {
  const name = func.welcome('What is the result of the expression?');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const { expression, result } = generateMathExpression();
    const userAnswer = Number(func.getAnswer(expression));

    if (func.checkAnswer(userAnswer, result, name, counter)) {
      counter += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
