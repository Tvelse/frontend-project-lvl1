import readlineSync from 'readline-sync';
import helloQuestion from '../src/cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

const isEvenNumber = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const roundsCount = 3;

console.log('Welcome to the Brain Games');
const name = helloQuestion();
console.log(description);
for (let i = 0; i < roundsCount; i += 1) {
  const [question, correctAnswer] = getQuestionAndAnswer();
  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('You answer: ');

  if (correctAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
  }
}
console.log(`Congratulations, ${name}`);
