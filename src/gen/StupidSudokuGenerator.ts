import Board from './Board';
// import BoardCell from './BoardCell';
import { getRandomIntInclusive } from '../utils/random';

const _board = [
  [4, 2, 8, 3, 6, 1, 7, 9, 5],
  [7, 9, 5, 2, 8, 4, 6, 3, 1],
  [6, 3, 1, 5, 7, 9, 4, 2, 8],
  [8, 5, 2, 6, 1, 7, 3, 4, 9],
  [3, 7, 4, 9, 2, 5, 8, 1, 6],
  [9, 1, 6, 4, 3, 8, 5, 7, 2],
  [5, 8, 7, 1, 9, 3, 2, 6, 4],
  [2, 4, 9, 7, 5, 6, 1, 8, 3],
  [1, 6, 3, 8, 4, 2, 9, 5, 7],
];

class StupidSudokuGenerator {
  public board: Board;

  public constructor() {
    this.board = new Board(Board.from(_board));
  }

  public generate(difficulty: 'EASY' | 'MEDIUM' | 'HARD') {
    let newBoard = new StupidSudokuGenerator();
    newBoard.shuffle(20);
    newBoard.hide(difficulty);

    return newBoard;
  }

  public shuffle(times: number) {
    this.shuffleRows(times);
    this.shuffleColumns(times);

    return this;
  }

  public shuffleRows(times: number) {
    for (let hz = 0; hz < times; hz++) {
      for (let row = 0; row < 9; row++) {
        this.relocateRow(row);
      }
    }

    return this;
  }

  public shuffleColumns(times: number) {
    for (let hz = 0; hz < times; hz++) {
      for (let column = 0; column < 9; column++) {
        this.relocateColumn(column);
      }
    }

    return this;
  }

  private getNewLocationIndex(currentIndex: number) {
    let relocated = false;
    let newLocationIndex = 0;

    if (currentIndex < 3) {
      while (!relocated) {
        newLocationIndex = getRandomIntInclusive(0, 2);
        if (newLocationIndex !== currentIndex) {
          relocated = true;
        }
      }
    }

    if (currentIndex > 2 && currentIndex < 6) {
      while (!relocated) {
        newLocationIndex = getRandomIntInclusive(3, 5);
        if (newLocationIndex !== currentIndex) {
          relocated = true;
        }
      }
    }

    if (currentIndex > 5) {
      while (!relocated) {
        newLocationIndex = getRandomIntInclusive(6, 8);
        if (newLocationIndex !== currentIndex) {
          relocated = true;
        }
      }
    }

    return newLocationIndex;
  }

  private relocateRow(index: number) {
    const newLocationIndex = this.getNewLocationIndex(index);

    const prevRow = this.board.getRow(index);
    const nextRow = this.board.getRow(newLocationIndex);

    this.board.setRow(index, nextRow);
    this.board.setRow(newLocationIndex, prevRow);

    return this;
  }

  private relocateColumn(index: number) {
    const newLocationIndex = this.getNewLocationIndex(index);

    const prevColumn = this.board.getColumn(index);
    const nextColumn = this.board.getColumn(newLocationIndex);

    this.board.setColumn(index, nextColumn);
    this.board.setColumn(newLocationIndex, prevColumn);

    return this;
  }

  public isValidRow(index: number): boolean {
    const row = this.board.getRow(index);

    return new Set(row).size === row.length;
  }

  public isValidColumn(index: number): boolean {
    const column = this.board.getColumn(index);

    return new Set(column).size === column.length;
  }

  private hide(difficulty: 'EASY' | 'MEDIUM' | 'HARD') {
    let cellsToHide = 0;

    if (difficulty === 'EASY') {
      cellsToHide = 20;
    } else if (difficulty === 'MEDIUM') {
      cellsToHide = 36;
    } else {
      cellsToHide = 54;
    }

    while (cellsToHide > 0) {
      const i = getRandomIntInclusive(0, 8);
      const j = getRandomIntInclusive(0, 8);

      if (this.board.getCell(i, j).isVisible()) {
        this.board.getCell(i, j).setVisability(false);
        cellsToHide--;
      }
    }
  }
}

export default StupidSudokuGenerator;
