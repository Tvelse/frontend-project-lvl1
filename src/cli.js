import readlineSync from 'readline-sync';

const helloQuestion = () => {
  console.log('May i have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};
export default helloQuestion;
