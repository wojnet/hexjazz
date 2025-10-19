// const possibleStatus = "none" | "close" | "almost" | "guess";

import type { Hex } from "../types/Hex";
import type { CellStatus } from "../types/Rows";

const hexDigits: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const getCellStatus = (distance: number): CellStatus => {
  if (distance === 0) {
    return "guess";
  } else if (distance === 1) {
    return "almost";
  } else if (distance === 2) {
    return "close";
  } else {
    return "none";
  }
}

export const getRowStatuses = (targetHex: Hex, passedHex: Hex): CellStatus[] => {
  const targetValues = [...targetHex.color.red, ...targetHex.color.green, ...targetHex.color.blue];
  const passedValues = [...passedHex.color.red, ...passedHex.color.green, ...passedHex.color.blue];
  let rowStatuses: CellStatus[] = [];

  targetValues.forEach((targetValue, index) => {
    const distanceBetweenDigits = Math.abs(hexDigits.indexOf(targetValue) - hexDigits.indexOf(passedValues[index]));
    
    rowStatuses.push(getCellStatus(distanceBetweenDigits));
  });

  return rowStatuses;
}