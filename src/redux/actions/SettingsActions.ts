import { ACTIONS } from '../../constants';

export const setDifficulty = (value: 'EASY' | 'MEDIUM' | 'HARD') => ({
  type: ACTIONS.SETTINGS.SET_DIFFICULTY,
  payload: value,
});

export const setName = (value: string) => ({
  type: ACTIONS.SETTINGS.SET_NAME,
  payload: value,
});

export const clearName = () => ({
  type: ACTIONS.SETTINGS.CLEAR_NAME,
});
