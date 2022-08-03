import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const sign = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomSign = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const calcOperation = (symbol, first, second) => {
  switch (symbol) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    default: return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomSign(sign);
  const first = getRandomNumber(0, 10);
  const second = getRandomNumber(0, 10);

  const question = `${first} ${randomSymbol} ${second}`;
  const correctAnswer = String(calcOperation(randomSymbol, first, second));

  return [question, correctAnswer];
};

export default () => {
  start(description, getQuestionAndAnswer);
};
