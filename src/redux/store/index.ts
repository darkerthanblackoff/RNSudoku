import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import { REDUCERS } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [REDUCERS.GAME, REDUCERS.LEADER_BOARD, REDUCERS.SETTINGS],
};

const persistedReducers = persistReducer(persistConfig, reducers);

import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducers, middleware);
const persistor = persistStore(store);

export { persistor, store };
