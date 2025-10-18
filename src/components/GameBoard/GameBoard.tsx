import { useEffect, useState, type KeyboardEventHandler, useRef } from "react";
import type { Hex } from "../../types/Hex";
import { generateHex } from "../../utils/generateHex";
import ColorDisplay from "./ColorDisplay";
import type { Row, Rows } from "../../types/Rows";
import BoardRows from "./Rows/BoardRows";

interface GameBoardProps {}

const allowedKeys = ["enter", "backspace", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const GameBoard = ({}: GameBoardProps) => {
  const currentByteIndexRef = useRef<number>(0);

  const [attempts, setAttempts] = useState(6);
  const [generatedHex, setGeneratedHex] = useState<Hex | null>(null);
  const [currentRow, setCurrentRow] = useState<string[]>(["", "", "", "", "", ""]);
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

  const handlePressBackspace = () => {
    if (currentByteIndexRef.current === currentRow.length - 1) {
      setCurrentRow(prev => {
        if (prev[currentByteIndexRef.current] !== "") {
          const temp = [...prev];
          temp[currentByteIndexRef.current] = "";
          return temp;
        } else {
          const temp = [...prev];
          temp[currentByteIndexRef.current - 1] = "";
          currentByteIndexRef.current--;
          return temp;
        }
      });
    } else if (currentByteIndexRef.current >= 1) {
      setCurrentRow(prev => {
        const temp = [...prev];
        temp[currentByteIndexRef.current - 1] = "";
        currentByteIndexRef.current--;
        return temp;
      });
    } else {
      setCurrentRow(prev => {
        const temp = [...prev];
        temp[currentByteIndexRef.current] = "";
        currentByteIndexRef.current = 0;
        return temp;
      });
    }
  }

  const handlePressEnter = () => {
    alert(currentRow);
  }

  const handleOnKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    if (allowedKeys.includes(key)) {
      if (key === "enter") {
        handlePressEnter();
      } else if (key === "backspace") {
        handlePressBackspace();
      } else {
        setCurrentRow(prev => {
          if (prev[currentByteIndexRef.current] !== "") return prev;

          const temp = [...prev];
          temp[currentByteIndexRef.current] = key;

          if (currentByteIndexRef.current < temp.length - 1) {
            currentByteIndexRef.current++;
          }

          return temp;
        });
      }
    }
  }

  useEffect(() => {
    setGeneratedHex(generateHex());
    setInitialRowsState();

    document.addEventListener("keydown", handleOnKeyDown);

    return () => {
      document.removeEventListener("keydown", handleOnKeyDown);
    };
  }, []);

  return (
    <div
      className="w-full h-auto flex-1 flex flex-col gap-5 justify-start items-center"
    >
      <ColorDisplay
        hex={generatedHex}
      />
      <BoardRows rows={rows} currentRow={currentRow} />
    </div>
  );
}

export default GameBoard;