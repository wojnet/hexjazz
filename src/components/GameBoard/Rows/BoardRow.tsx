import type { Row } from "../../../types/Rows";
import BoardCell from "./BoardCell";

interface BoardRowProps {
  row: Row;
}

const BoardRow = ({ row }: BoardRowProps) => {
  const cellElements = row.values.map((cell, index) => <BoardCell cell={cell} key={index} />)

  return (
    <div
      className="flex gap-2 p-1 rounded-lg"
    >
      { cellElements }
    </div>
  );
}

export default BoardRow;