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

export const placeImValue = (val: number) => ({
  type: ACTIONS.GAME.PLACE_IM_VAL,
  payload: val,
});

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
