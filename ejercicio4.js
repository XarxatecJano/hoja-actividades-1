const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
const randomNumBetween1and10 = Math.floor((Math.random() * MAX_NUMBER_OF_GAME - MIN_NUMBER_OF_GAME + 1) + MIN_NUMBER_OF_GAME);
const userGuess = parseInt(prompt("Adivina el número! Dame un número entre el 1 y el 10."));
let result = `Lo siento, no lo has adivinado. El número era el ${randomNumBetween1and10}.`;
const areEqualNumbers = (randomNumBetween1and10==userGuess);
if (areEqualNumbers) result = `Enhorabuena, efectivamente era el ${randomNumBetween1and10}.`;
console.log(result);