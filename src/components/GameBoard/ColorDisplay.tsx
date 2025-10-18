import { useEffect, useState } from "react";
import type { Hex } from "../../types/Hex";

interface ColorDisplayProps {
  hex: Hex | null;
}

const ColorDisplay = ({ hex }: ColorDisplayProps) => {
  const [hexString, setHexString] = useState<string>("");

  useEffect(() => {
    if (hex !== null) {
      setHexString("#" + hex.color.red + hex.color.green + hex.color.blue);
    }
  }, [hex]);

  return (
    <div
      className="w-72 h-72 border-4 border-[#0e2653] rounded-2xl"
      style={{ background: hex !== null ? hexString : "transparent" }}
    >

    </div>
  );
}

export default ColorDisplay;