import { combineReducers, createStore } from 'redux';

// reducer imports
import todoReducers from './src/reducers/todoReducers';

const reducers = combineReducers({todo : todoReducers});

const store = createStore(reducers);
 
export default store; 