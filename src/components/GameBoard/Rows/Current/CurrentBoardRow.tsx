import { motion } from "framer-motion";
import CurrentBoardCell from "./CurrentBoardCell";

interface CurrentBoardRowProps {
  row: string[];
}

const CurrentBoardRow = ({ row }: CurrentBoardRowProps) => {
  const cellElements = row.map((cell, index) => <CurrentBoardCell cell={cell} key={index} />)

  return (
    <motion.div
      className="flex gap-2 p-1 rounded-lg"
      initial={{ background: "none" }}
      animate={{ background: "#AAA" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      { cellElements }
    </motion.div>
  );
}

export default CurrentBoardRow;