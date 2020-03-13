import { SettingsState } from '../../interfaces';
import { ACTIONS } from '../../constants';

const INITIAL_STATE: SettingsState = {
  difficulty: 'EASY',
  name: '',
};

const GameReducer = (
  state: SettingsState = INITIAL_STATE,
  action: { type: string; payload: any },
): SettingsState => {
  switch (action.type) {
    case ACTIONS.SETTINGS.SET_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case ACTIONS.SETTINGS.SET_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.SETTINGS.CLEAR_NAME:
      return { ...state, name: '' };
    default:
      return state;
  }
};

export default GameReducer;
