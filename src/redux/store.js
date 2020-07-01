import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import completReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(completReducer, applyMiddleware(...middlewares))

export default store;