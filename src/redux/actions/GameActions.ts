import { ACTIONS } from '../../constants';

export const init = () => ({
  type: ACTIONS.GAME.INIT,
});

export const selectCell = (i: number, j: number) => ({
  type: ACTIONS.GAME.SELECT_CELL,
  payload: { i, j },
});

export const updateBoard = () => ({
  type: ACTIONS.GAME.UPDATE_BOARD,
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

export const resetTimer = () => ({
  type: ACTIONS.GAME.TIMER_RESET,
});
