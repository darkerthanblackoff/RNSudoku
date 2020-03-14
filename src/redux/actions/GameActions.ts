import { Dispatch } from 'redux';
import { ACTIONS } from '../../constants';
import { StupidSudokuGenerator } from '../../gen';

export const createNewGame = (
  difficulty: 'EASY' | 'MEDIUM' | 'HARD',
  currentGamePlayer: string,
) => {
  const generator = StupidSudokuGenerator.getInstance();
  const board = generator.generate(difficulty).toArray();
  const cellsToResolve = generator.getHidenCount();

  return {
    type: ACTIONS.GAME.NEW,
    payload: { difficulty, currentGamePlayer, board, cellsToResolve },
  };
};

export const selectCell = (i: number, j: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ACTIONS.GAME.SELECT_CELL,
      payload: { i, j },
    });
  }, 0);
};

export const placeImValue = (
  selectedRow: number,
  selectedColumn: number,
  value: number,
) => (dispatch: Dispatch) => {
  const board = StupidSudokuGenerator.getInstance().getBoard();
  const cell = board.getCell(selectedRow, selectedColumn);

  if (cell.isVisible()) {
    return;
  }

  const prevCell = Object.assign({}, cell);
  const prevCorrectness = cell.isCorrect();
  const prevValue = cell.getImValue();
  cell.setImValue(value);
  const nextValue = cell.getImValue();
  const nextCorrectness = cell.isCorrect();

  if (prevValue === null) {
    dispatch(subCells());
  }
  if (nextValue === null) {
    dispatch(addCells());
  }

  if (prevCorrectness && !nextCorrectness) {
    dispatch(addError());
    dispatch(addCells());
  } else if (!prevCorrectness && nextCorrectness) {
    dispatch(subError());
    dispatch(subCells());
  }

  const undoItem = { i: selectedRow, j: selectedColumn, prevValue };

  dispatch({
    type: ACTIONS.GAME.PLACE_IM_VAL,
    payload: { board: board.toArray(), undoItem },
  });
};

export const startTimer = () => ({
  type: ACTIONS.GAME.TIMER_START,
});

export const stopTimer = () => ({
  type: ACTIONS.GAME.TIMER_STOP,
});

export const getMsecs = (lastValueMsecs: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ACTIONS.GAME.TIMER_GET_MSECS,
      payload: lastValueMsecs,
    });
  }, 0);
};

export const resetTimer = () => ({
  type: ACTIONS.GAME.TIMER_RESET,
});

export const addError = () => ({
  type: ACTIONS.GAME.ADD_ERROR,
});

export const subError = () => ({
  type: ACTIONS.GAME.SUB_ERROR,
});

export const addCells = () => ({
  type: ACTIONS.GAME.ADD_CELLS_TO_RESOLVE,
});

export const subCells = () => ({
  type: ACTIONS.GAME.SUB_CELLS_TO_RESOLVE,
});

export const undo = () => ({
  type: ACTIONS.GAME.UNDO_IM_VAL,
});
