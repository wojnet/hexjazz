import type { Cell } from "../../../types/Rows";

interface BoardCellProps {
  cell: Cell;
}

const BoardCell = ({ cell }: BoardCellProps) => {
  return (
    <div
      className="w-11 h-11 bg-slate-200 border-3 border-[#0e2653] rounded-lg flex items-center justify-center"
      style={{ background: cell.status === "guess" ? "#6BBF62"
        : cell.status === "almost" ? "#B5EB9A"
        : cell.status === "close" ? "#F6F193"
        : "" }}
    >
      <p className="rubik-bold text-2xl text-[#0e2653]">
        { cell.value.toUpperCase() }
      </p>
    </div>
  );
}

export default BoardCell;