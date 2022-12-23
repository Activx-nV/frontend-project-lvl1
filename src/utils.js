const getMinToMaxRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getPredicateQA = (isFn) => {
  const randomNumber = getMinToMaxRandomNumber(1, 99);
  const correctAnswer = isFn(randomNumber) ? 'yes' : 'no';

  const question = `${randomNumber}`;
  const answer = correctAnswer;

  return [question, answer];
};

export default getMinToMaxRandomNumber;
