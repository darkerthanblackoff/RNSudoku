import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {
  PersistConfig,
  persistReducer,
  persistStore,
  createTransform,
} from 'redux-persist';
import logger from 'redux-logger';
import reducers from '../reducers';
import { REDUCERS } from '../../constants';
import { GameState } from '../../interfaces/StoreState';
import { BoardCell } from '../../gen';

const BoardCellsTransform = createTransform<void, GameState, any, GameState>(
  null,
  (outboundState, key): GameState => {
    const board = outboundState.board?.map((row) => row.map((cell) => BoardCell.from(cell)))
    return { ...outboundState, board };
  },
  {
    whitelist: [REDUCERS.GAME],
  },
);

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [REDUCERS.GAME, REDUCERS.LEADER_BOARD, REDUCERS.SETTINGS],
  transforms: [BoardCellsTransform],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducers, middleware);
const persistor = persistStore(store);

export { persistor, store };
