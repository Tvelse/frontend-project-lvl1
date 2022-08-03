export const isEvenNumber = (num) => num % 2 === 0;

export const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
