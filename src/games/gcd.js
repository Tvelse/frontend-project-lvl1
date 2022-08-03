import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (first, second) => {
  if (first === 0 || second === 0) {
    return first + second;
  }
  if (first > second) {
    return getGreatestCommonDivisor(first - second, second);
  }
  return getGreatestCommonDivisor(first, second - first);
};

const getQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 50);
  const second = getRandomNumber(1, 50);

  const question = `${first} ${second}`;
  const correctAnswer = String(getGreatestCommonDivisor(first, second));

  return [question, correctAnswer];
};

export default () => {
  start(description, getQuestionAndAnswer);
};
