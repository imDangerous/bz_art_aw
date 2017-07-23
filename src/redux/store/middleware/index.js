import {applyMiddleware, compose} from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunkMiddleware, logger));

export default enhancer;