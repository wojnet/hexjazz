import type { Cell } from "../../../types/Rows";

interface BoardCellProps {
  cell: Cell;
}

const BoardCell = ({ cell }: BoardCellProps) => {
  return (
    <div
      className="w-11 h-11 bg-slate-200 border-3 border-[#0e2653] rounded-lg flex items-center justify-center"
      style={{ background: cell.status === "guess" ? "#437057" : cell.status === "almost" ? "#97B067" : cell.status === "close" ? "#E3DE61" : "" }}
    >
      <p className="rubik-bold text-2xl text-[#0e2653]">
        { cell.value.toUpperCase() }
      </p>
    </div>
  );
}

export default BoardCell;