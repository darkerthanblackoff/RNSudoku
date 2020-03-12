import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

export default store;
