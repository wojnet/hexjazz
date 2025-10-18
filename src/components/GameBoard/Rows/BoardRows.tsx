import { useEffect } from "react";
import type { Rows } from "../../../types/Rows";
import BoardRow from "./BoardRow";
import CurrentBoardRow from "./Current/CurrentBoardRow";

interface BoardRowsProps {
  rows: Rows | null;
  currentRow: string[];
  attempts?: number;
}

const BoardRows = ({ rows, currentRow, attempts = 6 }: BoardRowsProps) => {
  if (rows === null) return;

  const rowElements = rows.values.map((row, index) => {
    if (rows.currentRowIndex === index) return <CurrentBoardRow row={currentRow} key={index} />
    return <BoardRow row={row} key={index} />
  })

  return (
    <div className="flex flex-col">
      { rowElements }
    </div>
  );
}

export default BoardRows;