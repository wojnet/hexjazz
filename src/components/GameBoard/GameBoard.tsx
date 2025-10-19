import { useEffect, useState, type KeyboardEventHandler, useRef } from "react";
import { motion } from "framer-motion";
import type { Hex } from "../../types/Hex";
import { generateHex } from "../../utils/generateHex";
import ColorDisplay from "./ColorDisplay";
import type { CellStatus, Row, Rows } from "../../types/Rows";
import BoardRows from "./Rows/BoardRows";
import { getRowStatuses } from "../../utils/getRowStatuses";

interface GameBoardProps {}

const allowedKeys = ["enter", "backspace", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const GameBoard = ({}: GameBoardProps) => {
  const handleOnKeyDownRef = useRef<(event: KeyboardEvent) => void>(() => {});

  const [attempts, setAttempts] = useState(6);
  const [generatedHex, setGeneratedHex] = useState<Hex | null>(null);
  const [currentRow, setCurrentRow] = useState<string[]>(["", "", "", "", "", ""]);
  const [currentByteIndex, setCurrentByteIndex] = useState<number>(0);
  const [rows, setRows] = useState<Rows | null>(null);

  const setInitialRowsState = () => {
    let tempValues: Row[] = [];

    for (let i = 0; i < attempts; i++) {
      tempValues.push({ rowIndex: i, values: [
          { status: "none", value: "" },
          { status: "none", value: "" },
          { status: "none", value: "" },
          { status: "none", value: "" },
          { status: "none", value: "" },
          { status: "none", value: "" },
        ]});
    }

    setRows({
      currentRowIndex: 0,
      values: tempValues,
    })
  }

  const handlePressByteCharacter = (key: string) => {
    setCurrentRow(prev => {
          if (prev[currentByteIndex] !== "") return prev;

          const temp = [...prev];
          temp[currentByteIndex] = key.toUpperCase();

          if (currentByteIndex < temp.length - 1) {
            setCurrentByteIndex(prev => prev + 1);
          }

          return temp;
        });
  }

  const handlePressBackspace = () => {
    if (currentByteIndex === currentRow.length - 1) {
      setCurrentRow(prev => {
        if (prev[currentByteIndex] !== "") {
          const temp = [...prev];
          temp[currentByteIndex] = "";
          return temp;
        } else {
          const temp = [...prev];
          temp[currentByteIndex - 1] = "";
          setCurrentByteIndex(prev => prev - 1);
          return temp;
        }
      });
    } else if (currentByteIndex >= 1) {
      setCurrentRow(prev => {
        const temp = [...prev];
        temp[currentByteIndex - 1] = "";
        setCurrentByteIndex(prev => prev - 1);
        return temp;
      });
    } else {
      setCurrentRow(prev => {
        const temp = [...prev];
        temp[currentByteIndex] = "";
        setCurrentByteIndex(0);
        return temp;
      });
    }
  }

  const handlePressEnter = () => {
    if (!currentRow.includes("") && generatedHex && rows) {
      
      const newRowStatuses: CellStatus[] = getRowStatuses(
        generatedHex,
        { color: {
          red: currentRow[0] + currentRow[1],
          green: currentRow[2] + currentRow[3],
          blue: currentRow[4] + currentRow[5],
        }}
      );

      setRows(prev => {
        if (prev === null) return prev;
        let temp = { ...prev };

        // SET THE CELL VALUE
        currentRow.forEach((cell, index) => {
          temp.values[temp.currentRowIndex].values[index].value = cell;
        });
        
        // SET THE CELL STATUS
        newRowStatuses.forEach((status, index) => {
          temp.values[temp.currentRowIndex].values[index].status = status;
        });

        return temp;
      });

      // SWITCH TO THE NEXT ROW
      setRows(prev => {
        if (prev === null) return prev;

        let temp = { ...prev };
        temp.currentRowIndex = temp.currentRowIndex + 1;
        return temp;
      });
      setCurrentByteIndex(0);
      setCurrentRow(["", "", "", "", "", ""]);
    }
  }

  useEffect(() => {
    handleOnKeyDownRef.current = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (allowedKeys.includes(key)) {
        if (key === "enter") {
          handlePressEnter();
        } else if (key === "backspace") {
          handlePressBackspace();
        } else {
          handlePressByteCharacter(key);
        }
      }
    }
  }, [currentRow]);

  useEffect(() => {
    setGeneratedHex(generateHex());
    setInitialRowsState();

    const listener = (event: KeyboardEvent) => handleOnKeyDownRef.current(event);
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-auto flex-1 flex flex-col gap-5 justify-start items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <ColorDisplay
        hex={generatedHex}
      />
      <BoardRows rows={rows} currentRow={currentRow} />
    </motion.div>
  );
}

export default GameBoard;