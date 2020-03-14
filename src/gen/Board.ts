import BoardCell from './BoardCell';

export type BoardType = Array<Array<BoardCell>>;

class Board {
  private _board: BoardType;

  static from(array: Array<Array<number>>): BoardType {
    return array.map((row, rowIndex) =>
      row.map((cell, cellIndex) => new BoardCell(array[rowIndex][cellIndex])),
    );
  }

  public constructor(board: BoardType) {
    this._board = board;
  }

  public getCell(rowIndex: number, columnIndex: number) {
    return { ...this._board[rowIndex][columnIndex] };
  }

  public setCell(rowIndex: number, columnIndex: number, newValue: BoardCell) {
    this._board[rowIndex][columnIndex] = newValue;

    return this;
  }

  public getRow(rowIndex: number) {
    return Array.from(this._board[rowIndex]);
  }

  public setRow(rowIndex: number, newRow: Array<BoardCell>) {
    this._board[rowIndex] = Array.from(newRow);

    return this;
  }

  public getColumn(columnIndex: number) {
    const result: Array<BoardCell> = [];

    for (let i = 0; i < this._board.length; i++) {
      result.push(this._board[i][columnIndex]);
    }

    return result;
  }

  public setColumn(columnIndex: number, newColumn: Array<BoardCell>) {
    this._board = this._board.map((row, rIndex) =>
      row.map((cell, cIndex) => {
        if (cIndex === columnIndex) {
          cell = newColumn[rIndex];
        }

        return cell;
      }),
    );

    return this;
  }

  public filter(
    cbFn: (cell: BoardCell, rowIndex?: number, columnIndex?: number) => boolean,
  ): Array<BoardCell> | undefined {
    let result: Array<BoardCell> = [];

    this._board.forEach((row, rIndex) => {
      const filtered = row.filter((cell, cIndex) => cbFn(cell, rIndex, cIndex));
      if (filtered) {
        result.concat(filtered);
      }
    });

    return result.length > 0 ? result : undefined;
  }

  public forEach(
    cbFn: (cell: BoardCell, rowIndex?: number, columnIndex?: number) => boolean,
  ) {
    this._board.forEach((row, rIndex) =>
      row.forEach((cell, cIndex) => cbFn(cell, rIndex, cIndex)),
    );
  }

  public toArray() {
    return [...this._board];
  }
}

export default Board;
