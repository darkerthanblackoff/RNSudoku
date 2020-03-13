import { combineReducers } from 'redux';

import { REDUCERS } from '../../constants';

import GameReducer from './GameReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  [REDUCERS.GAME]: GameReducer,
  [REDUCERS.SETTINGS]: SettingsReducer,
});
