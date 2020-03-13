import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

export default store;
