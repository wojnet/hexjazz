import type { Hex } from "../types/Hex";

const hexDigits: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const getRandomDigit = (): string => {
  return hexDigits[Math.floor(Math.random() * hexDigits.length)];
}

const getRandomByte = (): string => {
  return getRandomDigit() + getRandomDigit();
}
 
export const generateHex = (): Hex => {


  return ({
    color: {
      red: getRandomByte(),
      green: getRandomByte(),
      blue: getRandomByte(),
    }
  });
}