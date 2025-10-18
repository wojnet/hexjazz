import CurrentBoardCell from "./CurrentBoardCell";

interface CurrentBoardRowProps {
  row: string[];
}

const CurrentBoardRow = ({ row }: CurrentBoardRowProps) => {
  const cellElements = row.map((cell, index) => <CurrentBoardCell cell={cell} key={index} />)

  return (
    <div
      className="flex gap-2 p-1 rounded-lg"
      style={{ background: "#AAA" }}
    >
      { cellElements }
    </div>
  );
}

export default CurrentBoardRow;