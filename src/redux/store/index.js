import { createStore } from 'redux';

import enhancer from './middleware';
import reducer from '../reducers';


function configureStore () {
	return createStore(reducer, enhancer);
}

const store = configureStore();


export default store;