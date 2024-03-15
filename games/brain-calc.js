/* eslint-disable no-console */
/* eslint-disable import/extensions */
import * as func from '../src/index.js';

export default function gameCalc() {
  const name = func.welcome('What is the result of the expression?');

  let counter = 0;
  while (counter < func.numberOfRounds) {
    const { expression, result } = func.generateMathExpression();
    const userAnswer = Number(func.getAnswer(expression));

    if (userAnswer === result) {
      func.printCorrectMessage();
      counter += 1;
    } else {
      func.printWrongMessage(userAnswer, result, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
