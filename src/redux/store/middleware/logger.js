import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
	predicate: (getState, action) => __DEV__
});

export default loggerMiddleware;