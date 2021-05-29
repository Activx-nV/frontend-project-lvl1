// export const getRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

export default (min, max) => Math.floor(min + Math.random()
* (max + 1 - min));
