export type CellStatus = "none" | "close" | "almost" | "guess";

export type Cell = {
  value: string,
  status: CellStatus,
}

export type Row = {
  rowIndex: number,
  values: Cell[],
}

export type Rows = {
  currentRowIndex: number,
  values: Row[],
}