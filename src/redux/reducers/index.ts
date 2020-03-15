import { combineReducers } from 'redux';

import { REDUCERS } from '../../constants';

import GameReducer from './GameReducer';
import SettingsReducer from './SettingsReducer';
import LeaderboardReducer from './LeaderboardReducer';

export default combineReducers({
  [REDUCERS.GAME]: GameReducer,
  [REDUCERS.SETTINGS]: SettingsReducer,
  [REDUCERS.LEADER_BOARD]: LeaderboardReducer,
});
