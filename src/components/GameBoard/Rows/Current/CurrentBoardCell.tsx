interface CurrentBoardCellProps {
  cell: string;
}

const CurrentBoardCell = ({ cell }: CurrentBoardCellProps) => {
  return (
    <div
      className="w-11 h-11 bg-slate-200 border-3 border-[#0e2653] rounded-lg flex items-center justify-center"
    >
      <p className="rubik-bold text-2xl text-[#0e2653]">
        { cell.toUpperCase() }
      </p>
    </div>
  );
}

export default CurrentBoardCell;