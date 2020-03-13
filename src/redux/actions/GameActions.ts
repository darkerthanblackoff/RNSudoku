import { Dispatch } from 'redux';
import { ACTIONS } from '../../constants';

export const createNewGame = (difficulty: 'EASY' | 'MEDIUM' | 'HARD') => ({
  type: ACTIONS.GAME.NEW,
  payload: difficulty,
});

export const selectCell = (i: number, j: number) => ({
  type: ACTIONS.GAME.SELECT_CELL,
  payload: { i, j },
});

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
  }, 1000);
};

export const resetTimer = () => ({
  type: ACTIONS.GAME.TIMER_RESET,
});
