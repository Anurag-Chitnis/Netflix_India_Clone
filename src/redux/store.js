import {applyMiddleware,createStore} from 'redux';
import {RootReducer} from './root.reducer';
import logger from 'redux-logger'

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));