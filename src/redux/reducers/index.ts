import { combineReducers } from 'redux';

import { REDUCERS } from '../../constants';

import GameReducer from './GameReducer';

export default combineReducers({
  [REDUCERS.GAME]: GameReducer,
});
