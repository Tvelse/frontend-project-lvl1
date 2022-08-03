import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstStep, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstStep + i * step);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const firstStep = getRandomNumber(0, 5);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(10, 15);
  const progression = getProgression(firstStep, step, length);
  const hiddenNumber = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  start(description, getQuestionAndAnswer);
};
